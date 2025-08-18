import axios from "axios";

export const api = axios.create({
    // baseURL: "https://asadullo.uz/nasiya/"
    baseURL: "https://nasiya-savdo-2og3.onrender.com"
})

api.interceptors.request.use((config) => {
    let token = localStorage.getItem("accessToken")
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})
