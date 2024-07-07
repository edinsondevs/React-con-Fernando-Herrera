import { Calendar, EventPropGetter } from 'react-big-calendar'
import { getMessagesES, localizer } from '../../helpers'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { CalendarEvent, Navbar } from "../index"
import { addHours } from 'date-fns'

const myEventsList = [{
  title: 'Cumpleaños',
  notes: 'ir a la fiesta',
  start: new Date(),
  end: addHours(new Date(), 2), 
  user: {
    id: 1,
    name: 'John'
  }
},
{
  title: 'Vacaciones',
  notes: 'Disfrutar de las vacaciones ',
  start: new Date(2024, 6, 3),
  end: new Date(2024, 6, 13), 
  user: {
    id: 2,
    name: 'Juan'
  }
}
]

const eventGetter: EventPropGetter<any> = (event: string, start: Date, end: Date, isSelected: boolean,  ) => {
  
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
  return (
    <>
      <Navbar />

      <div>
        <Calendar
          culture='es'
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 'calc(100vh - 100px)' }}
          messages={getMessagesES() as any}
          eventPropGetter={eventGetter}
          components={{
            event: CalendarEvent
          }}
        />
      </div>
    </>
  )
}
