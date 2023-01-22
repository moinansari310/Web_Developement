import React from 'react';
import './Customers.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hp from './image/Autodesk_Logo.png';
import hp1 from './image/techdata_logo.png';
import hp2 from './image/SAP_logo.png';
import hp3 from './image/urbanpro_logo.png';
import hp4 from './image/PTC_Logo.png';
import hp5 from './image/Dassault_logo.png';
import hp6 from './image/google_logo.png';
import hp7 from './image/ms_azure.png';
import hp8 from './image/oracle_logo.png';
import hp9 from './image/IBM-Logo.png';
import hp10 from './image/Dell_logo.jpg';

 
 function Customers() {  
     
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              autoplay: true,
              autoplaySpeed: 2000,
              speed: 2000,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              speed: 500,
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 1
            }
          },
        ]
      };
    return (
        <>
        <div>
            <h1 className='customers-head'> Our Clients</h1>
            </div>
            <div  className='brand-img'>
            <Slider {...settings}>

                <div> 
                    <img 
                    src={hp} 
                    className='c-slick'
                    alt='brand-logo' />
                </div>

                <div> 
                    <img 
                    src={hp1} 
                    className='c-slick'
                    alt='brand-logo' />
                </div> 
                <div> 
                    <img 
                    src={hp2} 
                    className='c-slick'
                    alt='brand-logo' />
                </div>

                <div> 
                    <img 
                    src={hp3} 
                    className='c-slick'
                    alt='brand-logo' />
                </div>

                <div> 
                    <img 
                    src={hp4} 
                    className='c-slick'
                    alt='brand-logo' />
                </div>

                <div> 
                    <img 
                    src={hp5} 
                    className='c-slick'
                    alt='brand-logo' />
                </div> 

                <div> 
                    <img 
                    src={hp6} 
                    className='c-slick'
                    alt='brand-logo' />
                </div>

                <div> 
                    <img 
                    src={hp7} 
                    className='c-slick'
                    alt='brand-logo' />
                </div>

                <div> 
                    <img 
                    src={hp8} 
                    className='c-slick'
                    alt='brand-logo' />
                </div>

                <div> 
                    <img 
                    src={hp9} 
                    className='c-slick'
                    alt='brand-logo' />
                </div>

                <div> 
                    <img 
                    src={hp10} 
                    className='c-slick'
                    alt='brand-logo' />
                </div>
            </Slider>
            </div>   
            </>       
    );
}

export default Customers;

              
              
              
              
              
              
  