import CreateUpdateCopy from "./CreateUpdateCopy";
import { BsTrash } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteCopyAction } from "../../redux/actions/copyAction";
import { borrowBookAction } from "../../redux/actions/libraryAction";
import { showSnackbarAction } from "../../redux/actions/globalNotificationAction";

const CopyRow = ({ copy }) => {
    const dispatch = useDispatch();

    const deleteCopy = () => {
        dispatch(
            deleteCopyAction(
                copy.copyId,
                () => dispatch(
                    showSnackbarAction('Copy removed', 'success')
                ),
                () => dispatch(
                    showSnackbarAction('Cannot remove the copy', 'error')
                )
            )
        )
    }

    const borrowBook = () => {
        let newLoan = {
            copyId: copy.copyId,
            borrowerId: 1,
        };

        dispatch(
            borrowBookAction(
                newLoan,
                () => dispatch(
                    showSnackbarAction('Book borrowed', 'success')
                ),
                () => dispatch(
                    showSnackbarAction('Cannot borrow the book', 'error')
                )
            )
        );
    }

    let borrow;
    if(copy.loanStatus === "available"){
        borrow = <button type="button" 
                title="Borrow the book!" 
                className="button-library" 
                onClick={(e) => borrowBook()}>
                    Borrow
                </button>
    }

    return(
        <tr key={copy.copyId}>
            <td>{copy.signature}</td>
            <td>{copy.placeSymbol}</td>
            <td>{copy.loanStatus}</td>
            <td>
                {borrow}
                <CreateUpdateCopy copyId={copy.copyId} />
                <button type="button" 
                title="Delete the copy" 
                className="button-delete" 
                onClick={(e) => deleteCopy()}>
                    <BsTrash />
                </button>
            </td>
        </tr>
    )
}

export default CopyRow;