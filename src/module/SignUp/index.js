import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './registration.css'; 
const SignUp = () => {
    const [userType, setUserType] = useState('patient'); // Default user type
    const navigate = useNavigate();

    const handleUserTypeChange = (event) => {
        setUserType(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted for:', userType);
        navigate(`/${userType}-login`); // Navigate to the login page based on the user type
    };

    return (
        <div className="signup-wrapper">
            <div className="signup-inner">
                <h3>Sign Up</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="userType">Select User Type:</label>
                        <select id="userType" value={userType} onChange={handleUserTypeChange} className="form-control">
                            <option value="patient">Patient</option>
                            <option value="doctor">Doctor</option>
                            <option value="pharmacist">Pharmacist</option>
                            <option value="pathologist">Pathologist</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" className="form-control" placeholder="First name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" className="form-control" placeholder="Last name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" className="form-control" placeholder="Enter email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className="form-control" placeholder="Enter password" required />
                    </div>
                    {userType === 'patient' && (
                        <>
                        
                            <div className="form-group">
                                <label htmlFor="Aadhar No">Aadhar No</label>
                                <input type="text" id="Aadhar No" className="form-control" placeholder="Aadhar No" required />
                            </div>
                        </>
                    )}
                    {userType !== 'patient' && (
                        <>
                            <div className="form-group">
                                <label htmlFor="hospitalName">Hospital/Organization Name</label>
                                <input type="text" id="hospitalName" className="form-control" placeholder="Hospital/Organization Name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="qualification">Qualification</label>
                                <input type="text" id="qualification" className="form-control" placeholder="Qualification" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="age">Age</label>
                                <input type="number" id="age" className="form-control" placeholder="Age" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="licenseNo">License No</label>
                                <input type="text" id="licenseNo" className="form-control" placeholder="License No" required />
                            </div>
                        </>
                    )}
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <textarea id="address" className="form-control" placeholder="Address" rows="4" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
