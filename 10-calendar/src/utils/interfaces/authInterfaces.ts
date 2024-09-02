export interface UserInterface {
	nombre: string;
	uid: string;
}

export interface AuthState {
	status: "checking" | "not-authenticated" | "authenticated";
	user: UserInterface;
	errorMessage: string | undefined;
}
export interface StateInterface {
	auth: AuthState;
}
