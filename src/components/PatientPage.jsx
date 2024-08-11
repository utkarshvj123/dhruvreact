
import React, { useState } from 'react';
import {PatientSignup} from "../services/user-services"
import { useNavigate } from 'react-router-dom';


const PatientPage = () => {
  const navigate = useNavigate();
  const [patient, setPatient] = useState({
    PatientName: '',
    patientMail:'',
    patientContact: ''

});

const handleChange = (e) => {
    const { name, value } = e.target;
    setPatient({
        ...patient,
        [name]: value,
    });
};


const handleSubmit = (e) => {
    e.preventDefault();

    PatientSignup(patient).then((resp) => {
        console.log(resp);
        console.log("success log");
        navigate('/login');
    }).catch((error)=>{
        console.log(error)
        console.log("Error log")
    })
    
    
};

return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>
                Patient Name:
                <input
                    type="text"
                    name="patientName"
                    value={patient.PatientName}
                    onChange={handleChange}
                />
            </label>
        </div>
        <div>
            <label>
            patientMail:
                <input
                    type="text"
                    name="patientMail"
                    value={patient.patientMail}
                    onChange={handleChange}
                />
            </label>
        </div>
        <div>
            <label>
            patientContact:
                <input
                    type="text"
                    name="patientContact"
                    value={patient.patientContact}
                    onChange={handleChange}
                />
            </label>
        </div>
        
        <button type="submit">Submit</button>
    </form>
);
};

export default PatientPage;
