import React, { useState } from "react";
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import "./Forms.css";
import { apiConnector } from "../../Services/apiConnectors";
import { endpoints } from "../../Services/apis";

const {
  SUBMISSION_API
} = endpoints;

export default function Submission() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    LinkedIn_Profile_Link: "",
    GitHub_Profile_Link: "",
    Task1_GitHub_Link: "",
    Task2_GitHub_Link: "",
    Task3_GitHub_Link: "",
    Task1_LinkedIn_Link: "",
    Task2_LinkedIn_Link: "",
    Task3_LinkedIn_Link: "",
   
  })



  const { LinkedIn_Profile_Link, GitHub_Profile_Link, Task1_GitHub_Link,Task2_GitHub_Link,Task3_GitHub_Link,Task3_LinkedIn_Link,Task2_LinkedIn_Link,Task1_LinkedIn_Link } = formData

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = async(e) => {
    e.preventDefault()
    const signupData = {
      ...formData,
    }
    try{
      const response = await apiConnector("POST", SUBMISSION_API, {
      LinkedIn_Profile_Link,
      GitHub_Profile_Link,
      Task1_GitHub_Link,
      Task2_GitHub_Link,
      Task3_GitHub_Link,
      Task1_LinkedIn_Link,
      Task2_LinkedIn_Link,
      Task3_LinkedIn_Link,
        
      });
      navigate('/user/profile');
    }
    catch(err){
      toast.error("there is some error bhai>>",err.response.data.message);
    }

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
    <div className="login">
    <div className="login__container">
      <h1 className="title">Task Submission</h1>
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
          <button type="submit" className="primary-btn btn" >Submit</button>
        </div> or 
        <a className="createnewact" href="/login">  Login?</a>
      </form>
    </div>
    </div>
  );
}

