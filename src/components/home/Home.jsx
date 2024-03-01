import React from "react"
import AboutCard from "../about/AboutCard"
// import Hblog from "./Hblog"
// import HAbout from "./HAbout"
import Hero from "./hero/Hero"
// import Hprice from "./Hprice"
// import Testimonal from "./testimonal/Testimonal"
import H from "./hero/h"
import Slider from "./slieder/Slider"

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      {/* <HAbout /> */}
      <Slider/>
      {/* <H/> */}
      {/* <Testimonal /> */}
      {/* <Hblog /> */}
      {/* <Hprice /> */}
    </>
  )
}

export default Home
