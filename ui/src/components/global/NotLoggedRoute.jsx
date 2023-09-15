import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const NotLoggedRoute = () => {
    const login = localStorage.getItem('accessToken');

    return login ? <Navigate to='/' /> : <Outlet />;
}

export default NotLoggedRoute;