import { Toast } from "bootstrap";
import React, { useRef } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const location = useLocation();
  const navigate = useNavigate();

  let errorElement;
  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading3, error1] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);

  if (error1) {
    errorElement = (
      <h5 className="text-danger m-4">Error: {error1?.message}{resetError?.message} </h5>
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  const navigateSignup = () => {
    navigate("/signup");
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;

    if (email) {
      await sendPasswordResetEmail(email);

      Toast.success("Sent email");
    } else {
      Toast.error1("Email Address Not Found");
    }
  };

  if (loading3 || sending) {
    return <Spinner animation="grow" variant="dark" />;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div className="container w-50 text-start shadow-lg mt-5 p-5 rounded-5">
      <h1 className="fw-bold text-center text-primary">Login Form</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      {errorElement}

      <h6 className="mt-3">
        New to This Website..?{" "}
        <Link
          to="/signup"
          onClick={navigateSignup}
          className="text-primary pe-auto text-decoration-none"
        >
          Sign-Up Here
        </Link>{" "}
      </h6>
      <h6 className="mt-3">
        Forget Password..?{" "}
        <Link
          to="/login"
          onClick={resetPassword}
          className="text-primary pe-auto text-decoration-none"
        >
          Reset Password
        </Link>{" "}
      </h6>

      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
