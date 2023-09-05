import { combineReducers } from "@reduxjs/toolkit";

import auth from './authReducer';
import error from './errorReducer';
import book from './bookReducer';
import copy from "./copyReducer";
import borrower from "./borrowerReducer";
import loan from "./loanReducer";
import globalNotification from "./globalNotificationReducer";

export default combineReducers({
    auth,
    error,
    book,
    copy,
    borrower,
    loan,
    globalNotification
});