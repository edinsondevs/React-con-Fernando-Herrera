import { createSlice } from '@reduxjs/toolkit'

export interface UiState {
	isDateModalOpen: boolean;
}


export const uiSlice = createSlice({
	name: "ui",
	initialState: {
		isDateModalOpen: false,
	},
	reducers: {
		//ACA VAN LAS FUNCIONES A REALIZAR
		onOpenDateModal: (state: UiState) => {
			state.isDateModalOpen = true;
		},
		onCloseDateModal: (state: UiState) => {
			state.isDateModalOpen = false;
		},
	},
});

// Se generan creadores de acciones para cada función reductora de casos
export const { onOpenDateModal, onCloseDateModal } = uiSlice.actions;