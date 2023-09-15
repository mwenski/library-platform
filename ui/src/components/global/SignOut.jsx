import React from "react";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutBorrowerAction } from "../../redux/actions/authAction";

const SignOut = () => {
    const dispatch = useDispatch();

    dispatch(logoutBorrowerAction());

    return <Navigate to='/' />;
}

export default SignOut;