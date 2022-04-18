import React from 'react';
import { CardGroup } from 'react-bootstrap';
import useServices from '../../Hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
  const [services]=useServices();
  return (
    <div id='services'>
      <h1 className='fw-bold mt-5'>Services</h1>
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