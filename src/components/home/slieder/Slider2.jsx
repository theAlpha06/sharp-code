import React from 'react'
import './slider.css'
import img1 from "./thumbnail4.jfif";

import img3 from "./thumbnail3.jfif";

import img5 from "./thumbnail5.jfif";
import img6 from './thumbnail6.jpg'

export default function Slider2() {
    return (
        <div>
            <h1 className="ourcourses">OUR COURSES</h1>
            <div className="cards__container">

            
                <div className="cards ">

                    <div className="card ">

                        <img className="card__img" src={img6} alt="img"/>
                            <div className="card__desc">
                                <div className="card__title">
                                    Web Development
                                </div>
                                <div className="detail">
                                Explore  web development in our dynamic 4-week internship. From HTML and CSS to JavaScript and beyond, gain the skills to create interactive and visually stunning websites ready for the modern web.
                                </div>
                                <div className="buttons">
                                    <button className="btn">Read More</button>
                                </div>
                            </div>

                    </div>

                    <div className="card ">

                        <img className="card__img" src={img5} alt="img"/>
                            <div className="card__desc">
                                <div className="card__title">
                                    Machine Learning
                                </div>
                                <div className="detail">
                                Discover the principles of machine learning in our cutting-edge 4-week internship. Dive into algorithms, model training, and deployment techniques, and pave the way for innovation in AI-driven applications.
                                </div>
                                <div className="buttons">
                                    <button className="btn">Read More</button>
                                </div>
                            </div>

                    </div>

                    <div className="card ">

                        <img className="card__img" src={img3} alt="img"/>
                            <div className="card__desc">
                                <div className="card__title">
                                    Data Science
                                </div>
                                <div className="detail">
                                Dive into the realm of data science during our 4-week program, mastering machine learning algorithms and predictive modeling to tackle intricate challenges and drive innovation through informed solutions.
                                </div>
                                <div className="buttons">
                                    <button className="btn">Read More</button>
                                </div>
                            </div>

                    </div>

                    <div className="card ">

                        <img className="card__img" src={img1} alt="img"/>
                            <div className="card__desc">
                                <div className="card__title">
                                    Android Development
                                </div>
                                <div className="detail">
                                Elevate your skills in Android development through our intensive 4-week internship, blending theory with practical application to create cutting-edge mobile applications.
                                </div>
                                <div className="buttons">
                                    <button className="btn">Read More</button>
                                </div>
                            </div>

                    </div>

                </div>

            </div>
        </div>
    )
}
