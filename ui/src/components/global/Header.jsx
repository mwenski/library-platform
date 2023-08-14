import { Link } from "react-router-dom";

function Header(){
    return (
        <header>
            <img src="" alt="Logo" />
            <ul>
                <li><Link to="/">Catalog</Link></li>
                <li><Link to="/borrowers">Borrowers</Link></li>
                <li><Link to="/login">Sign in</Link></li>
                <li><Link to="/register">Sign up</Link></li>
            </ul>
        </header>
    )
}

export default Header;