// Dashboard.jsx
import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  return (
    <div>
        <div style={{}}>
            <img style={{ borderRadius: "50%", height: "100px", width: "100px" }} src={"https://img.freepik.com/premium-photo/portrait-beautiful-young-woman-with-vintage-camera-portrait-beautiful-young-woman-with-vi_912214-98925.jpg?size=626&ext=jpg&ga=GA1.1.1788614524.1717718400&semt=ais_user"} />
        </div>
        <div className="d-flex justify-content-center align-items-center flex-column" style={{ gap: 20 }}>
            <Button onClick={() => navigate("/view-doctor")} variant="primary">View Health Card Detail</Button>{' '}
            <Button onClick={() => navigate("/edit-health-card")} variant="primary">Edit Health Card Detail</Button>{' '}
        </div>
        {/* <CustomisedTable /></div> */}
    </div>
  );
};

export default DashBoard;
