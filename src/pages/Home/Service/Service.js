import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './Service.css'

const Service = (props) => {
  const { id , name, image, price, description } = props.service;

  const navigate = useNavigate();

  const navigateServices = id =>{
    navigate(`/service/${id}`);
  }

  return (
        <Card className="m-2 p-3">
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Title>Price: $ {price}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
            <Button onClick= {()=> navigateServices(id)} >Checkout</Button>
         
        </Card>
  );
};

export default Service;
