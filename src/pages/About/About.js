import React from 'react';
import profile from '../../images/sanjid.png';
import './About.css';


const About = () => {
  return (
    <div className='about-div'>
      <div className='about-items'>
        <img src={profile} alt="" />
        <h2 className='fw-bold'>Mahmud Sanjid</h2>
        <h5> Professional Photographer</h5>
      </div>
      <div className='text-start p-5 '>
        <h2> Next Goal</h2>
        <p>1. Learn a New Photography Technique.</p>
        <p>2. Enter a Photo Contest.</p>
        <p>3. Learn How to Use Best Editing Software.</p>
        <p>4. Try Drone Photography.</p>
      </div>
    </div>
  );
};

export default About;