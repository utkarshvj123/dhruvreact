// src/components/ProfileCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './dashBoard.css';
import HealthCardTable from './HealthCardTable';

const DashBoard = () => {
  const navigate = useNavigate();

  const handleViewHealthCardClick = () => {
    navigate('/health-card'); // Navigates to the HealthCardTable component
  };
  return (
    <div className="profile-card">
      <div className="profile-image">
        <h2>Profile</h2>
      </div>
      <div className="profile-buttons">
      <button className="dashboard-button" onClick={handleViewHealthCardClick}>
            View Health Card Details</button>
        <button className="btn">Edit Health Card Details</button>
      </div>
    </div>
  );
};

export default DashBoard;

