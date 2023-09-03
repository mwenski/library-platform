import React, { Component } from "react";
import { Route, Navigate, RouteProps } from "react-router-dom";

const ProtectedRoute = (props) => {
    const { component, ...rest } = props;

    return(
        <Route
            {...rest}
            render = {props => 
                localStorage.getItem('accessToken') ? (
                    <Component {...props} />
                ):(
                    <Navigate
                        to={{ pathname: '/login', state: { from: props.location } }}
                    />
                )
            }
        />
    )
}