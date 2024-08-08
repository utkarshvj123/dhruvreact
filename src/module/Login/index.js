import React, { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { userData } from "../globalFunctionAndValues";
import LoginMain from "./Main";
const Login = () => {
    const [loginType, setLoginType] = useState(userData[2].type)
    const navigate = useNavigate();
    const loginTypeHandler = (type) => {
        setLoginType(type)
    }
    const submitHandler = () => {
        localStorage.setItem("isLoggedIn", true)
        navigate("/dashboard")
    }
    console.log(loginType, "....logintyoe")
    return <div style={{ height: "calc(100% - 58px)" }}>
        {/* <LoginContainer data={userData} loginType={loginType} tabClickHandler={loginTypeHandler} submitHandler={submitHandler} /> */}
        <LoginMain />
    </div>
}
export default Login;