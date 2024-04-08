import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import { homeAbout } from "../../dummydata"

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"


const AboutCardHome = () => {
  useEffect(() => {
    AOS.init({duration:1000});
  }, [])
  return (
    <>
      <section className='aboutHomeH' >
        <div className='containerH flexSB'>
          <div className='left'>
            <img src='./images/bg4.png' alt='' data-aos="fade-down-right"/>
          </div>
          <div className='right'>
            <Heading subtitle='LEARN ANYTHING' title='Benefits About Online Learning Expertise' />
            <div className='items'>
              {homeAbout.map((val) => {
                return (
                  <div className='item flexSB' data-aos="fade-left" >
                    <div className='img item_img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutCardHome
