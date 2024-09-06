import { useDispatch, useSelector } from "react-redux";
import { EventInterface } from "../utils/interfaces/calendarInterfaces";
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSetActiveEvent, onUpdateEvent } from "../store";
import { calendarApi } from "../api";
import { mapperDateEvents } from "../helpers";


export const useCalendarStore = () => {
    
	const dispatch = useDispatch();

    const { events, activeEvent } = useSelector((state: {calendar: { events: EventInterface[]; activeEvent: EventInterface } }) => state.calendar);
	const { user } = useSelector((state: any) => state.auth);
	const setActiveEvent = (calendarEvent: any) => {
		dispatch(onSetActiveEvent(calendarEvent));	
	}

	const startSaveEvent = async (calendarEvent: any) => {
		// TODO: Update event

		// TODO: actualizar el state del evento
		if(calendarEvent._id){
			// Actualizando
			dispatch(onUpdateEvent({...calendarEvent}));
		}else{	
			// Crear evento en la base de datos
			// calendarEvent.user = user;
			const { data: { data } } = await calendarApi.post('/events', calendarEvent);
			
			dispatch(onAddNewEvent({ ...calendarEvent, id: data.id, user }));
		}
	}

	const startDeleteEvent = () => {
		// * TODO: llegar al backend
		
		dispatch(onDeleteEvent());
	}

	const startLoadingEvent = async () => {
		try {
			const { data } = await calendarApi.get('/events')			
			const events = mapperDateEvents(data.events);
			dispatch(onLoadEvents(events));
		} catch (error) {
			console.log(error);
			console.log('Error cargando los eventos');
		}
	};



    return {
		//* Propiedades
		events,
		activeEvent,
		hasEventSelected: !!activeEvent,

		//* Metodos
		setActiveEvent,
		startSaveEvent,
		startDeleteEvent,
		startLoadingEvent,
	};
}
