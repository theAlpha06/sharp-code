import React from "react"
// import { blog } from "../../../dummydata"
import "./footer.css"
import { Link } from "react-router-dom"


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
              <Link to="/about"><li>About Us</li></Link>
              <Link to="/team"><li>Internship</li></Link>
              <Link to="/faq"><li>FAQ</li></Link>
              <Link to="/contact"><li> <i className="fa fa-phone-square"></i> Contact Us</li></Link>
              <li><i className='fa fa-envelope'></i>  abc@gmail.com</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <Link to="/register"><li>Registration</li></Link>
              <Link to="/login"><li>Login</li></Link>
              <Link to="/update"><li>Update Details</li></Link>
              <Link to="/submission"><li>Task Submission</li></Link>

            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <Link to="/privacy"><li>Privacy and Policy</li></Link>
              <Link to="/termandcondition"><li>Term and conditions</li></Link>
              <Link to="/codeofconduct"><li>Code of Conduct</li></Link>

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
