import React, { useState } from 'react';
import axios from 'axios';
import DashBoard from './DashBoard';

function DoctorLogin() {
  const [formData, setFormData] = useState({
    userName: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:8080/doctor/login', formData,{
        headers: {
            "Content-Type": "application/json"
        }
    });
      alert('Login successful');
      <DashBoard/>
    } catch (error) {
      console.error('There was an error logging in!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
     <label >Name <input type="text" name="userName" value={formData.userName} onChange={handleChange} placeholder="Name" required /></label>
      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
}

export default DoctorLogin;
