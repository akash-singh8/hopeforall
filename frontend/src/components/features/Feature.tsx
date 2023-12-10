import React from 'react';
import '../../styles/FeatureStyle.css';

function Feature(props) {
  
  return (
    <div className='feature-block'>
        <div className='feature-heading'>
           <h1 >{props.heading}</h1>
        </div>
        <div className='feature-description'>
           <p>{props.description}</p>
        </div>
        <div className='feature-pic'>
            <img src={props.pic}/>
        </div>
    </div>
  )
}

export default Feature;