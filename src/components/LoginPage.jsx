import React from 'react';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './SignupPage.css';
import DoctorLogin from './DoctorLogin';
import PatientLogin from './PatientLogin';
import PharmacistLogin from './PharmacistLogin';

const LoginPage = () => {
  return (

    <div className="signup-page-container">
      <h1>Select Your Role</h1>
      <div className="button-container">
        <Link to="/login/doctor" className="role-button">Doctor</Link>
        <Link to="/login/patient" className="role-button">Patient</Link>
        <Link to="/login/shopkeeper" className="role-button">Pharmacist</Link>
      </div>
      <nav>
        <Routes>
          <Route path="/login" element={<DoctorLogin />} />
          <Route path="/login" element={<PatientLogin />} />
          <Route path="/login" element={<PharmacistLogin />} />
        </Routes>
      </nav>
    </div>

  );
};

export default LoginPage;
