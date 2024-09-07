import axios from "axios";
import { getEnvVariables } from "../helpers";

const { VITE_API_URL, DEV, VITE_APR_URL_PRD } = getEnvVariables()

const calendarApi = axios.create({
	baseURL: DEV ? VITE_API_URL : VITE_APR_URL_PRD,
});

// todo: configurar interceptors
calendarApi.interceptors.request.use( config => {
    
    config.headers.set('x-token', localStorage.getItem('token') || '')
    return config
})

export default calendarApi;