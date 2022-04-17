import React from "react";
import { Button, Spinner } from "react-bootstrap";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import google from '../../../images/google.png'

const SocialLogin = () => {

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const navigate = useNavigate();

  let errorElement;

  if (error) {
    errorElement = (
      <h5 className="text-danger m-4">Error: {error?.message}</h5>
    );
  }

  if(loading){
    return <Spinner animation="grow" variant="dark" />;
}

  if (user) {
    navigate('/home');
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-info w-50"></div>
        <p className="mt-2 p-3"> OR </p>
        <div style={{ height: "1px" }} className="bg-info w-50"></div>
      </div>
      <div>
        <Button onClick={()=>signInWithGoogle()} className="w-100 bg-info text-white">
          <img src={google} alt="" />
          <span className="ms-2">Google</span> </Button>

      </div>
      {errorElement}
    </div>
  );
};

export default SocialLogin;
