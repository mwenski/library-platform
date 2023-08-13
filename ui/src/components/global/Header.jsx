import { Link } from "react-router-dom";

function Header(){
    return (
        <header>
            <img src="" alt="Logo" />
            <Link to="/">Catalog</Link>
            <Link to="/borrowers">Borrowers</Link>
            <Link to="/login">Sign in</Link>
            <Link to="/register">Sign up</Link>
        </header>
    )
}

export default Header;