import { useNavigate } from 'react-router-dom';
import axios from '../../config/backendConfig';
import { auth } from "../actionTypes";
import { returnErrors } from './errorAction';

export const registerBorrowerAction = (borrower, success, error) => (dispatch) => {
    axios.post('/auth/register', {borrower})
    .then(res => {
        dispatch({
            type: auth.REGISTER_SUCCESS,
            payload: res
        });
        success();
    })
    .catch((err) => {
        dispatch({
            type: auth.REGISTER_FAIL,
            payload: err
        });
        dispatch(returnErrors(err));
        error();
    })
}

export const loginBorrowerAction = (email, password, success, error) => (dispatch) => {
    axios.post('/auth/login', {email, password})
    .then(res => {
        dispatch({
            type: auth.LOGIN_SUCCESS,
            payload: res.data.data
        });
        success();
    })
    .catch((err) => {
        dispatch({
            type: auth.LOGIN_FAIL,
            payload: err
        });
        dispatch(returnErrors(err));
        error();
    })
}

export const logoutBorrowerAction = () => (dispatch) => {
    const navigate = useNavigate();

    dispatch({
        type: auth.LOGOUT_SUCCESS
    });
    
    navigate('/');
}