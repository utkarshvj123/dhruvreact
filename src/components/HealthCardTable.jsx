// src/components/HealthCardTable.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MedicineDetails from './MedicineDetails';
import './HealthCardTable.css';

const HealthCardTable = () => {
  const [healthCardData, setHealthCardData] = useState([]);
  const [selectedMedicineDetails, setSelectedMedicineDetails] = useState([]);
  const [healthCardId, setHealthCardId] = useState('');
  const [error, setError] = useState(null);

  const handleSearchClick = () => {
    if (healthCardId.trim() === '') {
      setError('Please enter a Health Card ID');
      return;
    }

    setError(null);

    // Fetch data from the backend API
    fetch(`http://localhost:8080/doctor/getHCDetails?healthCardId=${healthCardId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setHealthCardData(data); // Assuming the API returns a single object
        setSelectedMedicineDetails([]); // Clear previous medicine details if any
      },[])
      .catch(error => {
        setError(error.message);
      });
  };

  const navigate = useNavigate();
  const handleViewClick = (medicineList) => {
    navigate('/medicine-List');
    setSelectedMedicineDetails(medicineList);
  };

  return (
    <div className="health-card-table">
      <h2>Health Card Details</h2>

      {/* Search Input and Button */}
      <div className="search-container">
        <input
          type="text"
          value={healthCardId}
          onChange={(e) => setHealthCardId(e.target.value)}
          placeholder="Enter Health Card ID"
        />
        <button onClick={handleSearchClick}>Search</button>
      </div>

      {error && <p className="error-message">{error}</p>}

      {healthCardData.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Remark</th>
              <th>Allergy</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {healthCardData.map((item) => (
              <tr key={item.healthcardDetailid}>
                <td>{item.createdDate}</td>
                <td>{item.description}</td>
                <td>{item.remark}</td>
                <td>{item.allergy}</td>
                <td>
                  <button className="view-button" onClick={() => handleViewClick(item.medicineList)}>
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {selectedMedicineDetails.length > 0 && <MedicineDetails details={selectedMedicineDetails} />}
    </div>
  );
};

export default HealthCardTable;
