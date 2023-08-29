import axios from '../../config/backendConfig';
import { book } from '../actionTypes';
import { history } from '../../config/history';
import { returnErrors } from './errorAction';

export const getBooksAction = () => (dispatch) => {
    axios.get('/book')
    .then(res => {
        dispatch({
            type: book.GET_BOOKS_SUCCESS,
            payload: res
        });
    })
    .catch(err => {
        dispatch({
            type: book.GET_BOOKS_FAIL,
            payload: err
        });
        dispatch(returnErrors(err));
    })
}

export const createBookAction = (newBook) => (dispatch) => {
    axios.post('/book', { book: newBook })
    .then(res => {
        dispatch({
            type: book.CREATE_BOOK_SUCCESS,
            payload: res
        })
    })
    .catch(err => {
        dispatch({
            type: book.CREATE_BOOK_FAIL,
            payload: err
        });
        dispatch(returnErrors(err));
    })
}

export const updateBookAction = (updatedBook) => (dispatch) => {
    axios.put('/book', { book: updatedBook })
    .then(res => {
        dispatch({
            type: book.UPDATE_BOOK_SUCCESS,
            payload: res
        })
    })
    .catch(err => {
        dispatch({
            type: book.UPDATE_BOOK_FAIL,
            payload: err
        });
        dispatch(returnErrors(err));
    })
}

export const deleteBookAction = (bookId) => (dispatch) => {
    axios.delete(`/book/id/${bookId}`)
    .then(
        dispatch({
            type: book.DELETE_BOOK_SUCCESS,
            payload: bookId
        })
    )
    .catch(err => {
        dispatch({
            type: book.DELETE_BOOK_FAIL,
            payload: err
        });
        dispatch(returnErrors(err));
    })
}