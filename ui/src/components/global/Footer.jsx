import { Link } from "react-router-dom";

function Footer(){
    return (
        <footer>
            <Link to="/">Catalog</Link>
            <Link to="/borrowers">Borrowers</Link>
            <p>Copyright 2023</p>
        </footer>
    )
}

export default Footer;