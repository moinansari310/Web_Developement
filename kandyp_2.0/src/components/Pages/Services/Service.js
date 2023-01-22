import React from 'react';
import './Service.css';
import ServiceBox from './ServiceBox';
import  Image  from '../../Images/feature_1.png';
import  Image1  from '../../Images/feature_2.png';
import  Image2  from '../../Images/feature_3.png';
import  Image3  from '../../Images/feature_4.jpg';
import chooseImage from '../../Images/choose-us.png';

function Service() {
    return (
        <div className='back-color'>
            <div id='features'>
            <h1 className='service-title'> Our Services</h1>
            <div className='a-container'>
                <ServiceBox  image={ Image} title='Lead Generation' disc='Static lead generation campaigns, scalable lead generation and nurturing campaigns and customized long-term integrated campaigns.' />
                <ServiceBox  image={ Image1} title='Email & SMS' disc='Promotional & invitation emails reminder text offers / promotional text.' />
            </div>
            <div className='a-container'>
                <ServiceBox  image={ Image2} title='Data Prospecting'disc='Segment-wide database, Profile-wise database, Identifying active accounts and the active contacts and find the relevant contacts / decision makers / CXO’s details.' />
                <ServiceBox  image={ Image3} title='Webinar/Seminar' disc='Generate interested audience for sales team to follow up and spread awareness about ‘the specific solution’ amongst the targeted community.' />
            </div>
        </div>
        
        <div className="Home">
        <h1 className='service2-title'>
            Why choose our Services</h1>
            <div className="container-fluid">
                    <div className="col-10 mx-auto">
                    <div className="row">
                    <div className="col-lg-6 mb-6 order-2 order-lg-2">
                <img className=' service-img animated' src={chooseImage} alt='' />  
                </div>
                        <div className="col-mb-6 pt-5 pt-lg-8 order-2 order-lg-3 d-flex justify-content-center flex-column">
                            <p className="service-text">We believe the skillset & experience I possess not only shall bring value to your organization
                            But in turn shall also help me to acquire experience & sharpen our skills amidst your organization's professional work culture.
                            If given an opportunity we positively look forward to give our best to your organization
                            </p>
                 </div>
                </div>
             </div>
          </div>
        </div>              
        </div>
    )
}

export default Service;
