import CreateUpdateCopy from "./CreateUpdateCopy";

function CopyRow(props){

    let borrow;

    if(props.copy.loanStatus === "available"){
        borrow = <button type="button" className="button-library" onClick={(e) => props.borrowBook(props.copy.copyId)}>Borrow</button>
    }

    return(
        <tr key={props.copy.copyId}>
            <td>
                {props.copy.signature}
            </td>
            <td>
                {props.copy.loanStatus}
            </td>
            <td>
                {borrow}
            </td>
            <td>
                <CreateUpdateCopy copy={props.copy} />
            </td>
            <td>
                <button type="button" className="button-delete" onClick={(e) => props.deleteCopy(props.copy.copyId)}>Delete</button>
            </td>
        </tr>
    )
}

export default CopyRow;