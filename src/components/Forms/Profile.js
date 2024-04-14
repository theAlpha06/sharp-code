import React, { useState } from "react";
import "./Forms.css";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { profile } from "../../Services/Operations/profile";

export default function Profile() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { token } = useSelector((state) => state.auth)

    const [formData, setFormData] = useState({
        gender: "",
        collage: "",
        collageLocation: "",
        mobile: "",
        branch: "",
        navigate
    })



    const { gender, collage, collageLocation, mobile, branch } = formData

    // Handle input fields, when some value changes
    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }))
    }

    // Handle Form Submission
    const handleOnSubmit = (e) => {

        dispatch(profile(token,
            {
                gender,
                collage,
                collageLocation,
                mobile,
                branch,
                navigate
            }
        ))

    }

    return (
        <div className="login">
        <div className="login__container">
            <h1>Complete Your Profile</h1>
            <form onSubmit={handleOnSubmit} className="form__box">

                <div className="form-control">

                    <input
                        type="text"
                        name="gender"
                        placeholder="Gender"
                        value={gender}
                        onChange={handleOnChange}
                    />
                </div>
                <div className="form-control">

                    <input
                        type="text"
                        name="collage"
                        placeholder="Collage Name"
                        value={collage}
                        onChange={handleOnChange}
                    />
                </div>

                <div className="form-control">

                    <input
                        type="text"
                        name="collageLocation"
                        placeholder="Location of Collage"
                        value={collageLocation}
                        onChange={handleOnChange}
                    />
                </div>

                <div className="form-control">

                    <input
                        type="text"
                        name="branch"
                        placeholder="Branch"
                        value={branch}
                        onChange={handleOnChange}
                    />
                </div>


                <div className="form-control">

                    <input
                        type="number"
                        name="mobile"
                        placeholder="Mobile Number"
                        value={mobile}
                        onChange={handleOnChange}
                    />
                </div>

                <div className="form-control ">
                    <label></label>
                    <button type="submit" className="primary-btn">Update</button>
                </div>
            </form>
        </div>
        </div>
    );
}