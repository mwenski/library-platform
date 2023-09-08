import axios from '../../config/backendConfig';
import { book } from '../actionTypes';
import { returnErrors } from './errorAction';

export const getBooksAction = (error) => (dispatch) => {
    axios.get('/book')
    .then(res => {
        dispatch({
            type: book.GET_BOOKS_SUCCESS,
            payload: res.data.data
        });
    })
    .catch(err => {
        dispatch({
            type: book.GET_BOOKS_FAIL,
            payload: err
        });
        dispatch(returnErrors(err));
        error();
    })
}

export const searchBooksAction = (query, error) => (dispatch) => {
    axios.get(`/book/find/${query}`)
    .then(res => {
        dispatch({
            type: book.SEARCH_BOOKS_SUCCESS,
            payload: {
                data: res.data.data,
                query: query
            }
        });
    })
    .catch(err => {
        dispatch({
            type: book.SEARCH_BOOKS_FAIL,
            payload: err
        });
        dispatch(returnErrors(err));
        error();
    })
}

export const getBookAction = (bookId, error) => (dispatch) => {
    axios.get(`/book/id/${bookId}`)
    .then(res => {
        if(res.data.data !== null){
            dispatch({
                type: book.GET_BOOK_SUCCESS,
                payload: res.data.data
            });
        }
    })
    .catch(err => {
        dispatch({
            type: book.GET_BOOK_FAIL,
            payload: err
        });
        dispatch(returnErrors(err));
        error();
    })
}

export const createBookAction = (newBook, success, error) => (dispatch) => {
    axios.post('/book', { book: newBook })
    .then(res => {
        dispatch({
            type: book.CREATE_BOOK_SUCCESS,
            payload: res.data.data
        });
        success();
    })
    .catch(err => {
        dispatch({
            type: book.CREATE_BOOK_FAIL,
            payload: err
        });
        dispatch(returnErrors(err));
        error();
    })
}

export const updateBookAction = (updatedBook, success, error) => (dispatch) => {
    axios.put('/book', { book: updatedBook })
    .then(res => {
        dispatch({
            type: book.UPDATE_BOOK_SUCCESS,
            payload: res.data.data
        });
        success();
    })
    .catch(err => {
        dispatch({
            type: book.UPDATE_BOOK_FAIL,
            payload: err
        });
        dispatch(returnErrors(err));
        error();
    })
}

export const deleteBookAction = (bookId, success, error) => (dispatch) => {
    axios.delete(`/book/id/${bookId}`)
    .then(() => {
        dispatch({
            type: book.DELETE_BOOK_SUCCESS,
            payload: bookId
        })
        success();
    })
    .catch(err => {
        dispatch({
            type: book.DELETE_BOOK_FAIL,
            payload: err
        });
        dispatch(returnErrors(err));
        error();
    })
}