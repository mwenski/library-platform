import { returnBook } from "../../services/LibraryService";
import LoanRow from "./LoanRow";

function LoanList(props){

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
            props.handleLoanStatus(res)
        )
    }
    
    return(
        <table>
            <tbody>
                {
                    props.loans.map(loan => 
                        <LoanRow loan={loan} returnBook={retBook} />
                    )
                }
            </tbody>
        </table>
    );
}

export default LoanList;