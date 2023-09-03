import CreateUpdateCopy from "./CreateUpdateCopy";
import { BsTrash } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteCopyAction } from "../../redux/actions/copyAction";

function CopyRow({ copy, borrowBook }){
    const dispatch = useDispatch();

    const deleteCopy = () => {
        dispatch(deleteCopyAction(copy.copyId))
    }

    let borrow;
    if(copy.loanStatus === "available"){
        borrow = <button type="button" 
                title="Borrow the book!" 
                className="button-library" 
                onClick={(e) => borrowBook(copy.copyId)}>
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