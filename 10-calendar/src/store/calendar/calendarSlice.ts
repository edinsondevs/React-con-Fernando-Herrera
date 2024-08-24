import { createSlice } from '@reduxjs/toolkit'
import { addHours } from 'date-fns';
import { EventInterface } from '../../utils/interfaces/calendarInterfaces';

const tempEvent: EventInterface = {
	_id: new Date().getTime(),
	title: "Cumpleaños",
	notes: "ir a la fiesta",
	start: new Date(),
	end: addHours(new Date(), 2),
	user: {
		id: 1,
		name: "John",
	},
};

export const calendarSlice = createSlice({
	name: "calendar",
	initialState: {
		events: [tempEvent],
		activeEvent: tempEvent,
	},
	reducers: {
		//ACA VAN LAS FUNCIONES A REALIZAR
		onSetActiveEvent: (state, { payload }) => {
			state.activeEvent = payload;
		},
	},
});


// Se generan creadores de acciones para cada función reductora de casos
export const { onSetActiveEvent } = calendarSlice.actions;