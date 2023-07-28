import React from "react";

function LoanList(props){
    return(
        <table>
            <tbody>
                {
                    props.loans.map(loan => {
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
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
}

export default LoanList;