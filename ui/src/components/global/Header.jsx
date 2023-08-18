import { Link } from "react-router-dom";
import { LuLibrary } from "react-icons/lu";

function Header(){
    return (
        <header>
            <div className="logo">
                <Link to="/">
                    <LuLibrary />
                    <div>library</div>
                </Link>
            </div>
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