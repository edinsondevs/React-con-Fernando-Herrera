import { useDispatch, useSelector } from "react-redux";
import { EventInterface } from "../utils/interfaces/calendarInterfaces";
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store";

export const useCalendarStore = () => {
    
	const dispatch = useDispatch();

    const { events, activeEvent } = useSelector(
		(state: {
			calendar: { events: EventInterface[]; activeEvent: EventInterface };
		}) => state.calendar
	);

	const setActiveEvent = (calendarEvent: any) => {
		dispatch(onSetActiveEvent(calendarEvent));	
	}

	const startSaveEvent = async (calendarEvent: any) => {
		// TODO: llegar al backend

		// TODO: actualizar el state del evento
		if(calendarEvent._id){
			// Actualizando
			dispatch(onUpdateEvent({...calendarEvent}));
		}else{	
			// Creando
			dispatch(onAddNewEvent({...calendarEvent, _id: new Date().getTime()}));
		}
	}

	const startDeleteEvent = () => {
		// * TODO: llegar al backend
		
		dispatch(onDeleteEvent());
	}

    return {
		//* Propiedades
		events,
		activeEvent,
		hasEventSelected: !!activeEvent,

		//* Metodos
		setActiveEvent,
		startSaveEvent,
		startDeleteEvent,
	};
}
