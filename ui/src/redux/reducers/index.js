import { combineReducers } from "@reduxjs/toolkit";
import auth from './authReducer';
import error from './errorReducer';

export default combineReducers({
    auth,
    error
});