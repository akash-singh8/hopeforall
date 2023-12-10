import React from 'react'
import style from '../../styles/ApproachBlock.module.css';
function ApproachBlock(props) {
  return (
    <div className={style.approachBlock}>
         <div className={style.approachPic}>
            <img src={props.pic}/>
        </div>
        <div className={style.approachSubHeading}>
           <h1 >{props.heading}</h1>
        </div>
        <div className={style.approachDescription}>
           <p>{props.description}</p>
        </div>
       
    </div>
  )
}

export default ApproachBlock;