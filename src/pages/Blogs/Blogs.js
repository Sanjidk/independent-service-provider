import React from "react";
import './Blogs.css';

const Blogs = () => {
  return (
    <div className="question-answer">
      <div className="shadow-lg p-3">
        <h4>1. Difference between authorization and authentication..</h4>
        <p>Authentication confirms your identity to grant access to the system.Authorization determines whether you are authorized to access the resources.It is the process of validating user credentials to gain user access.It is the process of verifying whether access is allowed or not.It determines whether user is what he claims to be.It determines what user can and cannot access.Authentication usually requires a username and a password.Authentication factors required for authorization may vary,depending on the security level.Authentication is the first step of authorization so always comes first.Authorization is done after successful authentication.</p>
      </div>
      <div className="shadow-lg p-3">
        <h4>2. Why are you using firebase..? What other options do you have to implement authentication..?</h4>
        <p>Google Firebase is a Google-backed application development software that enables developers to develop iOS, Android and Web apps. Firebase provides tools for tracking analytics, reporting and fixing app crashes, creating marketing and product experiment.There are many more platforms to implement authentication like Auth0, PingIdentity, Okta, Keycloak, Frontegg, OneLogin, Ory etc.</p>
      </div>
      <div className="shadow-lg p-3">
        <h4>3. What other services does firebase provide other than authentication..??</h4>
        <p>There are many services which Firebase provides, Most useful of them are: hosting, cloud functions, cloud messsging, predictions, google analytics, cloud storage, remote config etc. Firebase is a full package that can help in developing your mobile or web applications faster with fewer resources and more efficiency. Now, let’s look at some of the services and use of it</p>
      </div>
    </div>
  );
};

export default Blogs;
