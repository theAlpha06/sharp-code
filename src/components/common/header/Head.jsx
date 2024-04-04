import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
        <img
            style={{ height: "5rem" }}
            src="./images/logo/bg7.png"
            alt="error"
          />
          <div className="logo">
              <h1>SHARP-CODE</h1>
              <span>ONLINE EDUCATION & LEARNING</span>
            </div>

          <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className="fa-brands fa-x-twitter" ></i>
            <i className='fab fa-linkedin icon'></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
