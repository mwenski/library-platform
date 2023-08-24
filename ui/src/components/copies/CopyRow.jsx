import CreateUpdateCopy from "./CreateUpdateCopy";
import { BsTrash } from "react-icons/bs";

function CopyRow({ copy, deleteCopy, borrowBook }){

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
                <CreateUpdateCopy copy={copy} />
                <button type="button" 
                title="Delete the copy" 
                className="button-delete" 
                onClick={(e) => deleteCopy(copy.copyId)}>
                    <BsTrash />
                </button>
            </td>
        </tr>
    )
}

export default CopyRow;