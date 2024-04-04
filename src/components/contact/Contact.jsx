import React from "react";
import Back from "../common/back/Back";
import "./contact.css";

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.101828037977!2d75.82425911498119!3d26.912433983131487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4ad8ecf82a57%3A0x4c3ee6314efbb5f5!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1659788942837!5m2!1sen!2sin" width="600" height="50" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade ';

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
                <h4>ADDRESS:</h4>
                <p>198 West 21th Street, Suite 721 New York NY 10016</p>
              </div>
              <div className='contact-box'>
                <h4>EMAIL:</h4>
                <p>info@yoursite.com</p>
              </div>
              {/* <div className='contact-box'>
                <h4>PHONE:</h4>
                <p>+1235 2355 98</p>
              </div> */}
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
