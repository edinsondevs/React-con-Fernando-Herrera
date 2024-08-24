import { useDispatch, useSelector } from "react-redux";
import { EventInterface } from "../utils/interfaces/calendarInterfaces";
import { onSetActiveEvent } from "../store";

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
    return {
		events,
		activeEvent,
		setActiveEvent,
	};
}
