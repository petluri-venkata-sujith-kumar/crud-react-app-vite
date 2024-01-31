import AxiosInstances from "../axiosInstances/axiosInstance"

const courseServices={
    createService:async (payload)=>{
        await AxiosInstances.post("/",payload)
    },
    fetchService:async ()=>{
        let {data}=await AxiosInstances.get("/")
        return data
    },
    updateService:async (id,payload)=>{
        await AxiosInstances.put(`/${id}`,payload)
    },
    deleteService:async (id)=>{
        await AxiosInstances.delete(`${id}`)
    },
    fetchId:async (id)=>{
        let {data}=await AxiosInstances.get(`${id}`)
        return data
    }
}
export default courseServices