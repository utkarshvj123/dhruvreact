// src/components/MedicineDetails.jsx
import React from 'react';
import './MedicineDetails.css';

const MedicineDetails = ({ details }) => {
  return (
    <div className="medicine-details">
      <h2>Medicine Details</h2>
      <table>
        <thead>
          <tr>
            <th>Medicine Name</th>
            <th>Quantity</th>
            <th>Morning</th>
            <th>Morning Remark</th>
            <th>Afternoon</th>
            <th>Afternoon Remark</th>
            <th>Night</th>
            <th>Night Remark</th>
          </tr>
        </thead>
        <tbody>
          {details.map((item, index) => (
            <tr key={index}>
              <td>{item.medicineName}</td>
              <td>{item.quantity}</td>
              <td>{item.morningYN === "true" ? "Yes" : "No"}</td>
              <td>{item.morningRemark}</td>
              <td>{item.afternYN === "true" ? "Yes" : "No"}</td>
              <td>{item.afternRemark}</td>
              <td>{item.nightYN === "true" ? "Yes" : "No"}</td>
              <td>{item.nightRemark}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedicineDetails;
