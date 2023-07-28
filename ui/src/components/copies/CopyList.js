import React from "react";

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
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
}

export default CopyList;