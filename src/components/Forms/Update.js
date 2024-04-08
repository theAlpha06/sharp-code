import React, { useState } from "react";
import { useDispatch } from "react-redux"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { setSignupData } from "../../slices/authSlice";
import { signUp } from "../../Services/Operations/apiAuth"
import "./Forms.css";
import axios from "axios";

export default function Update() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    gender: "", // Initialize gender to an empty string
    collageName: "",
    collageLocation: "",
    batch: "",
    mobileNo: "",
    branch: "",
  })

  const { gender, collageName, collageLocation, batch, mobileNo, branch } = formData

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = async(e) => {
    e.preventDefault();
    const signupData = { ...formData }
    try {
      dispatch(setSignupData(signupData))
      dispatch(signUp(gender, collageName, collageLocation, batch, mobileNo, branch, navigate))
    } catch (err) {
      toast.error("There is some error: ", err.response.data.message);
    }
    // Reset form fields after submission
    setFormData({
      gender: "",
      collageName: "",
      collageLocation: "",
      batch: "",
      mobileNo: "",
      branch: "",
    })
  }

  return (
    <div className="login">
    <div className="login__container">
      <h1 className="title">Update Details</h1>
      <form onSubmit={handleOnSubmit} method="POST" className="form__box">
      <div className="form-control">
          <input
            type="text"
            name="mobileNo"
            placeholder="Mobile Number"
            value={mobileNo}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="form-control select">
        <select
          name="gender"
          value={gender}
          onChange={handleOnChange}
          required
          className={gender ? "selected" : ""}
        >
          <option value="" disabled hidden>Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

        <div className="form-control">
          <input
            type="text"
            name="collageName"
            placeholder="College Name"
            value={collageName}
            onChange={handleOnChange}
            required
          />
        </div>

        <div className="form-control">
          <input
            type="text"
            name="collageLocation"
            placeholder="College Location"
            value={collageLocation}
            onChange={handleOnChange}
            required
          />
        </div>

        <div className="form-control">
          <input
            type="text"
            name="batch"
            placeholder="Batch"
            value={batch}
            onChange={handleOnChange}
            required
          />
        </div>

        <div className="form-control">
          <input
            type="text"
            name="branch"
            placeholder="Branch"
            value={branch}
            onChange={handleOnChange}
            required
          />
        </div>

        <div className="form-control">
          <button type="submit" className="primary-btn btn" >Update</button>
        </div>
        
        <p>Or <a className="createnewact" href="/login">Login?</a></p>
      </form>
    </div>
    </div>
  );
}
