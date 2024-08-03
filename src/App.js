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
import React, { useEffect, useState } from "react";


function App() {
  const isLoggedInUser = localStorage.getItem("isLoggedIn");
  const [isVerifiedUser, setIsVerifiedUser] = useState(isLoggedInUser === "true" ? true : false)
  console.log(isVerifiedUser, "...seeeeee//....", isLoggedInUser)
  useEffect(() => {
    setIsVerifiedUser(isLoggedInUser === "true" ? true : false)
  }, [isLoggedInUser])
  return (
    <div className="App">
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto" style={{ width: "90%" }}>
            <Navbar.Brand href="/">Ehealth</Navbar.Brand>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about-us">About us</Nav.Link>
            {isVerifiedUser && <Nav.Link href="/dashboard">Dashboard</Nav.Link>}
          </Nav>
          <Nav className="me-auto">
            <NavDropdown style={{ padding: 0 }} title={<span><FaRegCircleUser style={{ fontSize: '1.5em' }} /> </span>} id="basic-nav-dropdown">
              {!isVerifiedUser ?
                <>
                  <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                  <NavDropdown.Item href="/signup">Sign up</NavDropdown.Item>
                </>
                :
                <NavDropdown.Item onClick={() => localStorage.clear()}>Log out</NavDropdown.Item>
              }
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>

      <Router>
        <Routes>
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" exact={true} element={<Home />} />

        </Routes>
      </Router>
    </div >
  );
}

export default App;
