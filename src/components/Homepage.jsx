import "../styles/homepage.css"
import { Link } from "react-router-dom";

function Homepage(){ 

    return(<div id="HomepageDiv">

        <header>

            <h1 className="HeaderText">FakeStore</h1>

        </header>    

        <nav className="NavigationBar">

            <div className="HeaderText">Homepage</div>
            <div className="HeaderText"><Link to="shop">Shop</Link></div>

        </nav>

            <div id="HomepageText" className="RegularText">

            <p>FakeStore is an online retail platform that offers a wide range of products for purchase. From electronics and gadgets to clothing, accessories, home goods, and more, FakeStore aims to provide customers with a convenient and secure shopping experience.</p>

            <p>The store boasts a user-friendly interface, making it easy for customers to browse, search for products, and make purchases. With a focus on customer satisfaction, FakeStore offers competitive prices, fast shipping options, and reliable customer support to ensure a seamless shopping experience.</p>

            <p>FakeStore also features a secure payment gateway, allowing customers to pay for their orders using various payment methods, including credit/debit cards, digital wallets, and other online payment options. Additionally, FakeStore may offer promotions, discounts, and loyalty programs to reward loyal customers and attract new ones.</p>

            <p>Overall, FakeStore strives to be a trusted online retailer, offering quality products, excellent customer service, and a convenient shopping experience for customers worldwide.</p>

            </div>

            <footer className="RegularText">
                <p>FakeStore</p>
                <p>123 Fake Street, Fakesville, FAKE123</p>
                <p>Email: info@fakemail.com</p>
                <p>Phone: 123-456-7890</p>
            </footer>


    </div>)

}

export default Homepage