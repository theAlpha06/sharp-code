import React, { useState } from "react";
import { useDispatch } from "react-redux"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { setSignupData } from "../../slices/authSlice";
import { signUp } from "../../Services/Operations/apiAuth"
// import axios from "axios";
import "./Forms.css";
import axios from "axios";

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
  const handleOnSubmit = async(e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      toast.error("Passwords Do Not Match")
      return
    }
    console.log(firstName,lastName,email,password,confirmPassword,domain);
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
    // const response=axios.post('http://localhost:4000/api/v2/auth/signup',{firstName,lastName,email,password,confirmPassword,domain})
    // console.log(response);
    }
    catch(err){
      toast.error("there is some error bhai>>",err.response.data.message);
    }

    // try{
    // let resp = await axios.post('/about',{firstName,lastName,email,password,confirmPassword,domain});
    // // Reset
    // }
    // catch(err){
    //   toast.error("there is some error bhai>>",err.response.data.message);
    // }
    console.log(firstName,lastName,email,password,confirmPassword,domain);
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
            name="LinkedIn Profile Link"
            placeholder="LinkedIn Profile Link"
            value={firstName}
            onChange={handleOnChange}
            required
          />
        </div>

        <div className="form-control">

          <input
            type="text"
            name="GitHub Profile Link"
            placeholder="GitHub Profile Link"
            value={lastName}
            onChange={handleOnChange}
            required
          />
        </div>

        <div className="form-control">

          <input
            type="text"
            name="Task1 GitHub Link"
            placeholder="Task1 GitHub Link"
            value={email}
            onChange={handleOnChange}
            required
          />
        </div>


        <div className="form-control">

          <input
            type="text"
            name="Task1 LinkedIn Link"
            placeholder="Task1 LinkedIn Link"
            value={confirmPassword}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="form-control">

          <input
            type="text"
            name="Task2 GitHub Link"
            placeholder="Task2 GitHub Link"
            value={email}
            onChange={handleOnChange}
            required
          />
        </div>


        <div className="form-control">

          <input
            type="text"
            name="Task2 LinkedIn Link"
            placeholder="Task2 LinkedIn Link"
            value={confirmPassword}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="form-control">

          <input
            type="text"
            name="Task3 GitHub Link"
            placeholder="Task3 GitHub Link"
            value={email}
            onChange={handleOnChange}
            required
          />
        </div>


        <div className="form-control">

          <input
            type="text"
            name="Task3 LinkedIn Link"
            placeholder="Task3 LinkedIn Link"
            value={confirmPassword}
            onChange={handleOnChange}
            required
          />
        </div>


        <div className="form-control ">
          <label></label>
          <button type="submit" className="primary-btn btn" >Register</button>
        </div> or 
        <a className="createnewact" href="/submission">  Login?</a>
      </form>
    </div>
  );
}

