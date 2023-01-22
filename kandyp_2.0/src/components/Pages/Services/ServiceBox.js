import React from 'react';
import './Service.css';

function ServiceBox(props) {
    return (
        <div>
            <div className='a-box'>
            <div className='a-b-img'>
                <img src={props.image} alt='' />
            </div>
            <div className='s-b-text'>
                <h2>{props.title}</h2>
                <p>{props.disc}</p>
            </div>
            </div>
        </div>
    )
}

export default ServiceBox;
