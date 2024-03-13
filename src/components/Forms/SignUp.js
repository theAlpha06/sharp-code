import React, { useState } from "react";

import "./Forms.css";

export default function SignUp() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    domain: "",

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

  const postData = async (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      domain } = state;

    const res = await fetch("/api/v2/auth/signup", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        domain
      })
    });

    const data=await res.json();
    if (data.status===400 || !data)
    {
      window.alert("Invalid Registration")
    }
    else{
      window.alert(" Registration successful");
     
    }
  }

  return (
    <div className="login__container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit} method="POST" className="form__box">
        <div className="form-control">

          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={state.firstName}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-control">

          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={state.lastName}
            onChange={handleInputChange}
          />
        </div>

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

        <div className="form-control">

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={state.confirmPassword}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-control">

          <input
            type="text"
            name="domain"
            placeholder="Domain of Internship"
            value={state.domain}
            onChange={handleInputChange}
          />
        </div>


        <div className="form-control ">
          <label></label>
          <button type="submit" className="primary-btn" onClick={postData}>Register</button>
        </div>
      </form>
    </div>
  );
}

