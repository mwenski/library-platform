import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const login = localStorage.getItem('accessToken');
    // const data = localStorage.getItem('borrowerData');

    // const page = (data.role === 'admin') ? <Outlet /> : <Navigate to={{ pathname: `/borrower/${data.borrowerId}` }} />

    return login ? <Outlet /> : <Navigate to='/login' />;
}

export default ProtectedRoute;