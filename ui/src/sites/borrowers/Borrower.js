import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBorrowerById } from "../../services/BorrowerService";
import { getLoansByBorrowerId } from "../../services/LoanService";
import BorrowerInfo from "../../components/borrowers/BorrowerInfo";
import LoanList from "../../components/loans/LoanList";

function Borrower(){
    const { id } = useParams();

    const [borrower, setBorrower] = useState({});
    useEffect(() => {
        getBorrowerById(id).then(borrower => {
            setBorrower(borrower);
        });
    }, [id]);

    const [loansBorrowed, setLoansBorrowed] = useState([]);
    const [loansReturned, setLoansReturned] = useState([]);
    useEffect(() => {
        getLoansByBorrowerId(id).then(loans => {
            setLoansBorrowed(
                loans.filter(loan => loan.status === "borrowed")
            );
            setLoansReturned(
                loans.filter(loan => loan.status === "returned")
            );
        });
    }, [id]);

    return (
        <div>
            <BorrowerInfo borrower={borrower} />
            <h2>Books borrowed</h2>
            <LoanList loans={loansBorrowed} />
            <h2>Books returned</h2>
            <LoanList loans={loansReturned} />
        </div>
    );
}

export default Borrower;