import { parseISO } from "date-fns";

export const mapperDateEvents = (data: any[]) => {
	const events = data.map(event =>{
        
        event.start = parseISO(event.start);
        event.end = parseISO(event.end);

        return event
    })

	return events;
};