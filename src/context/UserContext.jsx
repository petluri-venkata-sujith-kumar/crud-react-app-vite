import { createContext, useReducer ,useContext, useEffect} from "react";
import userReducer from "../reducer/useReducer/UserReducer";
import { USER_API_INSTACE } from "../axiosInstances/UserAxiosInstance";
export const UserContextApi=createContext()
const initialState={
    users:null,
    singleUser:null,
    isLoading:true,
}
const UserProvider =({children})=>{
    let [state,dispatch]=useReducer(userReducer,initialState)
    let fetchUsers=async ()=>{
        let {data}=await USER_API_INSTACE.get("/users")
        // console.log(data);
        dispatch({type:"FETCH",users:data})
    }
    let fetchSingleUser=async (id)=>{
        let {data}=await USER_API_INSTACE.get(`/users/${id}`)
        dispatch({type:"SINGLE_USER",singleUser:data})
        console.log(data);
    }
    return (
        <UserContextApi.Provider value={{state,fetchUsers,fetchSingleUser}}>{children}</UserContextApi.Provider>
    )
}
export default UserProvider

//!custom hook
export let useAllUsers=()=>{
    const {state,fetchUsers,fetchSingleUser}=useContext(UserContextApi)
   useEffect(()=>{
    fetchUsers()
   },[])
   let data={state,fetchSingleUser}
   return data
}