import { useDispatch, useSelector } from "react-redux"
import { LoginDispatchInterface } from "../utils/interfaces/loginInterfaces";
import { calendarApi } from "../api";

export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector((state) => state.auth)
    const dispatch = useDispatch();


    const startLogin = async ({ correo, contrasena }: LoginDispatchInterface) => {
        // console.log({correo, contrasena})
        try {

            // await dispatch(login({ correo, contrasena }));
            const resp = await calendarApi.post('/auth', { correo, contrasena });
            console.log({ resp })
        } catch (error) {
            console.error({error})
        }
	};

    return {
		// * Propiedades

		status,
		user,
		errorMessage,

		// * Metodos
		startLogin,
	};
}