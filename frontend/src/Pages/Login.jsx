// Main container for the login Page
import React from "react";
import Form from "../Components/Form";
import LoginImage from "../Components/LoginImage";
import Footer from "../Components/Footer";

const Login = () => {
  return (
    <div className="login-container">
      <div className="logo-container">
        <img src="/carLogo.png" alt="Auto-Hub" className="logo" />
        <span className="logo-text"> Auto Hub</span>
      </div>
      <div className="login-left">
        <Form route="api/auth/login/" method="login" />
        <Footer />
      </div>
      <LoginImage />
    </div>
  );
};
export default Login;
