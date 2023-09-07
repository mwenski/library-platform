import axios from '../../config/backendConfig';
import { library, copy, loan } from '../actionTypes';
import { returnErrors } from './errorAction';

export const borrowBookAction = (updatedCopy, newLoan) => (dispatch) => {
    axios.post('/library/borrow-book', {copy: updatedCopy, loan: newLoan})
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
        })
    })
    .catch(err => {
        dispatch({
            type: library.BORROW_BOOK_FAIL,
            payload: err
        });
        dispatch(returnErrors(err));
    })
}

export const returnBookAction = (updatedCopy, updatedLoan) => (dispatch) => {
    axios.post('/library/return-book', {copy: updatedCopy, loan: updatedLoan})
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
        })
    })
    .catch(err => {
        dispatch({
            type: library.RETURN_BOOK_FAIL,
            payload: err
        });
        dispatch(returnErrors(err));
    })
}