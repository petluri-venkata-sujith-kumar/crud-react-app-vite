import { useReducer,useContext, createContext, useEffect } from "react";
import authReducer from "../reducer/authReducer/AuthReducer";
import AuthInstance from './../axiosInstances/AuthInstance';
import { USER_API_INSTACE } from "../axiosInstances/UserAxiosInstance";
export const AuthContextApi=createContext()
const initialState={
    payload:"",
    profile:null,
    isLoading:true,
}
const AuthProvider=({children})=>{
    let [auth,dispatch]=useReducer(authReducer,initialState)
    const signup=async payload =>{
        let {data}=await AuthInstance.post('/users',payload)
        dispatch({type:"SIGNUP", payload:data})
    }
    const login=async payload =>{
        let {data}=await AuthInstance.post('/auth/login',payload)
        // console.log(data);
        window.localStorage.setItem("TOKEN",JSON.stringify(data))
        dispatch({type:"LOGIN", payload:data})
    }
    let fetchAccessToken=()=>{
        let token=window.localStorage.getItem("TOKEN")
        let parsedToken=JSON.parse(token)
        // console.log(parsedToken);
        dispatch({type:"ACCESS_TOKEN" ,payload:parsedToken})
    }
    let Logout=()=>{
        window.localStorage.removeItem("TOKEN")
        window.location.assign("/login")
        dispatch({type:"LOGOUT" ,payload:null})
    }
    let TOKEN=window.localStorage.getItem("TOKEN")
    let parsedToken=JSON.parse(TOKEN)
    let getMe=async ()=>{
        let {data}=await USER_API_INSTACE.get(`/auth/profile` ,{
            headers:{
                Authorization:`Bearer ${parsedToken.access_token}`
            }
        })
        dispatch({type:"GETME",profile:data})
        // console.log(data);
    }
    useEffect(()=>{
        fetchAccessToken();
        getMe()
    },[])
    const isAuth=auth?.payload?.access_token;
  const currentUser=auth?.profile;
    // console.log(currentUser);
    return (
        <AuthContextApi.Provider value={{auth,signup,login,isAuth,Logout,currentUser}}>
            {children}
        </AuthContextApi.Provider>
    )
}
export default AuthProvider