import React from 'react'
import '../../styles/ApproachStyle.css';
function ApproachBlock(props) {
  return (
    <div className='approach-block'>
         <div className='approach-pic'>
            <img src={props.pic}/>
        </div>
        <div className='approach-sub-heading'>
           <h1 >{props.heading}</h1>
        </div>
        <div className='approach-description'>
           <p>{props.description}</p>
        </div>
       
    </div>
  )
}

export default ApproachBlock;