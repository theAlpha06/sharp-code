import React, { useState } from "react";
import { useDispatch } from "react-redux"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { setSignupData } from "../../slices/authSlice";
import { signUp } from "../../Services/Operations/apiAuth"
import "./Forms.css";

export default function Submission() {
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

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = async(e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      toast.error("Passwords Do Not Match")
      return
    }
    const signupData = {
      ...formData,
    }
    try{
    dispatch(setSignupData(signupData))
    dispatch(signUp(firstName,
      lastName,
      email,
      password,
      confirmPassword,
      domain,
      navigate
      ))
    }
    catch(err){
      toast.error("there is some error bhai>>",err.response.data.message);
    }

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
    <div className="login">
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
            required
          />
        </div>

        <div className="form-control">

          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={lastName}
            onChange={handleOnChange}
            required
          />
        </div>

        <div className="form-control">

          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleOnChange}
            required
          />
        </div>


        <div className="form-control">

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleOnChange}
            required
          />
        </div>

        <div className="form-control">

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleOnChange}
            required
          />
        </div>

        <div className="form-control">

          <input
            type="text"
            name="domain"
            placeholder="Domain of Internship"
            value={domain}
            onChange={handleOnChange}
            required
          />
        </div>


        <div className="form-control ">
          <label></label>
          <button type="submit" className="primary-btn btn" >Register</button>
        </div> or 
        <a className="createnewact" href="/login">  Login?</a>
      </form>
    </div>
    </div>
  );
}

