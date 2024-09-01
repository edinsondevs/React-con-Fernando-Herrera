import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Tipado del estado inicial
export interface AuthState {
  status: 'checking' | 'not-authenticated' | 'authenticated';
  user: {};
  errorMessage: string | undefined;
}

export const authSlice = createSlice({
	name: "auth",
	initialState: {
		status: "checking", // checking, not-authenticated, authenticated
		user: {},
		errorMessage: undefined, //
	} as AuthState,
	reducers: {
		//ACA VAN LAS FUNCIONES A REALIZAR
		onChecking: (state: AuthState) => {
			state.status = "checking";
			state.user = {};
			state.errorMessage = undefined;
		},

		onLogin: (state, { payload }: PayloadAction<{}>) => {
			state.status = "authenticated";
			state.user = payload;
			state.errorMessage = undefined;
		},
		onLogout: (state: AuthState) => {
			state.status = "not-authenticated";
			state.user = {};
			state.errorMessage = undefined;
		},
	},
});

// Se generan creadores de acciones para cada función reductora de casos
export const { onChecking, onLogin } = authSlice.actions;