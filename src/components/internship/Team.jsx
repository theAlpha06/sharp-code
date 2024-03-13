import React from "react"
import Back from "../common/back/Back"
import TeamCard from "./TeamCard"
import "./team.css"
import Awrapper from "../about/Awrapper"
import "../about/about.css"
import SignUp from "../Forms/SignUp"
import Login from "../Forms/Login"
import Profile from "../Forms/Profile"

const Team = () => {
  return (
    <>
      <Back title='Internship' />
      <section className='team padding'>
        <div className='container grid'>
          <TeamCard />
        </div>
      </section>
      <Login/>
      <SignUp/>
      <Profile/>
      <Awrapper />
    </>
  )
}

export default Team
