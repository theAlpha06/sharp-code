import React from 'react';
// import { useHistory } from 'react-router-dom';
import "./signInup.css"
// import SignInForm from './Login';
// import SignUpForm from './SignUp';


export default function Signinup() {
const handlebtn=()=>{
  let main=document.getElementById("main");
  if(main.classList.contains('right-panel-active')){
    console.log("right-panel-active is already added.....");
    main.classList.remove('right-panel-active');
}
else{
    main.classList.add('right-panel-active');
}
}

  return (
    <div className='singinup'>
  <div className="container" id="main">
    <div className="sign-up" onClick={handlebtn}>
      <form  action="/">
        <h1>Create Account</h1>
        <div className="social-container">
          <a href="/" className="social">
            <i className="fab fa-facebook" />
          </a>
          <a href="/" className="social">
            <i className="fab fa-google-plus-g" />
          </a>
          <a href="/" className="social">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        <p>or use your email for registration</p>
        <input type="text" name="txt" placeholder="Name" required="" />
        <input type="email" name="email" placeholder="Email" required="" />
        <input type="password" name="pswd" placeholder="Password" required="" />
        <button className='btn'>Sign Up</button>
      </form>
    </div>
    <div className="sign-in" >
      <form action="/">
        <h1>Sign In</h1>
        <div className="social-container">
          <a href="/" className="social">
            <i className="fab fa-facebook" />
          </a>
          <a href="/" className="social">
            <i className="fab fa-google-plus-g" />
          </a>
          <a href="/" className="social">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        <p>or use your account</p>
        <input type="email" name="email" placeholder="Email" required="" />
        <input type="password" name="pswd" placeholder="Password" required="" />
        <a href="/">Forget your Password</a>
        <button className='btn'>Sign In</button>
      </form>
    </div>
    <div className="overlay-container">
      <div className="overlay">
        <div className="overlay-left">
          <h1>Welcome Back!</h1>
          <p>To keep connected with us pleaase login with your personal info</p>
          <button className='btn' id="signIn" onClick={handlebtn}>Sign In</button>
        </div>
        <div className="overlay-right">
          <h1>Hello, friend</h1>
          <p>Enter your personal details and start journey with us</p>
          <button className='btn' id="signUp" onClick={handlebtn}>Sign Up</button>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}





