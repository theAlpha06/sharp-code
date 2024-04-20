import React, { useState } from "react";
import { faq } from "../../dummydata";
import Heading from "../common/heading/Heading";
import "./faq.css";

const Faq = () => {
  const [click, setClick] = useState(null);

  const toggle = (index) => {
    setClick((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      {/* <Back title="FAQ's" /> */}
      <div className="faq-container">
        <div className="faq-content-container">
          <Heading subtitle="FAQ's" title="Frequently Asked Questions" />
          <section className="faq faqs">
          <div className="faq-image-container">
            <img
              src={process.env.PUBLIC_URL + '/images/bg4.png'}
              alt="FAQ Image"
              className="faq-image"
            />
          </div>
            <div className="container contentfaq">
              {faq.map((val, index) => (
                <div className="faq-item" key={index}>
                  <button
                    className="accordion"
                    onClick={() => toggle(index)}
                  >
                    <div className="faq-content">
                      <h2>{val.title}</h2>
                      <span>
                        {click === index ? (
                          <i className="fa fa-chevron-down"></i>
                        ) : (
                          <i className="fa fa-chevron-right"></i>
                        )}
                      </span>
                    </div>
                  </button>
                  {click === index && (
                    <div className="text">
                      <p>{val.desc}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Faq;
