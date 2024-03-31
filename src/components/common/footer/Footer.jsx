import React from "react"
// import { blog } from "../../../dummydata"
import "./footer.css"

const Footer = () => {
  return (
    <div className="footer__container">
      <footer>
        <div className='container padding'>
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
            <hr />
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <hr />
            <ul>
              <li>Contact Us</li>
              <li><i className='fa fa-mobile'></i> +91-1234567809</li>
              <li><i className='fa fa-home'></i>  Har jagah ham hi hai jaha dekhna vahi mil lena</li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2022 All rights reserved | This template is made with <i className='fa fa-heart'></i> by GorkhCoder
        </p>
      <hr/>
      <div className="lastline">
        <a href="privacy">Privacy</a>
        <a href="Terms&conditions">Terms & Conditions</a>
        <a href="Feedbacks">Feedbacks</a>
      </div>
      </div>
    </div>
  )
}

export default Footer
