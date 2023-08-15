import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../../services/AuthService";

function LoginBorrower(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let handleSubmit = (e) => {
        login(email, password).then((res) => {
            console.log(res);
        });
    }

    return(
        <div className="login-register-form">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email address</label>
                    <input type="email" value={email} placeholder="Email address" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <button type="submit">Login!</button>
                </div>
            </form>
            <div id="link">
                <Link to='/register'>Register now!</Link>
            </div>
        </div>
    );
}

export default LoginBorrower;