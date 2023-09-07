import CreateUpdateCopy from "./CreateUpdateCopy";
import { BsTrash } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteCopyAction } from "../../redux/actions/copyAction";
import { borrowBookAction } from "../../redux/actions/libraryAction";

function CopyRow({ copy }){
    const dispatch = useDispatch();

    const deleteCopy = () => {
        dispatch(
            deleteCopyAction(copy.copyId)
        )
    }

    const borrowBook = () => {
        let updatedCopy = {
            copyId: copy.copyId,
            loanStatus: "borrowed"
        };
    
        let newLoan = {
            bookId: copy.bookId,
            copyId: copy.copyId,
            borrowerId: 1,
            dateBorrowed: new Date(),
            dueDate: new Date(new Date().setDate(new Date().getDate() + 30)),
            status: "borrowed"
        };

        dispatch(
            borrowBookAction(
                updatedCopy,
                newLoan
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