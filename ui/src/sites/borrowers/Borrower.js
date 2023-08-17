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
        getBorrowerById(id).then(res => {
            setBorrower(res.data);
        });
    }, [id]);

    const [loanStatus, setLoanStatus] = useState({});
    function handleLoanStatus(res){
        setLoanStatus(res)
    }

    const [loansBorrowed, setLoansBorrowed] = useState([]);
    const [loansReturned, setLoansReturned] = useState([]);
    useEffect(() => {
        getLoansByBorrowerId(id).then(res => {
            setLoansBorrowed(
                res.data.filter(loan => loan.status === "borrowed")
            );
            setLoansReturned(
                res.data.filter(loan => loan.status === "returned")
            );
        });
    }, [id, loanStatus]);

    return (
        <div>
            <BorrowerInfo borrower={borrower} />
            <h2>Books borrowed</h2>
            <LoanList loans={loansBorrowed} handleLoanStatus={handleLoanStatus} type={"borrowed"}/>
            <h2>Books returned</h2>
            <LoanList loans={loansReturned} />
        </div>
    );
}

export default Borrower;