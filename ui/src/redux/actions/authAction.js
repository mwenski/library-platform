import axios from '../../config/backendConfig';
import { auth } from "../actionTypes";
import { history } from '../../config/history';
import { returnErrors } from './errorAction';

export const registerBorrowerAction = (borrower) => (dispatch) => {
    axios.post('/auth/register', {borrower})
    .then(res => {
        dispatch({
            type: auth.REGISTER_SUCCESS,
            payload: res
        });
    })
    .catch((err) => {
        dispatch({
            type: auth.REGISTER_FAIL,
            payload: err
        });
        dispatch(returnErrors(err));
    })
}

export const loginBorrowerAction = (email, password) => (dispatch) => {
    axios.post('/auth/login', {email, password})
    .then(res => {
        dispatch({
            type: auth.LOGIN_SUCCESS,
            payload: res.data.data
        });
    })
    .catch((err) => {
        dispatch({
            type: auth.LOGIN_FAIL,
            payload: err
        });
        dispatch(returnErrors(err));
    })
}

export const logoutBorrowerAction = () => (dispatch) => {
    dispatch({
        type: auth.LOGOUT_SUCCESS
    });
    history.push('/');
}