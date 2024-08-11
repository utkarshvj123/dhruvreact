import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function PatientLogin() {
  const [formData, setFormData] = useState({
    userName: '',
    password: ''
  });

  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Use POST method and pass formData in the request body
      const response = await axios.post('http://localhost:8080/doctor/login', formData, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      alert('Login successful');
      navigate('/dashboard'); // Navigate to the dashboard page
    } catch (error) {
      console.error('There was an error logging in!', error);
      alert('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '400px',
        height: 'auto',
        margin: 'auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        gap: '15px'
      }}
    >
      <label
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginBottom: '10px'
        }}
      >
        <span style={{ fontWeight: 'bold' }}>Name</span>
        <input
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          placeholder="Name"
          required
          style={{
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '16px'
          }}
        />
      </label>
      
      <label
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginBottom: '10px'
        }}
      >
        <span style={{ fontWeight: 'bold' }}>Password</span>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
          style={{
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '16px'
          }}
        />
      </label>

      <Button
        type="submit"
        style={{
          backgroundColor: '#007BFF',
          color: '#fff',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '4px',
          fontSize: '16px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease'
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007BFF'}
      >
        Login
      </Button>
    </form>
  );
}

export default PatientLogin;
