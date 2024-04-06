import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const [scroll, setScroll] = useState(false);

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
         
          <ul className={click ? "mobile-nav" : "flexSB home"} onClick={() => setClick(false)}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/team">Internship</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/user/profile">Profile</Link>
            </li>
          </ul>
          <div className="start">
            <Link to="/register">Apply For Internship</Link>
          </div>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
