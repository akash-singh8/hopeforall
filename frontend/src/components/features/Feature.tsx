import React from 'react';
import style from '../../styles/Feature.module.css';

function Feature(props) {
  
  return (
    <div className={style.featureBlock}>
        <div className={style.featureHeading}>
           <h1 >{props.heading}</h1>
        </div>
        <div className={style.featureDescription}>
           <p>{props.description}</p>
        </div>
        <div className={style.featurePic}>
            <img src={props.pic}/>
        </div>
    </div>
  )
}

export default Feature;