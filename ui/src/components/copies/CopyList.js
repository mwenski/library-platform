import React from "react";
import CreateUpdateCopy from "./CreateUpdateCopy";

function CopyList(props){
    return(
        <table>
            <tbody>
                {
                    props.copies.map(copy => {
                        return(
                            <tr key={copy.copyId}>
                                <td>
                                    {copy.signature}
                                </td>
                                <td>
                                    {copy.loanStatus}
                                </td>
                                <td>
                                    <button type="button" onClick={(e) => props.deleteCopy(copy.copyId)}>Delete</button>
                                </td>
                                <td>
                                    <CreateUpdateCopy copy={copy} />
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
}

export default CopyList;