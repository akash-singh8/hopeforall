import React from 'react';
import '../styles/Hope4All.css';
import Feature from './features/Feature';
  
function Hope4All() {
  return (
    <>
    <div className='hope4all'>
        <div className='heading-container'>
            <h1 className='hopeheading'>Why Hope4All?</h1>
        </div>
        <div className='description-container'>
           <p className='hopedescribe'>We are Hope4All, a committed crowdfunding platform in India aiming to provide transparent and sustainable aid to underprivileged communities. We constantly strive to close the gap between aid givers and those in need by fostering resource allocation and collaboration.</p>
        </div>
    </div>
    <div className='arrow'>
        <img src='https://landingsite-static-web-images.s3.us-east-2.amazonaws.com/template10/green-curve-shape-easy.svg'/>
    </div>
    <div className='features-row'>
        <Feature 
          heading='We provide financial aid'
          description='Helping individuals meet their basic needs.'
          pic="https://landingsite-static-web-images.s3.us-east-2.amazonaws.com/template10/swirl.svg"
        />
        <Feature
          heading='We offer medical assistance'
          description='Facilitating accessible healthcare for everyone.'
          pic="https://landingsite-static-web-images.s3.us-east-2.amazonaws.com/template10/globe.svg"/>
        <Feature
          heading='We ensure basic necessities'
          description="Ensuring everyone has access to life's essentials."
          pic="https://landingsite-static-web-images.s3.us-east-2.amazonaws.com/template10/arrow.svg"/>
    </div>
    </>

  )
}

export default Hope4All