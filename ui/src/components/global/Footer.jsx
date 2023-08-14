import { Link } from "react-router-dom";

function Footer(){
    const year = new Date().getFullYear();
    return (
        <footer>
            <ul>
                <li><Link to="/">Catalog</Link></li>
                <li><Link to="/borrowers">Borrowers</Link></li>
            </ul>
            <p>Copyright <span>&copy;</span>{year}</p>
        </footer>
    )
}

export default Footer;