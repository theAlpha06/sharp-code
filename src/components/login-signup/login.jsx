import React, { useState } from 'react';
import "./login.css"
// import SignUp from "../Forms/SignUp"
// import Login from "../Forms/Login"
// import Profile from "../Forms/Profile"
import SignInUpPage from "../Forms/abc"
// import SignIn from "../login/login"

const SignIn = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <h2>Member Login</h2>
      <div className='login'>
        <label htmlFor="userId">Username</label>
        <input
          type="text"
          id="userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>
      <div className='login'>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className='log' type="submit">LOGIN</button>
    </form>
    {/* <SignIn/> */}
    {/* <Login/>
    <SignUp/>
    <Profile/> */}
    <SignInUpPage/>
    </>
  );
};

export default SignIn;