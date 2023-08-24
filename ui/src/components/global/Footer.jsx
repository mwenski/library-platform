import { Link } from "react-router-dom";
import { LuLibrary } from "react-icons/lu";

function Footer(){
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
                    <p>Phone: 123-456-789</p>
                    <p>Email: mail[at]library.com</p>
                </div>
        </footer>
    )
}

export default Footer;