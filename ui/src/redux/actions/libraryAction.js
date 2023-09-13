import axios from '../../config/backendConfig';
import { library, copy, loan } from '../actionTypes';
import { returnErrors } from './errorAction';

export const borrowBookAction = (newLoan, success, error) => (dispatch) => {
    axios.post('/library/borrow-book', {loan: newLoan})
    .then(res => {
        dispatch({
            type: library.BORROW_BOOK_SUCCESS,
            payload: {
                copy: res.data.data.copy,
                loan: res.data.data.loan
            }
        });
        dispatch({
            type: copy.UPDATE_COPY_SUCCESS,
            payload: res.data.data.copy
        });
        dispatch({
            type: loan.UPDATE_LOAN_SUCCESS,
            payload: res.data.data.loan
        });
        success();
    })
    .catch(err => {
        dispatch({
            type: library.BORROW_BOOK_FAIL,
            payload: err
        });
        dispatch(returnErrors(err));
        error();
    })
}

export const returnBookAction = (updatedLoan, success, error) => (dispatch) => {
    axios.post('/library/return-book', {loan: updatedLoan})
    .then(res => {
        dispatch({
            type: library.RETURN_BOOK_SUCCESS,
            payload: {
                copy: res.data.data.copy,
                loan: res.data.data.loan
            }
        });
        dispatch({
            type: copy.UPDATE_COPY_SUCCESS,
            payload: res.data.data.copy
        });
        dispatch({
            type: loan.UPDATE_LOAN_SUCCESS,
            payload: res.data.data.loan
        });
        success();
    })
    .catch(err => {
        dispatch({
            type: library.RETURN_BOOK_FAIL,
            payload: err
        });
        dispatch(returnErrors(err));
        error();
    })
}