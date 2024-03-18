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
            <div class="cards__container">

            
                <div class="cards ">

                    <div class="card ">

                        <img class="card__img" src={img6} alt="img"/>
                            <div class="card__desc">
                                <div class="card__title">
                                    Web Development
                                </div>
                                <div class="detail">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, voluptate. Beatae repudiandae
                                    nemo qui est rem pariatur nulla voluptatem voluptas?
                                </div>
                                <div class="buttons">
                                    <button class="btn">Read More</button>
                                </div>
                            </div>

                    </div>

                    <div class="card ">

                        <img class="card__img" src={img5} alt="img"/>
                            <div class="card__desc">
                                <div class="card__title">
                                    Machine Learning
                                </div>
                                <div class="detail">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, voluptate. Beatae repudiandae
                                    nemo qui est rem pariatur nulla voluptatem voluptas?
                                </div>
                                <div class="buttons">
                                    <button class="btn">Read More</button>
                                </div>
                            </div>

                    </div>

                    <div class="card ">

                        <img class="card__img" src={img3} alt="img"/>
                            <div class="card__desc">
                                <div class="card__title">
                                    Data Science
                                </div>
                                <div class="detail">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, voluptate. Beatae repudiandae
                                    nemo qui est rem pariatur nulla voluptatem voluptas?
                                </div>
                                <div class="buttons">
                                    <button class="btn">Read More</button>
                                </div>
                            </div>

                    </div>

                    <div class="card ">

                        <img class="card__img" src={img1} alt="img"/>
                            <div class="card__desc">
                                <div class="card__title">
                                    Android Development
                                </div>
                                <div class="detail">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, voluptate. Beatae repudiandae
                                    nemo qui est rem pariatur nulla voluptatem voluptas?
                                </div>
                                <div class="buttons">
                                    <button class="btn">Read More</button>
                                </div>
                            </div>

                    </div>

                </div>

            </div>
        </div>
    )
}
