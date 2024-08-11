import React, { useState } from 'react';
import { Doctorsignup } from "../services/user-services"
import { useNavigate } from 'react-router-dom';
import './SignupPage.css';
import { Button } from 'react-bootstrap';

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


    // const handleCheckboxChange = (e) => {
    //     const { name, checked } = e.target;
    //     setDoctor({
    //         ...doctor,
    //         [name]: checked,
    //     });
    // };

    const handleSubmit = (e) => {
        e.preventDefault();

        Doctorsignup(doctor).then((resp) => {
            console.log(resp);
            console.log("success log");
            navigate('/login');
        }).catch((error) => {
            console.log(error)
            alert("Bad Credential")
        })


    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='FormBody'>
                <label>
                    Doctor Name:
                </label>
                <input
                    type="text"
                    name="doctorName"
                    value={doctor.doctorName}
                    onChange={handleChange}
                    required
                />

            </div>
            <div>
                <label>
                    UserName:
                </label>
                <input
                    type="text"
                    name="userName"
                    value={doctor.userName}
                    onChange={handleChange}
                />

            </div>
            <div>
                <label>
                    Qualification:

                </label>
                <input
                    type="text"
                    name="qualification"
                    value={doctor.qualification}
                    onChange={handleChange}
                    required
                />

            </div>
            <div>
                <label>
                    Specification:
                </label>
                <input
                    type="text"
                    name="specification"
                    value={doctor.specification}
                    onChange={handleChange}
                    required
                />

            </div>
            <div>
                <label>
                    Hospital Name:
                </label>
                <input
                    type="text"
                    name="hospitalName"
                    value={doctor.hospitalName}
                    onChange={handleChange}
                    required
                />

            </div>
            <div>
                <label>
                    Hospital Address:
                </label>
                <input
                    type="text"
                    name="hospitalAddress"
                    value={doctor.hospitalAddress}
                    onChange={handleChange}
                    required
                />

            </div>
            <div>
                <label>
                    Hospital Contact Number:
                </label>
                <input
                    type="text"
                    name="hospitalContactNumber"
                    value={doctor.hospitalContactNumber}
                    onChange={handleChange}
                    pattern="\d{10}" title="Please enter a 10-digit phone number" required />

            </div>
            <div>
                <label htmlFor="">Password:</label>
                <input type="password" name="password"
                    value={doctor.password}
                    onChange={handleChange} required />
            </div>
            <div>
                <label>
                    Registration Key:
                </label>
                <input
                    type="text"
                    name="doctorRegKey"
                    value={doctor.doctorRegKey}
                    onChange={handleChange}
                    required
                />

            </div>
            <Button type="submit">Submit</Button>
        </form>
    );
};

export default DoctorRegistration;
