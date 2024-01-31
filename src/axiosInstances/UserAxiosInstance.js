import axios from "axios";
let BASE_URL="https://api.escuelajs.co/api/v1"
export let USER_API_INSTACE=axios.create({
    baseURL:BASE_URL
})