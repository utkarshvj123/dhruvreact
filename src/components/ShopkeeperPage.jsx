
import React, { useState } from 'react';
import { ShopKeeperSignup } from "../services/user-services"
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const ShopkeeperPage = () => {
    const navigate = useNavigate();
    const [patient, setPatient] = useState({
        PatientName: '',
        qualification: '',
        specification: '',
        hospitalName: '',
        hospitalAddress: '',
        hospitalContactNumber: '',
        validDoctor: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPatient({
            ...patient,
            [name]: value,
        });
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setPatient({
            ...patient,
            [name]: checked,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        ShopKeeperSignup(patient).then((resp) => {
            console.log(resp);
            console.log("success log");
            navigate('/login');
        }).catch((error) => {
            console.log(error)
            console.log("Error log")
        })


    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Doctor Name:
                    <input
                        type="text"
                        name="doctorName"
                        value={patient.PatientName}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Qualification:
                    <input
                        type="text"
                        name="qualification"
                        value={patient.qualification}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Specification:
                    <input
                        type="text"
                        name="specification"
                        value={patient.specification}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Hospital Name:
                    <input
                        type="text"
                        name="hospitalName"
                        value={patient.hospitalName}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Hospital Address:
                    <input
                        type="text"
                        name="hospitalAddress"
                        value={patient.hospitalAddress}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Hospital Contact Number:
                    <input
                        type="text"
                        name="hospitalContactNumber"
                        value={patient.hospitalContactNumber}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Valid Doctor:
                    <input
                        type="checkbox"
                        name="validDoctor"
                        checked={patient.validDoctor}
                        onChange={handleCheckboxChange}
                    />
                </label>
            </div>
            <Button type="submit">Submit</Button>
        </form>
    );
};

export default ShopkeeperPage;

