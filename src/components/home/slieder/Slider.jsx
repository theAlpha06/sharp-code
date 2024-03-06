import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from "./thumbnail4.jfif";
// import img2 from "./thumbnail2.jpg";
// import img3 from "./thumbnail3.jfif";
// import img4 from "./thumbnail4.jfif";
import "./slider.css";


export default function Slider() {
  // const [setSwiperRef] = useState(null);

  return (
    <div className="swiper__container">
      <h1 className="ourcourses">OUR COURSES</h1>
      <Swiper
        className="mySwiper"
        
      >
  
        <div class="cards__container ">
          <div class="cards mySwiper">
            <SwiperSlide>

              <div class="card swiper-slide">

                <img class="card__img" src={img1} alt="img" />
                <div class="card__desc">
                  <div class="card__title">
                    Web Development
                  </div>
                  <div class="detail">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, voluptate. Beatae repudiandae
                    nemo qui est rem pariatur nulla voluptatem voluptas?
                  </div>
                  <div class="buttons">
                    <button class="btn">Apply</button>
                  </div>
                </div>

              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="card swiper-slide">

                <img class="card__img" src={img1} alt="img" />
                <div class="card__desc">
                  <div class="card__title">
                    Machine Learning
                  </div>
                  <div class="detail">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, voluptate. Beatae repudiandae
                    nemo qui est rem pariatur nulla voluptatem voluptas?
                  </div>
                  <div class="buttons">
                    <button class="btn">Apply</button>
                  </div>
                </div>

              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="card swiper-slide">

                <img class="card__img" src={img1} alt="img" />
                <div class="card__desc">
                  <div class="card__title">
                    Data Science
                  </div>
                  <div class="detail">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, voluptate. Beatae repudiandae
                    nemo qui est rem pariatur nulla voluptatem voluptas?
                  </div>
                  <div class="buttons">
                    <button class="btn">Apply</button>
                  </div>
                </div>

              </div>
            </SwiperSlide>
            <SwiperSlide>

              <div class="card swiper-slide">

                <img class="card__img" src={img1} alt="img" />
                <div class="card__desc">
                  <div class="card__title">
                    Android Development
                  </div>
                  <div class="detail">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, voluptate. Beatae repudiandae
                    nemo qui est rem pariatur nulla voluptatem voluptas?
                  </div>
                  <div class="buttons">
                    <button class="btn">Apply</button>
                  </div>
                </div>

              </div>
            </SwiperSlide>

          </div>

        </div>
      </Swiper>
    </div>
  );
}
