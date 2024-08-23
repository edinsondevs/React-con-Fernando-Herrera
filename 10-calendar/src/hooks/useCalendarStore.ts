import { useSelector } from "react-redux";
import { EventInterface } from "../utils/interfaces/calendarInterfaces";

export const useCalendarStore = () => {
    
    const { events, activeEvent } = useSelector(
		(state: { calendar: { events: EventInterface[], activeEvent: null } }) => state.calendar
	);

    return {
		events,
		activeEvent,
	};
}
