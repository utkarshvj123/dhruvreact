// Dashboard.jsx
import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
// import './Dashboard.css';

const DashBoard = () => {
  const handleProfileClick = () => {
    // Call API to fetch doctor profile or navigate to profile page
    axios.get('/api/doctor/profile')
      .then(response => {
        console.log('Doctor Profile:', response.data);
        // Handle the response data or redirect to profile page
      })
      .catch(error => {
        console.error('Error fetching doctor profile:', error);
      });
  };

  const handlePatientInfoClick = () => {
    // Call API to fetch patient health information or navigate to patient info page
    axios.get('/api/patient/health-info')
      .then(response => {
        console.log('Patient Health Information:', response.data);
        // Handle the response data or redirect to patient info page
      })
      .catch(error => {
        console.error('Error fetching patient health information:', error);
      });
  };

  return (
    <div className="dashboard">
      <h1>Health Card Dashboard</h1>
      <div className="button-container">
        <Button onClick={handleProfileClick}>Doctor Profile</Button>
        <Button onClick={handlePatientInfoClick}>Patient Health Information</Button>
      </div>
    </div>
  );
};

export default DashBoard;
