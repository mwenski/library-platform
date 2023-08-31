import { Link } from "react-router-dom";
import { BsTrash } from "react-icons/bs";

import { useDispatch } from "react-redux";
import { deleteBorrowerAction } from "../../redux/actions/borrowerAction";

function BorrowerRow({ borrower }){
    const dispatch = useDispatch();

    const deleteBorrower = () => {
        dispatch(
            deleteBorrowerAction(
                borrower.borrowerId
            )
        );
    }

    return(
        <tr key={borrower.borrowerId}>
            <td>{borrower.borrowerId}</td>
            <td>{borrower.firstName}</td>
            <td>{borrower.lastName}</td>
            <td>{borrower.phoneNumber}</td>
            <td>
                <Link to={{ pathname: `/borrower/${borrower.borrowerId}`}}>
                    <button className="button-library" 
                    title="Get borrower data">
                        More
                    </button> 
                </Link>
                <button type="button" 
                className="button-delete" 
                onClick={(e) => deleteBorrower()}>
                    <BsTrash />
                </button>
            </td>   
        </tr>
    );
}

export default BorrowerRow;