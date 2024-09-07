import { createSlice } from '@reduxjs/toolkit'
import { CalendarSliceInterface, EventInterface } from '../../utils/interfaces/calendarInterfaces';

export const calendarSlice = createSlice({
	name: "calendar",
	initialState: {
		isLoadingEvents: true,
		events: [] as CalendarSliceInterface[],
		activeEvent: null as EventInterface | null, // Agrega el tipo EventInterface | null ,
	},
	reducers: {
		onSetActiveEvent: (state, { payload }) => {
			state.activeEvent = payload;
		},

		onAddNewEvent: (state, { payload }) => {
			state.events.push(payload);
			state.activeEvent = null;
		},

		onUpdateEvent: (state, { payload }) => {
			state.events = state.events.map((event) => {
				if (event.id === payload.id) {
					return payload;
				}
				return event;
			});
		},

		onDeleteEvent: (state) => {
			
			if (state.activeEvent) {
				state.events = state.events.filter(
					(event: any) =>
						event.id !== state.activeEvent?.id
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

		onLogoutCalendar: (state) => {
			state.isLoadingEvents = true;
			state.events = [];
			state.activeEvent = null;
		},
	},
});


// Se generan creadores de acciones para cada función reductora de casos
export const {
	onSetActiveEvent,
	onAddNewEvent,
	onUpdateEvent,
	onDeleteEvent,
	onLoadEvents,
	onLogoutCalendar
} = calendarSlice.actions;