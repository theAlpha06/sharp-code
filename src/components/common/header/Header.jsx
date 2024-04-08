import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Head from "./Head";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Function to check if user is logged in
  useEffect(() => {
    checkLoggedIn();
  });
  const checkLoggedIn = () => {
    const token = localStorage.getItem("token");
    console.log("token ==>", token);
    if (token) {
      return setIsLoggedIn(true);
    } else {
      return setIsLoggedIn(false);
    }
  };

  // Function to handle user logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate('/')
  };


  const changeHeaderOnScroll = () => {
    if (window.scrollY > 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeHeaderOnScroll);
    return () => {
      window.removeEventListener("scroll", changeHeaderOnScroll);
    };
  }, []);

  return (
    <>
      <Head />
      <header className={scroll ? "sticky" : ""}>
        <nav className="flexSB">
          <ul
            className={click ? "mobile-nav" : "flexSB home"}
            onClick={() => setClick(false)}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/abouthome">About</Link>
            </li>
            <li>
              <Link to="/team">Internship</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            {isLoggedIn ? (
              <li>
                <Link to="/user/profile">Profile</Link>
              </li>
            ) : (
              <li>
                <Link to="/login" onClick={checkLoggedIn}>
                  Login
                </Link>
              </li>
            )}
          </ul>
          <div className="start">
            {isLoggedIn ? (
              // <a onClick={handleLogout}>Logout</a>
              <Link onClick={handleLogout}>Logout</Link>
            ) : (
              <Link to="/register">Apply For Internship</Link>
            )}
          </div>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? (
              <i className="fa fa-times"></i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
