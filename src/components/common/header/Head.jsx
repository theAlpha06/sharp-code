import React from "react"
<<<<<<< HEAD
import "./header.css";

=======
import { Link } from "react-router-dom"
>>>>>>> ec71c2128cec661d03808103f8dbe2ca82c96cb2
const Head = () => {
  return (
    <>
      <section className='head'>
<<<<<<< HEAD
        <div className=' flexSB mobile_head'>
          <a href="/"> 
          <img
            style={{ height: "5rem" }}
            src="./images/logo/bg5.png"
=======
        <div className='container flexSB'>
        <Link to="/"><img
            style={{ height: "4rem" }}
            src="./images/logo/logo.png"
>>>>>>> ec71c2128cec661d03808103f8dbe2ca82c96cb2
            alt="error"
          /></Link>
          <div className="logo">
            <h1>SHARP-CODE</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
          </div>

          <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className="fa-brands fa-x-twitter" ></i>
            <i className='fab fa-linkedin icon'></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
