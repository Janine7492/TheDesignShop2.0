import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./Header.css"


function Header() {



    return (
        <header id="top">
            <h1><Link to="/" className="HeaderHomeLink">THE DESIGN SHOP</Link></h1>

            <nav className="regMenu">
                <ul id="regular__menu">
                    <Link to="/weekly"><li>Weekly Recommendations</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                    <Link to="/tdb"><li>T D B</li></Link>
                    <Link to="/wwu"><li>Work with us</li></Link>
                    <Link to="/newsletter"><li>Newsletter</li></Link>
                </ul>
            </nav>

            <Navbar />
        </header>
    )
};

export default Header;