export interface LoginInterface {
	loginEmail: string;
	loginPassword: string;
}
export interface RegisterInterface {
	registerName: string;
	registerEmail: string;
	registerPassword: string;
	registerPassword2: string;
}

export interface LoginDispatchInterface {
	correo: string;
	contrasena: string;
}