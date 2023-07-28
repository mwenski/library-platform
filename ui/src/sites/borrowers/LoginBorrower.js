import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginBorrower(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let handleSubmit = (e) => {
        console.log("You logged in!");
    }

    return(
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Login!</button>
            </form>
            <Link to='/register'>Register now!</Link>
        </div>
    );
}

export default LoginBorrower;