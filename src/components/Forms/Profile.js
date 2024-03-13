import React, { useState } from "react";
import "./Forms.css";

export default function Profile() {
    const [state, setState] = useState({
        gender: "",
        collage: "",
        collageLocation: "",
        branch: "",
        mobile: "",
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
            <h1>Complete Your Profile</h1>
            <form onSubmit={handleSubmit} className="form__box">

                <div className="form-control">

                    <input
                        type="text"
                        name="gender"
                        placeholder="Gender"
                        value={state.gender}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-control">

                    <input
                        type="text"
                        name="collage"
                        placeholder="Collage Name"
                        value={state.collage}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-control">

                    <input
                        type="text"
                        name="collageLocation"
                        placeholder="Location of Collage"
                        value={state.collageLocation}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-control">

                    <input
                        type="text"
                        name="branch"
                        placeholder="Branch"
                        value={state.branch}
                        onChange={handleInputChange}
                    />
                </div>


                <div className="form-control">

                    <input
                        type="number"
                        name="mobile"
                        placeholder="Mobile Number"
                        value={state.mobile}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-control ">
                    <label></label>
                    <button type="submit" className="primary-btn">Update</button>
                </div>
            </form>
        </div>
    );
}