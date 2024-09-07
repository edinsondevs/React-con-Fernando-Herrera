import { useDispatch, useSelector } from "react-redux"
import { LoginDispatchInterface, RegisterInterface } from "../utils/interfaces/loginInterfaces";
import { calendarApi } from "../api";
import { clearErrorMessage, onChecking, onLogin, onLogout, onLogoutCalendar } from "../store";
import Swal from "sweetalert2";
import { StateInterface } from "../utils/interfaces/authInterfaces";
import { Messages } from "../utils/messagesApp";
import { useLocalStorage }  from "./useLocalStorage";


export const useAuthStore = () => {

    const { setItemStorage: setToken, clearLocalStorage } = useLocalStorage("token", "");
    const { setItemStorage: setTokenInitiDate,  } = useLocalStorage("token-init-date", "");
    const { status, user, errorMessage } = useSelector((state: StateInterface) => state.auth);
    const dispatch = useDispatch();

    const startLogin = async ({ correo, contrasena }: LoginDispatchInterface) => {
        dispatch(onChecking())
        try {
        
            // * Llamado a la API
            const resp = await calendarApi.post('/auth', { correo, contrasena });
            
            // * Guardando token en LocalStorage
            setToken(resp.data.token);
            setTokenInitiDate(new Date().getTime().toString());

            // * Guardando datos del usuario en redux
            dispatch(onLogin({ nombre: resp.data.nombre, uid: resp.data.uid }));

        } catch (error) {

			// * Guardando mensaje Credenciales incorrectas en redux
			dispatch(onLogout(Messages.CredentialError));

            // * Limpia el mensaje mensaje de error de redux
			setTimeout(() => {
				dispatch(clearErrorMessage());
			}, 3000);
		}
	};

    const startRegister = async ({ registerName, registerEmail, registerPassword, registerPassword2 }: RegisterInterface) => {
		
        dispatch(onChecking());
        try {
            if(registerPassword !== registerPassword2){
                Swal.fire(Messages.ErrorInRegister, Messages.ErrorInPassword, 'error');
                return;
            }
            const resp = await calendarApi.post('/auth/register', { nombre: registerName, correo: registerEmail, contrasena: registerPassword });
            setToken(resp.data.token);
            setTokenInitiDate(new Date().getTime().toString());
            if(resp.status === 201) {
                dispatch( onLogin({ nombre: resp.data.nombre, uid: resp.data.uid }) );
                Swal.fire(Messages.UserCreated, Messages.UserCreatedSuccess, 'success');
            }
            
		} catch ({ response: {data: {message}} }: any ) {
            dispatch(onLogout(message));
            Swal.fire(Messages.ErrorAuth, message, "error");
        }
	};

    const checkAuthToken = async () => {
        // * Obtengo el token del localStorage
        const token = localStorage.getItem('token');

        // * Si no hay token mando el logout
        if(!token) return dispatch(onLogout({}));

        try {
            const { data } = await calendarApi.get('/auth/renew');
            setToken(data.token);
            setToken(new Date().getTime().toString());
            dispatch(onLogin({ nombre: data.nombre, uid: data.uid }));
        } catch (error) {
            // localStorage.clear();
            clearLocalStorage();
            dispatch(onLogout({}));
            console.log(error);
        }
    }

    const startLogout = () => {
        clearLocalStorage();
        dispatch(onLogoutCalendar());
        dispatch(onLogout({}));
    }

    return {
		// * Propiedades

		status,
		user,
		errorMessage,

		// * Metodos
		startLogin,
		startRegister,
		checkAuthToken,
		startLogout,
	};
}