import axios from "axios";
import { getEnvVariables } from "../helpers";

const { VITE_API_URL } = getEnvVariables()

const calendarApi = axios.create({
	baseURL: VITE_API_URL,
});

// todo: configurar interceptors


export default calendarApi

export function post(arg0: string, arg1: { email: string; password: string; })
{
    throw new Error("Function not implemented.");
}
