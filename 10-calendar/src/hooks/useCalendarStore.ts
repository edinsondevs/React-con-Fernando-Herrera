import { useDispatch, useSelector } from "react-redux";
import { EventInterface } from "../utils/interfaces/calendarInterfaces";
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSetActiveEvent, onUpdateEvent } from "../store";
import { calendarApi } from "../api";
import { mapperDateEvents } from "../helpers";
import Swal from "sweetalert2";


export const useCalendarStore = () => {
    
	const dispatch = useDispatch();

    const { events, activeEvent } = useSelector((state: {calendar: { events: EventInterface[]; activeEvent: EventInterface } }) => state.calendar);
	const { user } = useSelector((state: any) => state.auth);

	const setActiveEvent = (calendarEvent: any) => {
		dispatch(onSetActiveEvent(calendarEvent));	
	}

	const startSaveEvent = async (calendarEvent: any) => {

		// TODO: actualizar el state del evento
		// Actualizando		
		try {
				if(calendarEvent.id){
				await calendarApi.put(`/events/${calendarEvent.id}`, calendarEvent);
				dispatch(onUpdateEvent({...calendarEvent}));
				Swal.fire('Actualizado', 'El evento se actualizo correctamente', 'success')
				return;
			}
		} catch (error: any) {
			console.error(error)
			Swal.fire('Error al actualizar', error.response.data?.msg, 'error')
			return;
		}
			// Crear evento en la base de datos
			// calendarEvent.user = user;
			const { data: { data } } = await calendarApi.post('/events', calendarEvent);
			Swal.fire('Nota Creada', 'El evento se creo correctamente', 'success');
			dispatch(onAddNewEvent({ ...calendarEvent, id: data.id, user }));
		
	}

	const startDeleteEvent = async () => {
		// * Eliminar una nota en la base de datos
		try {
			await calendarApi.delete(`/events/${activeEvent.id}`);
			Swal.fire('Eliminado correctamente', 'El evento se elimino correctamente', 'success')
			dispatch(onDeleteEvent());
		} catch (error: any) {
			Swal.fire('Error al eliminar', error.response.data?.msg, 'error')
		}
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
