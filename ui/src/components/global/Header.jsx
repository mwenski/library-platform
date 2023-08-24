import { useState } from "react";
import { Link } from "react-router-dom";
import { LuLibrary } from "react-icons/lu";
import { BiMenu } from "react-icons/bi";

function Header(){
    const [ulExpanded, setUlExpanded] = useState(false);

    return (
        <header>
            <div className="logo">
                <Link to="/">
                    <LuLibrary />
                    <div>library</div>
                </Link>
            </div>
            <button onClick={() => setUlExpanded(!ulExpanded)}>
                <BiMenu />
            </button>
            <ul className={ulExpanded ? "expanded" : ""}>
                <li>
                    <Link to="/">Catalog</Link>
                </li>
                <li>
                    <Link to="/borrowers">Borrowers</Link>
                </li>
                <li>
                    <Link to="/login">Sign in</Link>
                </li>
                <li>
                    <Link to="/register">Sign up</Link>
                </li>
            </ul>    
        </header>
    )
}

export default Header;