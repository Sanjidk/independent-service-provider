import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import animals from '../../images/animals.png'
import birds from '../../images/birds.png'
import insects from '../../images/insects.png'

const Home = () => {

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  return (
    <div>
            <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={animals}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Animals</h3>
          <p>Animals are a major group of organisms, classified as the kingdom Animalia or Metazoa.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={birds}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Birds</h3>
          <p>Birds are a group of warm-blooded vertebrates constituting the class Aves, characterised by feathers etc.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={insects}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Insects</h3>
          <p>
          Insects are pancrustacean hexapod invertebrates of the class Insecta.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </div>
            <div><h3>Services</h3></div>
    </div>
  );
};

export default Home;