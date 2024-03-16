import React from "react"
import { team } from "../../dummydata"
import { Link } from "react-router-dom"
import './team.css'

const TeamCard = () => {
  return (
    <>
      {team.map((val) => (
        <div className='items shadow'>
          <div className='img'>
            <img src={val.cover} alt='' />

          </div>
          <div className='details'>
            <h2>{val.name}</h2>
            <p>{val.work}</p>
          </div>
          <Link to="/register"> <button className="btn"  >Apply</button></Link>
        </div>
      ))}
    </>
  )
}

export default TeamCard
