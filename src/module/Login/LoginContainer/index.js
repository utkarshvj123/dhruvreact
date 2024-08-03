import React from "react";
import { Button, Card, Nav } from "react-bootstrap";
const LoginContainer = ({ loginType = "doctor", data = [], tabClickHandler = () => { }, submitHandler = () => { } }) => {
    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <Card>
                    <Card.Header>
                        <Nav fill variant="tabs" defaultActiveKey={loginType} onSelect={tabClickHandler}>{data.map(value =>
                            <Nav.Item key={value.id}>
                                <Nav.Link eventKey={value.type} >{value.name}</Nav.Link>
                            </Nav.Item>
                        )}
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
                                <Button type="submit" className="btn btn-primary" onClick={submitHandler}>Submit</Button>
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