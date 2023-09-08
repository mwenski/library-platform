import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBorrowerAction } from "../../redux/actions/borrowerAction";
import { showSnackbarAction } from "../../redux/actions/globalNotificationAction";
import { BsTrash } from "react-icons/bs";

const BorrowerRow = ({ borrower }) => {
    const dispatch = useDispatch();

    const deleteBorrower = () => {
        dispatch(
            deleteBorrowerAction(
                borrower.borrowerId,
                () => dispatch(
                    showSnackbarAction('Borrower removed', 'success')
                ),
                () => dispatch(
                    showSnackbarAction('Cannot remove the borrower', 'error')
                )
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