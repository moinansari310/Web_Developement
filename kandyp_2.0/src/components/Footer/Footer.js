import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
       
    <footer>
    <div className="content">
      <div className="top">
        <div className="logo-details">
           
          <span  className="logo_name">Kandyp Solutions</span>
        </div>
        <div  className="media-icons">
          <Link to="/"><i  className="fab fa-facebook-f"></i></Link>
          <Link to="/"><i  className="fab fa-twitter"></i></Link>
          <Link to="/"><i  className="fab fa-instagram"></i></Link>
          <Link to="/"><i  className="fab fa-linkedin-in"></i></Link>
          <Link to="/"><i  className="fab fa-youtube"></i></Link>
        </div>
      </div>
      <div  className="link-boxes">
        <ul  className="box">
          <li  className="link_name">About Us</li>
          <p  className='footer-about'> We are the service provider of Data profiling, Lead Generation, Audience Generation of the webinar,
                     Corporate event, Seminar Etc.</p>
        </ul>
        <ul  className="box">
          <li  className="link_name">Services</li>
          <li><Link to="/Service">Email & sms</Link></li>
          <li><Link to="/Service">Lead generation</Link></li>
          <li><Link to="/Service">Data prospect</Link></li>
          <li><Link to="/Service">Virtual events</Link></li>
        </ul>
       
        <ul  className="box">
          <li  className="link_name">Address</li>
          <li><Link to="/"><i  className=" footer__fa fa fa-phone"></i><br></br>+91 9318369361</Link></li>
          <li><Link to="/"><i  className=" footer__fa fa fa-envelope"></i> sanjeev@kandyp.com <br></br> info@kandyp.com</Link></li>
          <li><Link to="/"><i  className=" footer__fa fa fa-map-marker"></i><span>Lajpat Nagar 2 </span><span><br></br>Block B, </span><span>
             <br></br>Plot no.47</span><br></br>
          <span>Delhi</span>, <span>India</span>  110024 </Link></li>
           
        </ul>
        <ul  className="box input-box">
          <li  className="link_name">Subscribe</li>
          <li>
              <input type="text" placeholder="Enter your email" />

              </li>
          <li>
              <input type="button" value="Subscribe" />

              </li>
        </ul>
      </div>
    </div>
    <div  className="bottom-details">
      <div  className="bottom_text">
        <span  className="copyright_text">Copyright © 2021</span>
        <span> <Link to="/">Kandyp Solutions</Link>All rights reserved</span>
        <span  className="policy_terms">
          <Link to="/">Privacy policy</Link>
          <Link to="/">Terms & condition</Link>
        </span>
      </div>
    </div>
  </footer>
    )
}

export default Footer
