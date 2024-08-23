import { Calendar, EventPropGetter } from 'react-big-calendar'
import { defaultView, getMessagesES, localizer } from '../../helpers'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { CalendarEvent, Navbar } from "../index"
import { Button } from 'primereact/button'
import { CalendarModal } from '../components/CalendarModal'
import { useCalendarStore, useUiStore } from '../../hooks'



const eventGetter: EventPropGetter<any> = (_event: string, _start: Date, _end: Date, isSelected: boolean,  ) => {
  return {
    style: {
      backgroundColor: (isSelected) ? '#367CF7' : '#aa3344',
      borderRadius: '5px',
      opacity: 0.8,
      color: 'white',
    }
  }
}


export const CalendarPage = () => {

  const { openDateModal } = useUiStore();
  const { events } = useCalendarStore();
  
  const onDoubleClick = (event: any,) => {
    openDateModal();
    console.log({ onDoubleClick: event });
  };
  
  const onSelect = (event: any) => {
    console.log({onSelect: event})
  }
  
  const onViewChange = ( event: any) => {
    console.log({ onViewChange: event})
    localStorage.setItem('defaultView', event)
  }

  
  return (
		<>
			<Navbar />
			<Button
				label='Show'
				icon='pi pi-external-link'
				onClick={openDateModal}
			/>
			<div>
				<Calendar
					culture='es'
					localizer={localizer}
					events={events}
					defaultView={defaultView}
					startAccessor='start'
					endAccessor='end'
					style={{ height: "calc(100vh - 100px)" }}
					messages={getMessagesES() as any}
					eventPropGetter={eventGetter}
					components={{
						event: CalendarEvent,
					}}
					onDoubleClickEvent={onDoubleClick}
					onSelectEvent={onSelect}
					onView={onViewChange}
				/>
			</div>
			{<CalendarModal />}
		</>
  );
}
