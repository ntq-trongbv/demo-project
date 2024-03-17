import axios from "axios";

const baseURL = "https://reqres.in";

const instance = axios.create({
    baseURL: baseURL
})

// add new response
instance.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    return Promise.reject(error);
})

export default instance;