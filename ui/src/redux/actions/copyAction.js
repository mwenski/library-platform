import axios from '../../config/backendConfig';
import { copy } from '../actionTypes';
import { returnErrors } from './errorAction';

export const getCopiesAction = () => (dispatch) => {
    axios.get('/copy')
    .then(res => {
        dispatch({
            type: copy.GET_COPIES_SUCCESS,
            payload: res
        });
    })
    .catch(err => {
        dispatch({
            type: copy.GET_COPIES_FAIL,
            payload: err
        });
        dispatch(returnErrors(err));
    })
}

export const createCopyAction = (newCopy) => (dispatch) => {
    axios.post('/copy', { copy: newCopy })
    .then(res => {
        dispatch({
            type: copy.CREATE_COPY_SUCCESS,
            payload: res
        })
    })
    .catch(err => {
        dispatch({
            type: copy.CREATE_COPY_FAIL,
            payload: err
        });
        dispatch(returnErrors(err));
    })
}

export const updateCopyAction = (updatedCopy) => (dispatch) => {
    axios.put('/copy', { copy: updatedCopy })
    .then(res => {
        dispatch({
            type: copy.UPDATE_COPY_SUCCESS,
            payload: res
        })
    })
    .catch(err => {
        dispatch({
            type: copy.UPDATE_COPY_FAIL,
            payload: err
        });
        dispatch(returnErrors(err));
    })
}

export const deleteCopyAction = (copyId) => (dispatch) => {
    axios.delete(`/copy/id/${copyId}`)
    .then(
        dispatch({
            type: copy.DELETE_COPY_SUCCESS,
            payload: copyId
        })
    )
    .catch(err => {
        dispatch({
            type: copy.DELETE_COPY_FAIL,
            payload: err
        });
        dispatch(returnErrors(err));
    })
}