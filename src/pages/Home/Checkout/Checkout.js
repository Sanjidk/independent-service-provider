import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import useServices from "../../Hooks/useServices";

const Checkout = () => {
  const [services] = useServices();
  const singleService = services[0];

  return (
    <div className="w-50 mx-auto shadow-lg m-3 p-3 text-start">
      <h2 className="text-center fw-bold">Checkout Form</h2>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Photography Type</Form.Label>
            <Form.Control type="name" value={singleService.name} readOnly />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" value={singleService.price} readOnly />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Present Address</Form.Label>
          <Form.Control placeholder="Present Address" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Permanent Address</Form.Label>
          <Form.Control placeholder="Permanent Address" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>...</option>
              <option>Dhaka</option>
              <option>Rajshahi</option>
              <option>Sylhet</option>
            </Form.Select>{" "}
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button className="fw-bold" variant="primary" type="submit">
          Confirm Payment
        </Button>
      </Form>
    </div>
  );
};

export default Checkout;
