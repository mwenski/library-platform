import React from "react";
import { updateLoan } from "../../services/LoanService";
import { updateCopy } from "../../services/CopyService";

function LoanList(props){

    function returnBook(loan, copy){
        updateLoan(loan).then(
            updateCopy(copy).then(res => {
                console.log(res);
            })
        )
    }
    
    return(
        <table>
            <tbody>
                {
                    props.loans.map(loan => {
                        let updLoan = {
                            loanId: loan.loanId,
                            dateReturned: new Date(),
                            status: "returned"
                        }

                        let updCopy = {
                            copyId: loan.copyId,
                            loanStatus: "available"
                        }

                        return(
                            <tr key={loan.loanId}>
                                <td>
                                    {loan.bookId}
                                </td>
                                <td>
                                    {loan.copyId}
                                </td>
                                <td>
                                    {loan.dateBorrowed}
                                </td>
                                <td>
                                    {loan.dateReturned ?? loan.dueDate}
                                </td>
                                <td>
                                    {loan.dateReturned ? "" : <button onClick={(e) => returnBook(updLoan, updCopy)}>Return</button>}
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
}

export default LoanList;