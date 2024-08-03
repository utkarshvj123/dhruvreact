import React from "react";
import { useLocation } from 'react-router-dom';
import LoginContainer from "./LoginContainer";
function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Login = () => {
    // const query = useQuery();
    // const type = query.get('type');
    // console.log(type, "......type")
    return <div>
        <LoginContainer />
    </div>
}
export default Login;