import axios from '../../config/backendConfig';
import { loan } from '../actionTypes';
import { returnErrors } from './errorAction';

export const getLoansAction = (borrowerId, error) => (dispatch) => {
    axios.get(`/loan/borrower/${borrowerId}`)
    .then(res => {
        dispatch({
            type: loan.GET_LOANS_SUCCESS,
            payload: {
               data: res.data.data,
               borrowerId: borrowerId
            }
        });
    })
    .catch(err => {
        dispatch({
            type: loan.GET_LOANS_FAIL,
            payload: err
        });
        dispatch(returnErrors(err));
        error();
    })
}

export const createLoanAction = (newLoan) => (dispatch) => {
    axios.post('/loan', { loan: newLoan })
    .then(res => {
        dispatch({
            type: loan.CREATE_LOAN_SUCCESS,
            payload: res.data.data
        })
    })
    .catch(err => {
        dispatch({
            type: loan.CREATE_LOAN_FAIL,
            payload: err
        });
        dispatch(returnErrors(err));
    })
}

export const updateLoanAction = (updatedLoan) => (dispatch) => {
    axios.put('/loan', { loan: updatedLoan })
    .then(res => {
        dispatch({
            type: loan.UPDATE_LOAN_SUCCESS,
            payload: res.data.data
        })
    })
    .catch(err => {
        dispatch({
            type: loan.UPDATE_LOAN_FAIL,
            payload: err
        });
        dispatch(returnErrors(err));
    })
}

export const deleteLoanAction = (loanId) => (dispatch) => {
    axios.delete(`/loan/id/${loanId}`)
    .then(
        dispatch({
            type: loan.DELETE_LOAN_SUCCESS,
            payload: loanId
        })
    )
    .catch(err => {
        dispatch({
            type: loan.DELETE_LOAN_FAIL,
            payload: err
        });
        dispatch(returnErrors(err));
    })
}