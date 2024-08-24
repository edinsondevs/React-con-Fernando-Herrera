import { Calendar } from "primereact/calendar"
import { labelCalendarInterface } from "../../utils/interfaces/calendarInterfaces";
import { addLocale } from "primereact/api";

export const CalendarComponent = (props: labelCalendarInterface) => {
    const {
		minDate,
		showTime = false,
		type = "start",
		hourFormat,
		initialDate,
		onChange, // propiedad para emitir la fecha seleccionada
	} = props;

	addLocale('es', {
        firstDayOfWeek: 1,
        dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
        dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
        dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
        monthNames: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
        monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
        today: 'Hoy',
        clear: 'Limpiar'
    });

	const onselectionchange = (e: any) => { 
		onChange(e.target.value);
	}

	return (
		<Calendar
			value={initialDate}
			name={type}
			dateFormat='dd/mm/yy'
			locale='es'
			onChange={onselectionchange}
			showIcon
			showButtonBar
			showTime={showTime}
			hourFormat={hourFormat}
			minDate={minDate}
		/>
	);
};
