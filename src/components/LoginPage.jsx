import React from 'react';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './SignupPage.css';   
import DoctorLogin from './DoctorLogin';

const LoginPage = () => {
  return (
  
    <div className="signup-page-container">
      <h1>Select Your Role</h1>
      <div className="button-container">
        <Link to="/login/doctor" className="role-button">Doctor</Link>
        <Link to="/login/patient" className="role-button">Patient</Link>
        <Link to="/login/shopkeeper" className="role-button">Shopkeeper</Link>
      </div>
      <nav>
        <Routes>
          <Route path="/login" element={<DoctorLogin/>} />
        </Routes>
      </nav>
    </div>
    
  );
};

export default LoginPage;
