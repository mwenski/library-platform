import React from "react";
import { Link } from "react-router-dom";

function BorrowerList(props){

    return(
        <table>
            <tbody>
                {
                    props.borrowers.map(borrower => {
                        return(
                            <tr key={borrower.borrowerId}>
                                <td>
                                    <Link to={{ pathname: `/borrower/${borrower.borrowerId}`}}>
                                        {borrower.borrowerId}
                                    </Link>
                                </td>
                                <td>
                                    {borrower.firstName}
                                </td>
                                <td>
                                    {borrower.lastName}
                                </td>
                                <td>
                                    <button type="button" onClick={(e) => props.deleteBorrower(borrower.borrowerId)}>Delete</button>
                                </td>
                                
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    );
}

export default BorrowerList;