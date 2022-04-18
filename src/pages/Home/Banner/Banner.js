import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import animals from "../../../images/animals.png";
import birds from "../../../images/birds.png";
import insects from "../../../images/insects.png";

const Banner = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img className="d-block w-100" src={animals} alt="First slide" />
            <Carousel.Caption>
              <h3>Animals</h3>
              <p>
                Animals are group of organisms, classified as kingdom Animalia.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={birds} alt="Second slide" />

            <Carousel.Caption>
              <h3>Birds</h3>
              <p>
                Birds are warm-blooded vertebrates constituting characterised by
                feathers.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={insects} alt="Third slide" />

            <Carousel.Caption>
              <h3>Insects</h3>
              <p>
                Insects are pancrustacean hexapod invertebrates of the class
                Insecta.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
