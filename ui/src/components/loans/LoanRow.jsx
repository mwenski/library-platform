import { useDispatch } from "react-redux";
import { returnBookAction } from "../../redux/actions/libraryAction";

const LoanRow = ({ loan }) => {
    const dispatch = useDispatch();

    const returnBook = () => {
        const updatedLoan = {
            loanId: loan.loanId,
            dateReturned: new Date(),
            status: "returned"
        }
    
        const updatedCopy = {
            copyId: loan.copyId,
            loanStatus: "available"
        }

        dispatch(
            returnBookAction(
                updatedCopy,
                updatedLoan
            )
        )
    }

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