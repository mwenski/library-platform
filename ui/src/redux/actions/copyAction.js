import axios from '../../config/backendConfig';
import { copy } from '../actionTypes';
import { returnErrors } from './errorAction';

export const getCopiesAction = (bookId, error) => (dispatch) => {
    axios.get(`/copy/book/${bookId}`)
    .then(res => {
        dispatch({
            type: copy.GET_COPIES_SUCCESS,
            payload: {
                data: res.data.data,
                bookId: bookId
            }
        });
    })
    .catch(err => {
        dispatch({
            type: copy.GET_COPIES_FAIL,
            payload: err
        });
        dispatch(returnErrors(err));
        error();
    })
}

export const createCopyAction = (newCopy, success, error) => (dispatch) => {
    axios.post('/copy', { copy: newCopy })
    .then(res => {
        dispatch({
            type: copy.CREATE_COPY_SUCCESS,
            payload: res.data.data
        });
        success();
    })
    .catch(err => {
        dispatch({
            type: copy.CREATE_COPY_FAIL,
            payload: err
        });
        dispatch(returnErrors(err));
        error();
    })
}

export const updateCopyAction = (updatedCopy, success, error) => (dispatch) => {
    axios.put('/copy', { copy: updatedCopy })
    .then(res => {
        dispatch({
            type: copy.UPDATE_COPY_SUCCESS,
            payload: res.data.data
        });
        success();
    })
    .catch(err => {
        dispatch({
            type: copy.UPDATE_COPY_FAIL,
            payload: err
        });
        dispatch(returnErrors(err));
        error();
    })
}

export const deleteCopyAction = (copyId, success, error) => (dispatch) => {
    axios.delete(`/copy/id/${copyId}`)
    .then(() => {
        dispatch({
            type: copy.DELETE_COPY_SUCCESS,
            payload: copyId
        });
        success();
    })
    .catch(err => {
        dispatch({
            type: copy.DELETE_COPY_FAIL,
            payload: err
        });
        dispatch(returnErrors(err));
        error();
    })
}