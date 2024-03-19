import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import { homeAbout } from "../../dummydata"
<<<<<<< HEAD
=======
import Awrapper from "./Awrapper"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"

>>>>>>> e0e023ae42acd3452aa593660636154f917271e2

const AboutCard = () => {
  useEffect(() => {
    AOS.init({duration:1000});
  }, [])
  return (
    <>
      <section className='aboutHome' >
        <div className='container flexSB'>
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
                    <div className='text '>
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

export default AboutCard
