import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";



const Navigation = () => {
    return <>
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>

                <Nav className="me-auto" style={{ width: "90%" }}>
                    <Navbar.Brand href="/">Ehealth</Navbar.Brand>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about-us">About us</Nav.Link>
                    <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                </Nav>
                <Nav className="me-auto">
                    <NavDropdown title="Login" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/login?type=patient">Patient Login</NavDropdown.Item>
                        <NavDropdown.Item href="/login?type=doctor">
                            Doctor Login
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/login?type=pharma">Pharmacist Login</NavDropdown.Item>
                        <NavDropdown.Item href="/login?type=pathalogy">
                            Pathalogist Login
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    </>
}
export default Navigation;