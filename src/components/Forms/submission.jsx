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
    LinkedIn_Profile_Link: "https://www.linkedin.com/in/anuj-dubey-370010231/",
    GitHub_Profile_Link: "",
    Task1_GitHub_Link: "",
    Task2_GitHub_Link: "",
    Task3_GitHub_Link: "",
    Task1_LinkedIn_Link: "",
    Task2_LinkedIn_Link: "",
    Task3_LinkedIn_Link: "",
   
  })



  const { LinkedIn_Profile_Link, GitHub_Profile_Link, Task1_GitHub_Link,Task2_GitHub_Link,Task3_GitHub_Link,Task3_LinkedIn_Link,Task2_LinkedIn_Link,Task1_LinkedIn_Link } = formData

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
    // console.log(LinkedIn_Profile_Link,GitHub_Profile_Link,email,password,confirmPassword,domain);
    const signupData = {
      ...formData,
    }
    try{
    // dispatch(setSignupData(signupData))
    dispatch(signUp(
      LinkedIn_Profile_Link,
      GitHub_Profile_Link,
      Task1_GitHub_Link,
      Task2_GitHub_Link,
      Task3_GitHub_Link,
      Task1_LinkedIn_Link,
      Task2_LinkedIn_Link,
      Task3_LinkedIn_Link,
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
    console.log(LinkedIn_Profile_Link,GitHub_Profile_Link,Task1_GitHub_Link,Task2_GitHub_Link,Task3_GitHub_Link,Task1_LinkedIn_Link,Task2_LinkedIn_Link,Task3_LinkedIn_Link);
    setFormData({
      LinkedIn_Profile_Link: "",
      GitHub_Profile_Link: "",
      Task1_GitHub_Link: "",
      Task2_GitHub_Link: "",
      Task3_GitHub_Link: "",
      Task1_LinkedIn_Link: "",
      Task2_LinkedIn_Link: "",
      Task3_LinkedIn_Link: "",
    })

  }

  return (
    <div className="login__container">
      <h1 className="title">Register</h1>
      <form onSubmit={handleOnSubmit} method="POST" className="form__box">
        <div className="form-control">

          <input
            type="text"
            name="LinkedIn_Profile_Link"
            placeholder="LinkedIn Profile Link"
            value={LinkedIn_Profile_Link}
            onChange={handleOnChange}
            required
          />
        </div>

        <div className="form-control">

          <input
            type="text"
            name="GitHub_Profile_Link"
            placeholder="GitHub Profile Link"
            value={GitHub_Profile_Link}
            onChange={handleOnChange}
            required
          />
        </div>

        <div className="form-control">

          <input
            type="text"
            name="Task1_GitHub_Link"
            placeholder="Task1 GitHub Link"
            value={Task1_GitHub_Link}
            onChange={handleOnChange}
            required
          />
        </div>


        <div className="form-control">

          <input
            type="text"
            name="Task1_LinkedIn_Link"
            placeholder="Task1 LinkedIn Link"
            value={Task1_LinkedIn_Link}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="form-control">

          <input
            type="text"
            name="Task2_GitHub_Link"
            placeholder="Task2 GitHub Link"
            value={Task2_GitHub_Link}
            onChange={handleOnChange}
            required
          />
        </div>


        <div className="form-control">

          <input
            type="text"
            name="Task2_LinkedIn_Link"
            placeholder="Task2 LinkedIn Link"
            value={Task2_LinkedIn_Link}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="form-control">

          <input
            type="text"
            name="Task3_GitHub_Link"
            placeholder="Task3 GitHub Link"
            value={Task3_GitHub_Link}
            onChange={handleOnChange}
            required
          />
        </div>


        <div className="form-control">

          <input
            type="text"
            name="Task3_LinkedIn_Link"
            placeholder="Task3 LinkedIn Link"
            value={Task3_LinkedIn_Link}
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

