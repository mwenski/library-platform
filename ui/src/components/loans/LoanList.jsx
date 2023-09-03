import { returnBook } from "../../services/LibraryService";
import LoanRow from "./LoanRow";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function LoanList({ borrowerId ,status, handleLoanStatus }){
    const loansData = useSelector(state => state.loan.loansArray);
    const loans = loansData.filter(loan => loan.borrowerId == borrowerId)
                    .filter(loan => loan.status == status);

    console.log(loansData);

    function retBook(loanId, copyId){
        let loan = {
            loanId: loanId,
            dateReturned: new Date(),
            status: "returned"
        }
    
        let copy = {
            copyId: copyId,
            loanStatus: "available"
        }

        returnBook(loan, copy).then(res => 
            handleLoanStatus(res)
        )
    }

    if(loans.length === 0){
        return(
            <div className="no-data">
                <h1>You didn't borrowed any book yet</h1>
            </div>
        )
    }
    
    return(
        <table className="loan-list">
            <thead>
                <tr>
                    <td><h4>Title</h4></td>
                    <td><h4>Author</h4></td>
                    <td><h4>Signature</h4></td>
                    <td><h4>Date borrowed</h4></td>
                    <td><h4>{status === "borrowed" ? "Due date" : "Date returned"}</h4></td>
                    <td />
                </tr>
            </thead>
            <tbody>
                {
                    loans.map(loan => 
                        <LoanRow loan={loan} returnBook={retBook} />
                    )
                }
            </tbody>
        </table>
    );
}

export default LoanList;