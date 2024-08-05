import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './registration.css';
import { Button, Card, Nav } from "react-bootstrap";
import { userData } from "../globalFunctionAndValues";
const SignUp = () => {
    console.log(userData, "....userdata")
    const [userType, setUserType] = useState(userData[0].type); // Default user type
    const navigate = useNavigate();

    const tabClickHandler = (event) => {
        console.log(event, ".....event..")
        setUserType(event);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted for:', userType);
        navigate(`/${userType}-login`); // Navigate to the login page based on the user type
    };

    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <Card>
                    <Card.Header>
                        <Nav fill variant="tabs" defaultActiveKey={userType} onSelect={tabClickHandler}>{userData.map(value =>
                            <Nav.Item key={value.id}>
                                <Nav.Link eventKey={value.type} >{value.name}</Nav.Link>
                            </Nav.Item>
                        )}
                        </Nav>
                    </Card.Header>
                    <Card.Body>
                        <form>
                            <h3>Sign Up</h3>

                            <div className="mb-3 form-group">
                                <label>Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
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
                                <label>Mobile No.</label>
                                <input
                                    type="mobile"
                                    className="form-control"
                                    placeholder="Enter email"
                                />
                            </div>
                            {userType !== "patient" ? <div className="mb-3">
                                <label>Qualification</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Qualification"
                                />
                            </div> : <div className="mb-3">
                                <label>Weight</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Weight"
                                />
                            </div>}
                            <div className="mb-3">
                                <label>Age</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Age"
                                />
                            </div>

                            <div className="mb-3 form">
                                <label for="exampleFormControlTextarea1">Address</label>
                                <textarea className="form-control" placeholder="Address" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>

                            {userType !== "patient" ? <div className="mb-3 form">
                                <label>License No.</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="License Number"
                                />
                            </div> : <div className="mb-3">
                                <label>Aadhar  No.</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Aadhar Number"
                                />
                            </div>
                            }
                            <div className="mb-3">
                                <label>Confirm Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Confirm password"
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
                            <div className="d-grid">
                                <Button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</Button>
                            </div>
                            <p className="forgot-password text-right">
                                Forgot <a href="#">password?</a>
                            </p>
                        </form></Card.Body>
                </Card>
            </div>
        </div>);
};

export default SignUp;
