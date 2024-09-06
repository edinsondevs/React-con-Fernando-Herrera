import { createSlice } from '@reduxjs/toolkit'
// import { addHours } from 'date-fns';
import { CalendarSliceInterface, EventInterface } from '../../utils/interfaces/calendarInterfaces';

// const tempEvent: EventInterface = {
// 	_id: new Date().getTime(),
// 	title: "Cumpleaños",
// 	notes: "ir a la fiesta",
// 	start: new Date(),
// 	end: addHours(new Date(), 2),
// 	user: {
// 		id: 1,
// 		name: "John",
// 	},
// };

export const calendarSlice = createSlice({
	name: "calendar",
	initialState: {
		isLoadingEvents: true,
		events: [] as CalendarSliceInterface[],
		activeEvent: null as EventInterface | null, // Agrega el tipo EventInterface | null ,
	},
	reducers: {
		//ACA VAN LAS FUNCIONES A REALIZAR
		onSetActiveEvent: (state, { payload }) => {
			state.activeEvent = payload;
		},

		onAddNewEvent: (state, { payload }) => {
			state.events.push(payload);
			state.activeEvent = null;
		},

		onUpdateEvent: (state, { payload }) => {
			state.events = state.events.map((event) => {
				if (event.id === payload._id) {
					return payload;
				}
				return event;
			});
		},

		onDeleteEvent: (state) => {
			if (state.activeEvent) {
				state.events = state.events.filter(
					(event: any) =>
						event.id !== state.activeEvent?._id
				);
				state.activeEvent = null;
			}
		},

		onLoadEvents: (state, { payload = [] }) => {
			state.isLoadingEvents = false;

			payload.forEach((event: CalendarSliceInterface) => {
				const exists = state.events.some(
					(dbEvent: CalendarSliceInterface) => dbEvent.id === event.id
				);
				if (!exists) {
					state.events.push(event);
				}
			});
		},
	},
});


// Se generan creadores de acciones para cada función reductora de casos
export const { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent, onLoadEvents } = calendarSlice.actions;