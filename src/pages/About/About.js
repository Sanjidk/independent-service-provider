import React from 'react';
import profile from '../../images/sanjid.png';
import './About.css';


const About = () => {
  return (
    <div className='about-div'>
      <div className='about-items'>
        <img src={profile} alt="" />
        <h2 className='fw-bold'>Mahmud Sanjid</h2>
        <h5> Web Developer</h5>
      </div>
      <div className='text-start p-5'>
        <h2> Next Goal</h2>
        <p>1. Finish Programming Hero Course Properly</p>
        <p>2. Learn for MERN Development</p>
        <p>3. Finding a Good Job</p>
        <p>4. Make an IT farm in Future</p>
      </div>
    </div>
  );
};

export default About;