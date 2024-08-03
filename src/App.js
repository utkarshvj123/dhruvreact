import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './module/Home';
import AboutUs from './module/AboutUs';
import Login from './module/Login';
import Dashboard from './module/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" exact={true} element={<Home />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
