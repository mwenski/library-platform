import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LuLibrary } from "react-icons/lu";
import { BiMenu } from "react-icons/bi";

const Header = () => {
    const [ulExpanded, setUlExpanded] = useState(false);
    const { userData } = useSelector(state => state.auth);
    let role, id;
    if(userData && userData.role){
        role = userData.role;
        id = userData.borrowerId;
    }

    const roleMenu = role === 'admin' ? (
        <li>
            <Link to="/borrowers">Borrowers</Link>
        </li>
    ):(
        <li>
            <Link to={{ pathname: `/borrower/${id}`}} >Profile</Link>
        </li>
    )

    const loggedMenu = userData ? (
        {roleMenu}
        (<li>
            <Link to="/sign-out" >Sign out</Link>
        </li>)
    ):(
        <>
            <li>
                <Link to="/login">Sign in</Link>
            </li>
            <li>
                <Link to="/register">Sign up</Link>
            </li>
        </>
    )

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