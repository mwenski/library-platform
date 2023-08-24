function LoanRow({ loan, returnBook }){

    return(
        <tr key={loan.loanId}>
            <td>{loan.bookId}</td>
            <td>{loan.copyId}</td>
            <td>{loan.dateBorrowed}</td>
            <td>{loan.dateReturned ?? loan.dueDate}</td>
            <td>{loan.dateReturned ? "" : 
                    <button onClick={(e) => returnBook(loan.loanId, loan.copyId)}>Return</button>
                }
            </td>
        </tr>
    )
}

export default LoanRow;