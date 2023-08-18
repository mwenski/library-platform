import CreateUpdateCopy from "./CreateUpdateCopy";
import { BsTrash } from "react-icons/bs";

function CopyRow(props){

    let borrow;

    if(props.copy.loanStatus === "available"){
        borrow = <button type="button" title="Borrow the book!" className="button-library" onClick={(e) => props.borrowBook(props.copy.copyId)}>Borrow</button>
    }

    return(
        <tr key={props.copy.copyId}>
            <td>
                {props.copy.signature}
            </td>
            <td>
                {props.copy.placeSymbol}
            </td>
            <td>
                {props.copy.loanStatus}
            </td>
            <td>
                {borrow}
                <CreateUpdateCopy copy={props.copy} />
                <button type="button" title="Delete the copy" className="button-delete" onClick={(e) => props.deleteCopy(props.copy.copyId)}><BsTrash /></button>
            </td>
        </tr>
    )
}

export default CopyRow;