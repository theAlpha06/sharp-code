import React, { useState } from "react";
import "./Forms.css";

export default function Login() {
    const [state, setState] = useState({
        email: "",
        password: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setState((prevProps) => ({
            ...prevProps,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state);
    };

    return (
        <div className="login__container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit} className="form__box">
                <div className="form-control">
                    
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={state.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-control">
                    
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={state.password}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-control ">
                    <label></label>
                    <button type="submit" className="primary-btn">Login</button>
                </div>
            </form>
        </div>
    );
}

