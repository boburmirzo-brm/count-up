import axios from "axios";

export const api = axios.create({
    baseURL: "http://asadullo.uz/nasiya/"
})

api.interceptors.request.use((config) => {
    let token = localStorage.getItem("accessToken")
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})
