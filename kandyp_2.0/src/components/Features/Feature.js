import React from 'react'
import './Feature.css';
import FeatureBox from './FeatureBox';
import  Image from '../Images/feature_1.png';
import  Image1  from '../Images/feature_2.png';
import  Image2 from '../Images/feature_3.png';
import  Image3 from '../Images/feature_4.jpg';
import Customers from '../Company/Customers';


function Feature() {
    return (
        <div>
        <div id='features'>
            <h1 className='top-title'> Our Services</h1>
            <div className='a-container'>
                <FeatureBox  image={ Image} title='Lead Generation' disc='Static lead generation campaigns, scalable lead generation and nurturing campaigns and customized long-term integrated campaigns.' />
                <FeatureBox  image={ Image1} title='Email & SMS' disc='Promotional & invitation emails reminder text offers / promotional text.' />
            </div>
            <div className='a-container'>
                <FeatureBox  image={ Image2} title='Data Prospecting'disc='Segment-wide database, Profile-wise database, Identifying active accounts and the active contacts and find the relevant contacts / decision makers / CXO’s details.' />
                <FeatureBox  image={ Image3} title='Webinar/Seminar' disc='Generate interested audience for sales team to follow up and spread awareness about ‘the specific solution’ amongst the targeted community.' />
            </div>
             
        </div>
        <Customers />
        </div>
        
        
    )
}

export default Feature;