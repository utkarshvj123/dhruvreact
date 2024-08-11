import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import PatientPage from './components/PatientPage';
import ShopkeeperPage from './components/ShopkeeperPage';
// import Doctorpage from './components/Doctorpage';
import DoctorRegistration from './components/DoctorRegistration';
import MedicineChat from './components/MedicineChart';
import PatientList from './components/PatientList';
import DoctorLogin from './components/DoctorLogin';


const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<SignupPage/>} />
          <Route path="/signup/doctor" element={<DoctorRegistration/>} />
          <Route path="/signup/Patient" element={<PatientPage/>} />
          <Route path="/signup/Shopkeeper" element={<ShopkeeperPage/>} />
          <Route path="/login/Doctor" element={<DoctorLogin/>}/>
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/patients" element={<PatientList />} />
          <Route path="/medicine/:patientId" element={<MedicineChat />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
