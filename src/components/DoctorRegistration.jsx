import React, { useState } from 'react';
import { Doctorsignup } from "../services/user-services";
import { useNavigate } from 'react-router-dom';
import './SignupPage.css'; // Optional, for additional custom styling
import { Button, Form, Container } from 'react-bootstrap';

const DoctorRegistration = () => {
    const navigate = useNavigate();
    const [doctor, setDoctor] = useState({
        doctorName: '',
        userName: '',
        qualification: '',
        specification: '',
        hospitalName: '',
        hospitalAddress: '',
        hospitalContactNumber: '',
        password: '',
        doctorRegKey: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDoctor({
            ...doctor,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        Doctorsignup(doctor).then((resp) => {
            console.log(resp);
            console.log("Registration successful");
            navigate('/login');
        }).catch((error) => {
            console.log(error);
            alert("Bad Credential");
        });
    };

    return (
        <Container className="mt-5">
            <h2 className="mb-4">Doctor Registration</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="doctorName">
                    <Form.Label>Doctor Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="doctorName"
                        value={doctor.doctorName}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="userName">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="userName"
                        value={doctor.userName}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="qualification">
                    <Form.Label>Qualification</Form.Label>
                    <Form.Control
                        type="text"
                        name="qualification"
                        value={doctor.qualification}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="specification">
                    <Form.Label>Specification</Form.Label>
                    <Form.Control
                        type="text"
                        name="specification"
                        value={doctor.specification}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="hospitalName">
                    <Form.Label>Hospital Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="hospitalName"
                        value={doctor.hospitalName}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="hospitalAddress">
                    <Form.Label>Hospital Address</Form.Label>
                    <Form.Control
                        type="text"
                        name="hospitalAddress"
                        value={doctor.hospitalAddress}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="hospitalContactNumber">
                    <Form.Label>Hospital Contact Number</Form.Label>
                    <Form.Control
                        type="text"
                        name="hospitalContactNumber"
                        value={doctor.hospitalContactNumber}
                        onChange={handleChange}
                        pattern="\d{10}"
                        title="Please enter a 10-digit phone number"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={doctor.password}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="doctorRegKey">
                    <Form.Label>Registration Key</Form.Label>
                    <Form.Control
                        type="text"
                        name="doctorRegKey"
                        value={doctor.doctorRegKey}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default DoctorRegistration;
