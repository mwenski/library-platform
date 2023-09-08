import axios from '../../config/backendConfig';
import { borrower } from '../actionTypes';
import { history } from '../../config/history';
import { returnErrors } from './errorAction';

export const getBorrowersAction = (error) => (dispatch) => {
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
        error();
    })
}

export const searchBorrowersAction = (query, error) => (dispatch) => {
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
        error();
    })
}


export const getBorrowerAction = (borrowerId, error) => (dispatch) => {
    axios.get(`/borrower/id/${borrowerId}`)
    .then(res => {
        if(res.data.data !== null){
            dispatch({
                type: borrower.GET_BORROWER_SUCCESS,
                payload: res.data.data
            });
        }
    })
    .catch(err => {
        dispatch({
            type: borrower.GET_BORROWER_FAIL,
            payload: err
        });
        dispatch(returnErrors(err));
        error();
    })

}

export const deleteBorrowerAction = (borrowerId, success, error) => (dispatch) => {
    axios.delete(`/borrower/id/${borrowerId}`)
    .then(() => {
        dispatch({
            type: borrower.DELETE_BORROWER_SUCCESS,
            payload: borrowerId
        });
        success();
    })
    .catch(err => {
        dispatch({
            type: borrower.DELETE_BORROWER_FAIL,
            payload: err
        });
        dispatch(returnErrors(err));
        error();
    })
}