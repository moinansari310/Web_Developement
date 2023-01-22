import React from 'react';
import './Contact.css';
import { Helmet } from 'react-helmet'; 
import Phone from '../../Images/phone.png';
import email from '../../Images/email.png';
import location from '../../Images/location.png';



const Contact = () => {

    const TITLE = 'Kandyp Contact Us'
     

    return (
         <>
         <Helmet>
          <title>{ TITLE }</title>
        </Helmet>

        <div className="c">
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your problems</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 9318369361
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={email} alt="" />
              sanjeev@kandyp.com <br></br> info@kandyp.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={location} alt="" />
              Lajpat Nagar 2 Block B, Plot no.47  Delhi, India 110024
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your query's?</b> Get in touch. Always available
          </p>
          <form>
            <input type="text"  
            placeholder="Name" 
            required
            name="user_name" />

            <input type="number" 
             placeholder="Phone"
            required 
            name="user_phone" />

            <input type="email"
            placeholder="Email"
            required 
            name="user_email" />

            <textarea rows="5" 
            className='c-message'
            required
            placeholder="Message"
            name="message" />
            <button>Submit</button>
             
          </form>
        </div>
      </div>
    </div>
         </>
    );
};

export default Contact;