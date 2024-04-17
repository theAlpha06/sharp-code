import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
        <a href="/"><img
            style={{ height: "5rem" }}
            src="./images/logo/logo.png"
            alt="error"
          /></a>
          <div className="logo">
              <h1>SHARP-CODE</h1>
              <span>Think Sharp, Code Smart</span>
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
