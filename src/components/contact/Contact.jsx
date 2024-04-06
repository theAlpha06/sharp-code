import React from "react";
import Back from "../common/back/Back";
import "./contact.css";

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.393908365708!2d76.35820031451388!3d30.837560181461395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391aa6b83f6b0561%3A0x86391ff23c66b6e7!2sSant%20Longowal%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1659802586404!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';

  return (
    <>
      {/* <Back title='Contact us' /> */}
      <section className='contacts'>
       <h1>Contact us</h1>
       <p>We're open for any suggestion or just to have a chat</p>
        <div className='container'>
          <div className='contact-content'>
            <div className='map-container'>
              <iframe src={map} title="Google Map"></iframe>
            </div>
            
          </div>
          <div className="contact-form">
          <div className="contact-details">
              <div className='contact-box'>
                <h4>EMAIL:</h4>
                <p>info@yoursite.com</p>
              </div>
            </div>
            <h3>Send your massage</h3>
            <form action='contactform'>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='3' placeholder='Create a message here...'>                
              </textarea>
              <button className='primary-btn primbtn'>SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
