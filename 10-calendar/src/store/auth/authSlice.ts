import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
	name: "auth",
	initialState: {
		status: "checking", // checking, not-authenticated, authenticated
		user: {},
		errorMessage: undefined, //
	},
	reducers: {
		//ACA VAN LAS FUNCIONES A REALIZAR
		onChecking: (state) => {
			state.status = "checking";
			state.user = {};
			state.errorMessage = undefined;
		},

        onLogin: (state, { payload }) => {
            state.status = "authenticated";
            state.user = payload;
            state.errorMessage = undefined;
        },
	},
});

// Se generan creadores de acciones para cada función reductora de casos
export const { onChecking, onLogin } = authSlice.actions;