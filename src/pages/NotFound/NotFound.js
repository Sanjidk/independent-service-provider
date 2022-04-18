import React from 'react';
import error404 from '../../images/404error.gif';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className='error-page'>
      <img src={error404} alt="" />
    </div>
  );
};

export default NotFound;