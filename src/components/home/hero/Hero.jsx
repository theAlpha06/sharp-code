import React from "react"
// import Heading from "../../common/heading/Heading"
import "./Hero.css"
// import AboutCard from "../../about/AboutCard"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <h3 className="line-1 anim-typewriter "> Welcome To Yuva-Intern</h3>
            <h1 >Take Your Career to the Next Level with us</h1>
            <p >If you are after a New and Exciting learning Experience that can
              Help you reach your Goals and Unleash your full otential then
              come and be our Intern</p>
            <div className='button '>
              <button className="primary-btn btn1" >
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button className="btn2">
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
      {/* <AboutCard/> */}

      <div className="area">
            <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        
    </>
  )
}

export default Hero
