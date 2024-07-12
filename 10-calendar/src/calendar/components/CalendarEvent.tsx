
export const CalendarEvent = ({event}: any) => {
    return (
        <div className="p-2">
            <strong>{event.title}</strong>
            <br />
            <span>{event.notes} - Creador: {event.user.name}</span>
        </div>
    )
}
