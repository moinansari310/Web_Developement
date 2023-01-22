import React, {useState} from 'react';
import { Link} from 'react-router-dom';
import './Navbar.css';
import logo from '../Images/logo.png';

 

function Navbar() {

    const [click, setClick] = useState(false);
     

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(true);

        return(
         
           <nav className="Navbar">
               
           <div className = "Navbar-container">
            <Link to='/'>  <img src={logo} className='nav-logo' width='200' alt='logo' /> </Link>
           
            <div className="menu_icon" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"} />
                </div>

            <ul className={click ? "Nav-menu active" : "Nav-menu"}> 
            <li className="Nav-item">
               <Link to='/' className='Nav-links' onClick={closeMobileMenu}>
                Home
               </Link>
            </li>

            <li className="Nav-item">
               <Link to='/About' className='Nav-links' onClick={closeMobileMenu}>
               About
               </Link>
            </li>

            <li className="Nav-item">
               <Link to='/Service' className='Nav-links' onClick={closeMobileMenu}>
                  Services
               </Link>
            </li>
               
            <li className="Nav-item">
               <Link to='/Contact' className='Nav-btn' onClick={closeMobileMenu}>
                  Contact Us
               </Link>
            </li>             

            </ul>
           
        </div>
    </nav>
       
    );
}
                    
export default Navbar;