// import React from "react"
import Back from "../common/back/Back"
import BlogCard from "./BlogCard"
import "./blog.css"
import { userDetailes } from "../../dummydata"

import React, { useState } from 'react';

function Verify() {
  const [userDetails, setUserDetails] = useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();
    // const certificateNumber = event.target.certificateNumber.value;
    // console.log(certificateNumber);
    // const response = await fetch(`YOUR_API_ENDPOINT/${certificateNumber}`);
    // const data = await response.json();
    const data=userDetailes[0];
    console.log(data.firstName);
    setUserDetails(data);
  };

  // {userDetails && (
  //   <div>
  //     <p>First Name: {userDetails.firstName}</p>
  //     <p>Last Name: {userDetails.lastName}</p>
  //     <p>Gender: {userDetails.gender}</p>
  //     <p>College Name: {userDetails.collegeName}</p>
  //     <p>Year of Batch: {userDetails.yearOfBatch}</p>
  //     <a href={userDetails.certificate} target="_blank" rel="noopener noreferrer">
  //       Download Certificate
  //     </a>
  //   </div>
  // )}

  return (
    <div className="verify">
    <Back title='Verify Your Details' />
      {/* <section className='blog padding'>
        <div className='container grid2'>
    <div className="Verify"> */}
      <h1 >Verify</h1>
      <form className="veri" onSubmit={handleSubmit}>
        <label htmlFor="certificateNumber">Certificate Number:</label>
        <input type="text" name="certificateNumber" required />
        <button type="submit">Verify</button>
      </form>
      {userDetails && (
        <div>
          <p>First Name: {userDetails.firstName}</p>
          <p>Last Name: {userDetails.lastName}</p>
          <p>Gender: {userDetails.gender}</p>
          <p>College Name: {userDetails.collegeName}</p>
          <p>Year of Batch: {userDetails.yearOfBatch}</p>
          {/* <a href={userDetails.certificate} target="_blank" rel="noopener noreferrer">
            Download Certificate
          </a> */}
        </div>
      )}
    </div>
  );
}

export default Verify;
        
