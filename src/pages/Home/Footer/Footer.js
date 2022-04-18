import React from 'react';
import './Footer.css'

const Footer = () => {

  const today = new Date();
  const year = today.getFullYear();

  return (
    <div className='bg-dark text-white footer-div'>
      <p className='m-0'>Copyright &#169; {year} Wildlife Photography Services by Mahmud Sanjid</p>
    </div>
  );
};

export default Footer;