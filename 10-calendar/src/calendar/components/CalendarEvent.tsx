
export const CalendarEvent = ({event}: any) => {
    // console.log(event);
    return (
        <div className="p-2">
            <strong>{event.title}</strong>
            <br />
            <span>{event.notes} - Creador: {event.user?.nombre} </span>
        </div>
    )
}
