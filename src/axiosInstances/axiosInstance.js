import axios from "axios";

let BASE_URL="http://localhost:5000/courses"
let AxiosInstances=axios.create({
    baseURL:BASE_URL,
})
export default AxiosInstances