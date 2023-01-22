import React from 'react';
import './Home.css';
import Images from '../Images/1.png';
import { Link } from 'react-router-dom';
import Feature from '../Features/Feature';

function Home() {
    
    return(
        //Home Section   
        <div>     
        <section className="Home">
            <div className="container-fluid nav_bg">
                    <div className="col-10 mx-auto">
                    <div className="row">
                        <div className="col-mb-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                       
                          <h1 className="Home-heading">Professional Services</h1>
                            <p className="Home-disc">We help technology companies to Generate Leads, 
                            drive demand Audience and data prospecting.</p>

                        <div className="mt-3">
                        <Link to='/About' className="Home-btn">Get started</Link>
                   </div>
                 </div>
                </div>
             </div>
          </div>
                <div className="col-lg-6 mb-6 order-1 order-lg-2 header-img">
                  <img src={Images} className="img-fluid animated" width="900" height="700" alt="home-img" />   
                </div>
               
        </section> 
         <Feature />
         </div>
    );
}
export default Home;
 

