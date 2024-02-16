import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
    baseURL: 'https://bff-ms-fullstack-778f0df92c20.herokuapp.com/api/bffmsfullstackchalenge'
});

api.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
        config.headers.Authorization = `${token}`;
    }
    return config;
});

export default api;