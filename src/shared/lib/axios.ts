import axios from "axios";

export const api = axios.create({
    baseURL: "https://asadullo.uz/nasiya/"
})

api.interceptors.request.use((config) => {
    let token = localStorage.getItem("accessToken")
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})
