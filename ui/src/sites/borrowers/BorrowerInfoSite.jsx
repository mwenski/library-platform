import React, { useEffect } from "react";
import "../../styles/BorrowerInfoSite.css";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getLoansAction } from "../../redux/actions/loanAction";
import { showSnackbarAction } from "../../redux/actions/globalNotificationAction";
import BorrowerInfo from "../../components/borrowers/BorrowerInfo";
import LoanList from "../../components/loans/LoanList";

const BorrowerInfoSite = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            getLoansAction(
                id,
                () => dispatch(
                    showSnackbarAction('Cannot find loans', 'error')
                )
            )
        )
    }, [dispatch, id]);

    return (
        <div>
            <BorrowerInfo borrowerId={id}/>
            <h2>Books borrowed</h2>
            <LoanList status={'borrowed'}
            borrowerId={id} />
            <h2>Books returned</h2>
            <LoanList status={'returned'} 
            borrowerId={id}/>
        </div>
    );
}

export default BorrowerInfoSite;