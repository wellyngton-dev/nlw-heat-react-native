import axios from "axios";

export const api = axios.create({
    baseURL: 'http://3.19.79.48:4000/'
});