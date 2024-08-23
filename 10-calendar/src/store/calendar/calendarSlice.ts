import { createSlice } from '@reduxjs/toolkit'
import { addHours } from 'date-fns';
import { EventInterface } from '../../utils/interfaces/calendarInterfaces';

const tempEvent: EventInterface = {
	title: "Cumpleaños",
	notes: "ir a la fiesta",
	start: new Date(),
	end: addHours(new Date(), 1),
	user: {
		id: 1,
		name: "John",
	},
};

export const calendarSlice = createSlice({
	name: "calendar",
	initialState: {
		events: [tempEvent],
		activeEvent: null,
	},
	reducers: {
		//ACA VAN LAS FUNCIONES A REALIZAR
		calendarReducer: (state, action) => {
			//   state.counter++
		},
	},
});

// Se generan creadores de acciones para cada función reductora de casos
export const { calendarReducer } = calendarSlice.actions