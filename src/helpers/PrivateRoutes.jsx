import { Navigate } from "react-router-dom";
import { AuthContextApi } from "../context/AuthContext";
import { useContext } from 'react';

const PrivateRoutes=({children})=>{
    let {isAuth}=useContext(AuthContextApi)
    console.log(isAuth);
    if(isAuth === undefined || null){
        return <Navigate to="/"/>
    }
    else{
        return <>{children}</>
    }
}
export default PrivateRoutes