import axios from '../../config/backendConfig';
import { borrower } from '../actionTypes';
import { history } from '../../config/history';
import { returnErrors } from './errorAction';

export const getBorrowersAction = () => (dispatch) => {
    axios.get('/borrower')
    .then(res => {
        dispatch({
            type: borrower.GET_BORROWERS_SUCCESS,
            payload: res.data.data
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

export const searchBorrowersAction = (query) => (dispatch) => {
    axios.get(`/borrower/find/${query}`)
    .then(res => {
        dispatch({
            type: borrower.SEARCH_BORROWERS_SUCCESS,
            payload: {
                data: res.data.data,
                query: query
            }
        });
    })
    .catch(err => {
        dispatch({
            type: borrower.SEARCH_BORROWERS_FAIL,
            payload: err
        });
        dispatch(returnErrors(err));
    })
}


export const getBorrowerAction = (borrowerId) => (dispatch) => {
    dispatch({
        type: borrower.GET_BORROWER_SUCCESS,
        payload: borrowerId
    });
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