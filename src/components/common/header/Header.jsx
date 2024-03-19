import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB' >
          <ul className= {click ? "mobile-nav" : "flexSB home"} onClick={() => setClick(false)}>
            <li  >
              <Link to='/'>Home</Link>
            </li>
            <li >
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/team'>Internship</Link>
            </li>
            <li>
              <Link to='/pricing'>FAQ's</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
<<<<<<< HEAD
              <Link to='/signinup'>Login/Signup</Link>
            </li>
=======
              <Link to='/register'>Apply</Link>
            </li>  
>>>>>>> e0e023ae42acd3452aa593660636154f917271e2
          </ul>
          <div className='start' >
            <div className=''>GET INTERNSHIP</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
