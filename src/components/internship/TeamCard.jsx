import React from "react"
import { team } from "../../dummydata"
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
            {/* <Link to="/register"> <button className="btn"  >Apply</button></Link> */}
          </div>
          <div className="button">
            <a href="/register"><button>Apply</button></a>
          </div>
        </div>
        </div>
      ))}
    </>
  )
}

export default TeamCard
