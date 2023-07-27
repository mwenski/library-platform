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
                        </tr>
                    )
                })
            }
        </table>
    );
}

export default CopyList;