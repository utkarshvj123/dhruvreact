import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function PatientList() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/patients');
        setPatients(response.data);
      } catch (error) {
        console.error('There was an error fetching the patients!', error);
      }
    };

    fetchPatients();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Medicine</th>
          <th>Description</th>
          <th>Remark</th>
          <th>Allergy</th>
        </tr>
      </thead>
      <tbody>
        {patients.map(patient => (
          <tr key={patient.id}>
            <td>{patient.date}</td>
            <td>
              <Link to={`/medicine/${patient.id}`}>Medicine</Link>
            </td>
            <td>{patient.description}</td>
            <td>{patient.remark}</td>
            <td>{patient.allergy}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PatientList;
