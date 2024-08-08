import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './style.css';
import { Button, Card, Nav } from "react-bootstrap";
import { userData } from "../globalFunctionAndValues";

const SignUp = () => {
    const [userType, setUserType] = useState(userData[0].type); // Default user type
    const navigate = useNavigate();

    const tabClickHandler = (eventKey) => {
        setUserType(eventKey);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted for:', userType);
        navigate(`/${userType}-login`); // Navigate to the login page based on the user type
    };

    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <Card>
                    <Card.Header>
                        <Nav fill variant="tabs" defaultActiveKey={userType} onSelect={tabClickHandler}>
                            {userData.map(value =>
                                <Nav.Item key={value.id}>
                                    <Nav.Link eventKey={value.type}>{value.name}</Nav.Link>
                                </Nav.Item>
                            )}
                        </Nav>
                    </Card.Header>
                    <Card.Body>
                        <form onSubmit={handleSubmit}>
                            <h3 className="form-title">Sign Up</h3>
                            <div className="form-row">
                                <div className="form-column left-column">
                                    <div className="mb-3 form-group">
                                        <label>Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Name"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label>Mobile No.</label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            placeholder="Enter mobile number"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label>Email address</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Enter email"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label>Gender</label>
                                        <select className="form-control">
                                            <option value="">Select Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div className="mb-3">
                                        <label>Age</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Age"
                                        />
                                    </div>

                                    <div className="mb-3 form-group">
                                        <label>Address</label>
                                        <textarea className="form-control" placeholder="Address" rows="3"></textarea>
                                    </div>
                                </div>

                                <div className="form-column right-column">
                                    {userType === "doctor" && (
                                        <div className="mb-3">
                                            <label>Hospital Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Hospital Name"
                                            />
                                        </div>
                                    )}

                                    {userType === "pathologist" && (
                                        <div className="mb-3">
                                            <label>Lab Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Lab Name"
                                            />
                                        </div>
                                    )}

                                    {userType === "pharmacist" && (
                                        <div className="mb-3">
                                            <label>Pharmaceutical Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Pharmaceutical Name"
                                            />
                                        </div>
                                    )}

                                    {userType !== "patient" && (
                                        <div className="mb-3">
                                            <label>Qualification</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Qualification"
                                            />
                                        </div>
                                    )}

                                    <div className="mb-3">
                                        <label>Username</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Username"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label>Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Enter password"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label>Confirm Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Confirm password"
                                        />
                                    </div>

                                    <div className="d-grid">
                                        <Button type="submit" className="btn btn-primary">Submit</Button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default SignUp;
