import React from "react"
// import { blog } from "../../../dummydata"
import "./footer.css"

const Footer = () => {
  return (
    <div className="footer__container">
      <footer>
        <div className='container '>
          <div className='box logo'>
            <h1>SHARP-CODE</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
            <p className="footp">Don't let your university, Become a hendrence in your learning</p>

            <i className='fab fa-facebook-f icon'></i>
            {/* <i className='fab fa-twitter icon'></i> */}
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-linkedin icon'></i>
          </div>

          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <a href="/about"><li>About Us</li></a>
              <a href="/team"><li>Internship</li></a>
              <a href="/faq"><li>FAQ</li></a>
              <a href="/login"><li>Login</li></a>
              <a href="/register"><li>Registration</li></a>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <a href="/contact"><li> <i className="fa fa-phone-square"></i> Contact Us</li></a>
              <li><i className='fa fa-envelope'></i>  abc@gmail.com</li>
              <a href="/update"><li>Update Details</li></a>
              <a href="/submission"><li>Task Submission</li></a>

            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <a href="/contact"><li> <i className="fa fa-phone-square"></i> Contact Us</li></a>
              <li><i className='fa fa-envelope'></i>  abc@gmail.com</li>
              <a href="/update"><li>Update Details</li></a>
              <a href="/submission"><li>Task Submission</li></a>

            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2022 All rights reserved
        </p>
      </div>
    </div>
  )
}

export default Footer
