import React from 'react';
import { CardGroup } from 'react-bootstrap';
import useServices from '../../Hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
  const [services]=useServices();
  return (
    <div id='services'>
      <CardGroup>
      {
        services.map(service => <Service
        key={service.id}
        service={service}
        ></Service>)
      }
      </CardGroup>
    </div>
  );
};

export default Services;