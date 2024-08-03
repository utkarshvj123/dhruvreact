import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './module/Home';
import AboutUs from './module/AboutUs';
import Login from './module/Login';
import Dashboard from './module/Dashboard';
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { FaUser } from 'react-icons/fa';
import { FaRegCircleUser } from 'react-icons/fa6';
import SignUp from './module/SignUp';
import React from "react";



function App() {
  const isLoggedInUser = localStorage.getItem("isLoggedIn");

  return (

    <Router>
      <div className="App">
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Nav className="me-auto" style={{ width: "90%" }}>
              <Navbar.Brand >Ehealth</Navbar.Brand>
              <Nav.Link as={Link} to="/" >Home</Nav.Link>
              <Nav.Link as={Link} to="/about-us">About us</Nav.Link>
              {isLoggedInUser === "true" && <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>}
            </Nav>
            <Nav className="me-auto">
              <NavDropdown style={{ padding: 0 }} title={<span><FaRegCircleUser style={{ fontSize: '1.5em' }} /> </span>} id="basic-nav-dropdown">
                {isLoggedInUser !== "true" ?
                  <>
                    <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/signup">Sign up</NavDropdown.Item>
                  </>
                  :
                  <NavDropdown.Item as={Link} to="/" onClick={() => localStorage.clear()}>Log out</NavDropdown.Item>
                }
              </NavDropdown>
            </Nav>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" exact={true} element={<Home />} />

        </Routes>
      </div >
    </Router>

  );
}

export default App;
