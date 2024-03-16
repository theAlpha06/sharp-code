import React, { useState } from "react";
import { useDispatch } from "react-redux"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"
// import { setSignupData } from "../../slices/authSlice";
import { signUp } from "../../Services/Operations/apiAuth"

import "./Forms.css";

export default function SignUp() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    domain: "",
   
  })



  const { firstName, lastName, email, password, confirmPassword, domain } = formData

  // Handle input fields, when some value changes
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  // Handle Form Submission
  const handleOnSubmit = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      toast.error("Passwords Do Not Match")
      return
    }
    // const signupData = {
    //   ...formData,
    // }

    // dispatch(setSignupData(signupData))
    dispatch(signUp(firstName,
      lastName,
      email,
      password,
      confirmPassword,
      domain,
      navigate
      ))


    // Reset
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      domain: "",
    })

  }

  return (
    <div className="login__container">
      <h1 className="title">Register</h1>
      <form onSubmit={handleOnSubmit} method="POST" className="form__box">
        <div className="form-control">

          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={handleOnChange}
          />
        </div>

        <div className="form-control">

          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={lastName}
            onChange={handleOnChange}
          />
        </div>

        <div className="form-control">

          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleOnChange}
          />
        </div>


        <div className="form-control">

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleOnChange}
          />
        </div>

        <div className="form-control">

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleOnChange}
          />
        </div>

        <div className="form-control">

          <input
            type="text"
            name="domain"
            placeholder="Domain of Internship"
            value={domain}
            onChange={handleOnChange}
          />
        </div>


        <div className="form-control ">
          <label></label>
          <button type="submit" className="primary-btn btn" >Register</button>
        </div>
      </form>
    </div>
  );
}

