import axios from "axios";

//  axios instance
const $axios = axios.create({
    baseURL:"http://localhost:4000"
});

export default $axios;