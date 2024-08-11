import React from 'react';
import { Link } from 'react-router-dom';
import './SignupPage.css';
import { Button } from 'react-bootstrap';

const SignupPage = () => {
  return (
    <div className="signup-page-container">
      <h1>Select Your Role</h1>
      <div className="button-container">
        <Link className="btn btn-primary" to="/signup/doctor" className="role-button" >Doctor</Link>
        <Link to="/signup/patient" className="role-button">Patient</Link>
        <Link to="/signup/shopkeeper" className="role-button">Shopkeeper</Link>
      </div>
    </div>
  );
};

export default SignupPage;
