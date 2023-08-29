import axios from '../../config/backendConfig';
import { borrower } from '../actionTypes';
import { history } from '../../config/history';
import { returnErrors } from './errorAction';

export const getBorrowersAction = () => (dispatch) => {
    axios.get('/book')
    .then(res => {
        dispatch({
            type: borrower.GET_BORROWERS_SUCCESS,
            payload: res
        });
    })
    .catch(err => {
        dispatch({
            type: borrower.GET_BORROWERS_FAIL,
            payload: err
        });
        dispatch(returnErrors(err));
    })
}

export const deleteBorrowerAction = (borrowerId) => (dispatch) => {
    axios.delete(`/borrower/id/${borrowerId}`)
    .then(
        dispatch({
            type: borrower.DELETE_BORROWER_SUCCESS,
            payload: borrowerId
        })
    )
    .catch(err => {
        dispatch({
            type: borrower.DELETE_BORROWER_FAIL,
            payload: err
        });
        dispatch(returnErrors(err));
    })
}