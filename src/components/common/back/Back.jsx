import React from "react"
import "./back.css"
// import { useLocation } from "react-router-dom"

const Back = ({ title }) => {
  // const location = useLocation()

  return (
    <>
      <section className='back'>
        <h1>{title}</h1>
      </section>
      <div className='margin'></div>
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

export default Back
