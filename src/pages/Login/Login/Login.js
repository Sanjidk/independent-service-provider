import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const Login = () => {

  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();

  const [
    signInWithEmailAndPassword,
    user
  ] = useSignInWithEmailAndPassword(auth);

  if(user){
    navigate (from, {replace:true});
  }

  const emailRef = useRef('');
  const passwordRef = useRef('');

  const handleSubmit = event =>{
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  }

  return (
    <div className="container w-50 text-start shadow-lg mt-5 p-5 rounded-5">
      <h1 className="fw-bold text-center text-primary">Login Form</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <h5 className="mt-3">New to This Website..? <Link to="/signup" className="text-danger pe-auto text-decoration-none" >Sign-Up Here</Link> </h5>
    </div>
  );
};

export default Login;
