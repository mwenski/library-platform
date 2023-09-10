import { Link } from "react-router-dom"

export const AddBookButton = () => {
    const data = localStorage.getItem('borrowerData');
    let role;
    if (data !== null){
        role = data.role;
    }else{
        role = 'not-logged';
    }
    
    return (
        <Link to="/create-book">
            <button className="button-create" 
                title="Add a book!">
                    +
            </button>
        </Link>)
}

export const AddBorrowerButton = () => {
    const data = localStorage.getItem('borrowerData');
    let role;
    if (data !== null){
        role = data.role;
    }else{
        role = 'not-logged';
    }    

    return (
        <Link to="/register">
            <button className="button-create" 
                title="Register new borrower!">
                    +
            </button>
        </Link>)
}