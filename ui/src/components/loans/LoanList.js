import React from "react";
import { updateLoan } from "../../services/LoanService";
import { updateCopy } from "../../services/CopyService";
import LoanRow from "./LoanRow";

function LoanList(props){

    function returnBook(loanId, copyId){
        let loan = {
            loanId: loanId,
            dateReturned: new Date(),
            status: "returned"
        }
    
        let copy = {
            copyId: copyId,
            loanStatus: "available"
        }

        updateLoan(loan).then(
            updateCopy(copy).then(res => {
                props.handleLoanStatus(res);
            })
        )
    }
    
    return(
        <table>
            <tbody>
                {
                    props.loans.map(loan => 
                        <LoanRow loan={loan} returnBook={returnBook} />
                    )
                }
            </tbody>
        </table>
    );
}

export default LoanList;