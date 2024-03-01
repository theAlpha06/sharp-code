import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from "./thumbnail1.jfif";
import img2 from "./thumbnail2.jpg";
import img3 from "./thumbnail3.jfif";
import img4 from "./thumbnail4.jfif";
import "./slider.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function Slider() {
  const [setSwiperRef] = useState(null);

  return (
    <>
      <h1 className="ourcourses">OUR COURSES</h1>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <div class="main__container">
          <div class="cards__container swiper mySwiper">
            <div class="cards  swiper-wrapper">
              <SwiperSlide>
              <div className="slide-content">
                  <img src={img1} alt={img2} />
                  <h3>ANUJ DUBEY</h3>
                  <p>
                    Hii anuj Dubey how are you, i likely to invite you in my
                    inogration of my own company and you should come with your
                    family thankyou
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="slide-content">
                  <img src={img1} alt={img2} />
                  <h3>ANUJ DUBEY</h3>
                  <p>
                    Hii anuj Dubey how are you, i likely to invite you in my
                    inogration of my own company and you should come with your
                    family thankyou
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="slide-content">
                  <img src={img1} alt={img2} />
                  <h3>ANUJ DUBEY</h3>
                  <p>
                    Hii anuj Dubey how are you, i likely to invite you in my
                    inogration of my own company and you should come with your
                    family thankyou
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="slide-content">
                  <img src={img1} alt={img2} />
                  <h3>ANUJ DUBEY</h3>
                  <p>
                    Hii anuj Dubey how are you, i likely to invite you in my
                    inogration of my own company and you should come with your
                    family thankyou
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="slide-content">
                  <img src={img1} alt={img2} />
                  <h3>ANUJ DUBEY</h3>
                  <p>
                    Hii anuj Dubey how are you, i likely to invite you in my
                    inogration of my own company and you should come with your
                    family thankyou
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="slide-content">
                  <img src={img1} alt={img2} />
                  <h3>ANUJ DUBEY</h3>
                  <p>
                    Hii anuj Dubey how are you, i likely to invite you in my
                    inogration of my own company and you should come with your
                    family thankyou
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
              <div className="slide-content">
                  <img src={img1} alt={img2} />
                  <h3>ANUJ DUBEY</h3>
                  <p>
                    Hii anuj Dubey how are you, i likely to invite you in my
                    inogration of my own company and you should come with your
                    family thankyou
                  </p>
                </div>
              </SwiperSlide>
            </div>
          </div>
        </div>
      </Swiper>
    </>
  );
}
