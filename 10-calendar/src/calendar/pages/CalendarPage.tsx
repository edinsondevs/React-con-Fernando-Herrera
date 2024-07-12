import { Calendar, EventPropGetter } from 'react-big-calendar'
import { defaultView, getMessagesES, localizer } from '../../helpers'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { CalendarEvent, Navbar } from "../index"
import { addHours } from 'date-fns'
import { Button } from 'primereact/button'
import { useState } from 'react'
import { CalendarModal } from '../components/CalendarModal'

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

const onDoubleClick = (event: any) => {
  console.log({onDoubleClick:  event})
}

const onSelect = (event: any) => {
  console.log({onSelect: event})
}

const onViewChange = ( event: any) => {
  console.log({ onViewChange: event})
  localStorage.setItem('defaultView', event)
}


export const CalendarPage = () => {
  const [visible, setVisible] = useState<boolean>(true);

  return (
    <>
      <Navbar />
      <Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} />
      <div>
        <Calendar
          culture='es'
          localizer={localizer}
          events={myEventsList}
          defaultView={defaultView}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 'calc(100vh - 100px)' }}
          messages={getMessagesES() as any}
          eventPropGetter={eventGetter}
          components={{
            event: CalendarEvent
          }}
          onDoubleClickEvent={onDoubleClick}
          onSelectEvent={onSelect}
          onView={onViewChange}
        />
      </div>
        {visible && <CalendarModal visible={visible} setVisible={ setVisible}/> }
    </>
  )
}
