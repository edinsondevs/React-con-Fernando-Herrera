import { dateFnsLocalizer } from "react-big-calendar"
import { format, parse, startOfWeek, getDay } from "date-fns"
import esES from 'date-fns/locale/es'

const locales = {
    'es': esES,
  }
  
export const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  })

type View = 'week' | 'month' | 'day' | 'agenda';

export const defaultView = localStorage.getItem('defaultView') as View || 'week';

// Define la interfaz para los eventos
export interface Event {
  title?: string;
  notes?: string;
  start?: Date;
  end?: Date;
  user?: {
    id: number;
    name: string;
  };
}
