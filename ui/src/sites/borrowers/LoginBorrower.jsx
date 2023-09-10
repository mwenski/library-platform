import React, { useState } from "react";
import "../../styles/LoginRegister.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginBorrowerAction } from "../../redux/actions/authAction";
import { showSnackbarAction } from "../../redux/actions/globalNotificationAction";

const LoginBorrower = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(
            loginBorrowerAction(
                email,
                password,
                () => navigate('/'),
                () => dispatch(
                    showSnackbarAction('Invalid username/password', 'error')
                )
            )
        );

        resetForm();
    }

    const resetForm = () => {
        setEmail('');
        setPassword('');
    }


    return(
        <div className="login-register-form">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email address</label>
                    <input type="email" 
                    value={email} 
                    placeholder="Email address" 
                    onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" 
                    value={password} 
                    placeholder="Password" 
                    onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <button type="submit">Login!</button>
                </div>
            </form>
            <div>
                <Link to='/register'>Register now!</Link>
            </div>
        </div>
    );
}

export default LoginBorrower;