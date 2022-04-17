import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
  return (
    <div id="home">
    <h1 className="fw-bold text-primary m-0 bg-dark">WILDLIFE PHOTOGRAPHER</h1>
      <Banner></Banner>
      <Services></Services>
    </div>
  );
};

export default Home;