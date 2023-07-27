import React from "react";

function CopyList(props){
    return(
        <table>
            {
                props.copies.map(copy => {
                    return(
                        <tr>
                            <td>
                                {copy.signature}
                            </td>
                            <td>
                                {copy.loanStatus}
                            </td>
                            <td>
                                <button type="button" onClick={(e) => props.deleteCopy(copy.copyId)}>Delete</button>
                            </td>
                        </tr>
                    )
                })
            }
        </table>
    );
}

export default CopyList;