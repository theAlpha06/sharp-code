import React from "react"
import "./Hero.css"



const Hero = () => {
 
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <h3 className="line-1 anim-typewriter "> Welcome To Sharp-Code......</h3>
            <h1 >Take Your Career to the Next Level with us</h1>
            <p >If you are after a New and Exciting learning Experience that can
              Help you reach your Goals and Unleash your full otential then
              come and be our Intern</p>
            <div className='button '>
              <button className="buttonhero">
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button className="" >
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
