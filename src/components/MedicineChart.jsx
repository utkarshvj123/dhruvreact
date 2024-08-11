import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function MedicineChat() {
  const { patientId } = useParams();
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/patients/${patientId}/medicines`);
        setMedicines(response.data);
      } catch (error) {
        console.error('There was an error fetching the medicines!', error);
      }
    };

    fetchMedicines();
  }, [patientId]);

  return (
    <div>
      <h2>Medicine Chat</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Medicine Name</th>
            <th>Quantity</th>
            <th>Morning</th>
            <th>Afternoon</th>
            <th>Night</th>
            <th>Remark</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map(medicine => (
            <tr key={medicine.id}>
              <td>{medicine.date}</td>
              <td>{medicine.name}</td>
              <td>{medicine.quantity}</td>
              <td>{medicine.morning}</td>
              <td>{medicine.afternoon}</td>
              <td>{medicine.night}</td>
              <td>{medicine.remark}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MedicineChat;
