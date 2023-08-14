import React, { useState } from "react";
import { register } from "../../services/AuthService";

function RegisterBorrower(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let handleSubmit = (e) => {
        const borrower = {
            firstName: firstName,
            lastName: lastName,
            address: address,
            phoneNumber: phoneNumber,
            email: email,
            password: password
        }

        register(borrower).then((res) => {
            console.log(res);
        }
        );
    }


    return(
        <div className="login-register-form">
            <h2>Register now!</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First name</label>
                    <input type="text" value={firstName} placeholder="First name" onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div>
                    <label>Last name</label>
                    <input type="text" value={lastName} placeholder="Last name" onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div>
                    <label>Address</label>
                    <input type="text" value={address} placeholder="Address" onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div>
                    <label>Phone number</label>
                    <input type="text" value={phoneNumber} placeholder="Phone number" onChange={(e) => setPhoneNumber(e.target.value)} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                
                
                <button type="submit">Register!</button>

                
            </form>
        </div>
    );
}

export default RegisterBorrower;