import React from "react";
import { Button, Card, Nav } from "react-bootstrap";
const LoginContainer = () => {
    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <Card>
                    <Card.Header>
                        <Nav variant="tabs" defaultActiveKey={1}>
                            <Nav.Item>
                                <Nav.Link eventKey={1} href="/login?type=doctor">Doctor</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey={2} href="/login?type=patient">Patient</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey={3} href="/login?type=pharmacy">Pharmacist</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey={4} href="/login?type=pathalogy">Pathalogist</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Header>
                    <Card.Body>
                        <form>
                            <h3>Sign In</h3>

                            <div className="mb-3">
                                <label>Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter email"
                                />
                            </div>
                            <div className="mb-3">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter password"
                                />
                            </div>
                            <div className="mb-3">
                                <div className="custom-control custom-checkbox">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="customCheck1"
                                    />
                                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                </div>
                            </div>
                            <div className="d-grid">
                                <Button type="submit" className="btn btn-primary">Submit</Button>
                            </div>
                            <p className="forgot-password text-right">
                                Forgot <a href="#">password?</a>
                            </p>
                        </form></Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default LoginContainer;