import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import LoginContainer from "./LoginContainer";
function useQuery() {
    return new URLSearchParams(useLocation().search);
}
const userData = [{ type: "doctor", name: "Doctor", id: 1 }, { type: "patient", name: "Patient", id: 2 }, { type: "pathology", name: "Pathology", id: 3 }, { type: "pharmacy", name: "Pharmacist", id: 4 }]
const Login = () => {
    const [loginType, setLoginType] = useState(userData[2].type)
    const loginTypeHandler = (type) => {
        setLoginType(type)
    }
    console.log(loginType, "....logintyoe")
    return <div>
        <LoginContainer data={userData} loginType={loginType} tabClickHandler={loginTypeHandler} />
    </div>
}
export default Login;