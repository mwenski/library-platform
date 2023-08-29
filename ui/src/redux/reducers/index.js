import { combineReducers } from "@reduxjs/toolkit";
import auth from './authReducer';
import error from './errorReducer';
import book from './bookReducer';

export default combineReducers({
    auth,
    error,
    book
});