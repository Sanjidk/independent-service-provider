import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Service.css'

const Service = (props) => {
  const { name, image, price, description } = props.service;
  return (
        <Card className="m-2 p-3">
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title> Name: {name}</Card.Title>
            <Card.Title>Price: $ {price}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>

          <Link to="/checkout">
            <Button>Checkout</Button>
          </Link>
        </Card>
  );
};

export default Service;
