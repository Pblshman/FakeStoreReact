import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "../styles/shop.css"

function Shop(){ 

    function NumItemsCart(){ 

        return(<div id="CartDiv">

            <p className="RegularText">Items in cart: </p>
            <p className="HeaderText">{numProd}</p>

        </div>)

    }

    function ErrorMessage() {
        return (
            <div id="ErrorMessage">
                <h1 className="HeaderText">There was an error. Please try again later.</h1>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80vw"  
                    height= "80vh"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="8" y1="14" x2="16" y2="14" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
            </div>
        );
    }

    function LoadingMessage() {
        return (
            <div id="LoadingMessage">
                <h1 className="HeaderText">Loading...</h1>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80vw"
                    height="80vh"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid"
                    className="lds-ring"
                    style={{ background: 'none' }}
                >
                    <circle
                        cx="50"
                        cy="50"
                        fill="none"
                        strokeLinecap="round"
                        r="40"
                        strokeWidth="4"
                        stroke="#007bff"
                        strokeDasharray="62.83185307179586 62.83185307179586"
                        transform="rotate(139.556 50 50)"
                    >
                        <animateTransform
                            attributeName="transform"
                            type="rotate"
                            repeatCount="indefinite"
                            dur="0.78125s"
                            values="0 50 50;360 50 50"
                            keyTimes="0;1"
                        ></animateTransform>
                    </circle>
                </svg>
            </div>
        );
    }

    function createProduct({ key, imageUrl, price, onBuyClick }) {
        return (
            <div key={key} className="ProductDiv">
                <img src={imageUrl} alt="Product Image" className="ProductsImage" />
                <p className="HeaderText">{price}</p>
                <button className="HeaderText" onClick={onBuyClick}>COMPRAR</button>
            </div>
        );
    }

    function IncrementNumProd() {
        setNumProd(prevNumProd => prevNumProd + 1);
    }

    const [products, setProducts] = useState(null)
    let [isLoading, setIsLoading] = useState(true)
    let [error, setError] = useState(null)
    const [numProd, setNumProd] = useState(0)

    useEffect( () => {

        fetch('https://fakestoreapi.com/products')
        .then((response) => {
            if (response.status >= 400) {
              throw new Error("server error");
            }
            return response.json();
          })
        .catch(error => setError(error))
        .then(resJson => setProducts(resJson))  
        .finally(() => setIsLoading(false)) 

    }, [])

    return (
        <div id="ShopDiv">

            <header>

                <h1 className="HeaderText">FakeStore</h1>

            </header>    

            <nav className="NavigationBar">

                <div className="HeaderText"><Link to="/">Homepage</Link></div>
                <div className="HeaderText">Shop</div>

            </nav>

            <div id="ProductsDiv">
                {error ? (
                    <ErrorMessage />
                ) : isLoading ? (
                    <LoadingMessage />
                ) : (
                    <>
                        <NumItemsCart />
                        {products.map(product => (
                            createProduct({
                                key: product.image,
                                imageUrl: product.image,
                                price: product.price,
                                onBuyClick: IncrementNumProd
                            })
                        ))}
                    </>
                )}
            </div>

        </div>
    )

}

export default Shop