import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BorrowerInfo from "../../components/borrowers/BorrowerInfo";
import LoanList from "../../components/loans/LoanList";

import { useDispatch } from "react-redux";
import { getBorrowerAction } from "../../redux/actions/borrowerAction";
import { getLoansAction } from "../../redux/actions/loanAction";

function BorrowerInfoSite(){
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            getLoansAction(id)
        )
    }, [dispatch, id]);

    const [loanStatus, setLoanStatus] = useState({});
    function handleLoanStatus(res){
        setLoanStatus(res)
    }

    return (
        <div>
            <BorrowerInfo borrowerId={id}/>
            <h2>Books borrowed</h2>
            <LoanList status={'borrowed'}
            borrowerId={id}
            handleLoanStatus={handleLoanStatus} />
            <h2>Books returned</h2>
            <LoanList status={'returned'} 
            borrowerId={id}/>
        </div>
    );
}

export default BorrowerInfoSite;