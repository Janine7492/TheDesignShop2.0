import { Link } from "react-router-dom";
import "./Footer.css"


function Footer() {
    return (
        <footer>
            <section>
                <article>
                    <h2>The Design Shop</h2>
                    <p>Carefully curated online design store, founded and designed by <span className="bold">Ruby
                        Bacanovic</span>.</p>
                </article>
                <article>
                    <h2>Contact</h2>
                    <a href="mailto:info@design-shop.com">Email us</a>
                    <Link to="/wwu">Work with us</Link>
                </article>
                <article>
                    <h2>Newsletter</h2>
                    <p>Click here to <Link className="bold" to="/newsletter">subscribe</Link></p>
                    <p className="cursive">Don't worry. We hate spam too.</p>
                </article>
                <article>
                    <h2>Find Us Here</h2>
                    <a href="https://www.facebook.com/">Facebook</a>
                    <a href="https://www.instagram.com/">Instagram</a>
                    <a href="https://twitter.com/">Twitter</a>
                </article>
            </section>
            <section>
                <p>© 2019 Design Shop <span className="dot">&bull;</span> The Design Blog</p>
            </section>
        </footer>
    );
};

export default Footer;