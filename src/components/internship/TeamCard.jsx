import React from "react";
import { team } from "../../dummydata";
import './team.css';

const TeamCard = () => {
  return (
    <>
      {team.map((val) => (
        <div className="flip-box" key={val.id}>
          <div className='items shadow flip-box-inner'>
            <div className='img flip-box-front'>
              <img src={val.cover} alt='' />
            </div>
            <div className='details flip-box-back'>
              <h2>{val.name}</h2>
              <p>{val.work}</p>
            </div>
            <div className="buttonprice">
              <a href="/register">
                <button>Apply</button>
            <span className="price">₹500</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TeamCard;
