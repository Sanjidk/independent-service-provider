import React, { useRef } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from "../SocialLogin/SocialLogin";

const Signup = () => {
  
  const nameRef = useRef('');
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const [ createUserWithEmailAndPassword, user, loading2, error2 ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true});

  
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  

  const navigateLogin= () =>{
    navigate('/login')
  }


  const handleSubmit = event =>{
  event.preventDefault();
  const name = nameRef.current.value;
  const email = emailRef.current.value;
  const password = passwordRef.current.value;
  createUserWithEmailAndPassword(email, password);  
  }

  if(user){
    navigate(from, { replace: true });
  }

  if(loading2){
    return <Spinner animation="grow" variant="dark" />;
}

  return (
    <div className="container w-50 text-start shadow-lg mt-5 p-3 rounded-5">
      <h1 className="fw-bold text-center text-info">Sign Up Form</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Your Name</Form.Label>
          <Form.Control ref={nameRef} type="text" placeholder="Your Name" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Your Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
      <h6 className="mt-3"> Already have an account..? <Link to="/login" onClick={navigateLogin} className="text-primary pe-auto text-decoration-none" >Login Here</Link> </h6>


    </div>
  );
};

export default Signup;