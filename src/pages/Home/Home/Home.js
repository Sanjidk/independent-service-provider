import React from 'react';
import Banner from '../Banner/Banner';
import BonusService from '../BonusService/BonusService';
import Services from '../Services/Services';

const Home = () => {
  return (
    <div>
    <h1 className="fw-bold text-white m-0 bg-dark">WILDLIFE PHOTOGRAPHER</h1>
      <Banner></Banner>
      <Services></Services>
      <BonusService></BonusService>
    </div>
  );
};

export default Home;