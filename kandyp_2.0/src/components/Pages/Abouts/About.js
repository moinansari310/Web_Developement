import React from 'react'
import './About.css';
import image from '../../Images/ic_who.png';
import image1 from '../../Images/ic_vision.png';
import image2 from '../../Images/ic_mission.png';

function About() {
    return (
            <div>
            <h1 className='about-head'>About Us</h1>
               
            <div className="about-container">
            <div className="row">
            <div className="col-lg-6">
            <img src={image} className="img-fluid" width="700" height="700" alt=''/>

            </div>
             <div className="col-lg-6">
                    <h1 className="display-4 text-center"style={{color:'#333f50'}}>Who are we</h1>
                    <p className="text-left">We are the service provider of Data profiling, Lead Generation, Audience Generation of the webinar,
                     Corporate event, Seminar Etc.
                    Kandyp Solutions established in 2016, Since then we are thoroughly working with all our clients & provide 
                    them end to end Support in the field of B2B Marketing campaign.
                    We have started our journey as an Tele-Calling Service provider & now we provide complete End to End marketing solutions.
                     With the total of more than 4 years of experience as an organization, 
                    we have handled lots of scenarios & overcome each & every challenge which came on our way of success.</p>
                </div>
            </div>
            </div>
            <div className="mvv-section container text-center">
          <hr></hr>
            <h1 className="display-3 ml-5" style={{fontWeight: '250', color: '#333f50'}}>
                Our mission &amp; vision</h1>
  <div className="mvvs-grid">
    <div className="mvv mvv1">
      <div>
      <img src={image2} className="img-fluid ml-4 mr-4" width="60" alt='' /> 
       </div>
      <h4 style={{position: 'relative', left: '2%', right: '2%', top:'-5%'}}>Mission</h4>
      <p className="mvv-p">To apply new thinking and ideas to create simple, valuable and trusted experiences with technology to continuously improve the way our clients live and work.</p>
       
    </div>

    <div className="mvv mvv2">
      <div>
       <img src={image1} className="img-fluid ml-4 mr-4" width="60" alt='' /> 
      </div>
      <h4 style={{position: 'relative', left: '2%', right: '2%', top: '-10%'}}>Vision</h4>
      <p className="mvv-p">
     "Touch" every individual or organisation with any one of our technology offerings.
      </p>
    </div>
  </div>
</div>
        </div>

    );
}

export default About;
