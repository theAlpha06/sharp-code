import React from "react"
import { team } from "../../dummydata"
import { Link } from "react-router-dom"
import './team.css'

const TeamCard = () => {
  return (
    <>
      {team.map((val) => (
        
        <div className="flip-box">
        <div className='items shadow flip-box-inner'>
          <div className='img flip-box-front'>
            <img src={val.cover} alt='' />

          </div>
          <div className='details flip-box-back'>
            <h2>{val.name}</h2>
            <p>{val.work}</p>
            <Link to="/register"> <button className="btn"  >Apply</button></Link>
          </div>
<<<<<<< HEAD
          <div className="button">
            <button>Apply Now</button>
          </div>
=======
          
        </div>
>>>>>>> e0e023ae42acd3452aa593660636154f917271e2
        </div>
      ))}
    </>
  )
}

export default TeamCard
