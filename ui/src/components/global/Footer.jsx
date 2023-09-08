import { Link } from "react-router-dom";
import { LuLibrary } from "react-icons/lu";

const Footer = () => {
    return (
        <footer>
                <div className="column">
                    <ul>
                        <li>
                            <Link to="/">Catalog</Link>
                        </li>
                        <li>
                            <Link to="/borrowers">Borrowers</Link>
                        </li>
                        <li>
                            <a href="https://github.com/mwenski">Author</a>
                        </li>
                        <li>
                            <a href="https://github.com/mwenski/library-platform">Code</a>
                        </li>
                    </ul>
                </div>
                <div className="column">
                    <div className="logo">
                    <Link to="/">
                        <LuLibrary />
                        <div>library</div>
                    </Link>
                    </div>
                    <p>City library</p>
                    <p>Main Street 1</p>
                    <p>12345 City</p>
                    <p>Phone: <a href="tel:+48000000000">000-000-000</a></p>
                    <p>Email: <a href="mailto:">mail[at]library.com</a></p>
                </div>
        </footer>
    )
}

export default Footer;