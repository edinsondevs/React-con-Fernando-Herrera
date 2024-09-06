export type InputCalendar = 'start' | 'end';
export type HourFormat = '12' | '24';
export interface labelCalendarInterface {
	minDate?: Date;
	showTime?: boolean;
	type?: string;
	hourFormat?: "12" | "24"; // agregar esta propiedad con el tipo correcto
	initialDate: Date; // nueva propiedad
	onChange: (date: Date) => void;
}

// Definición de FormInterface
export interface FormInterface {
    title: string;
    notes: string;
    start: any;
    end: any;
}


export interface UseFormProps<T> {
	initialForm: T;
}

export interface UseFormReturn<T> {
	formState: T;
	onInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	onResetForm: () => void;
}

export interface CalendarModalProps {
	visible: boolean;
	setVisible: (visible: boolean) => void;
}

export interface EventForm {
	title: string;
	notes: string;
	start: any;
	end: any | "";
}
export interface User {
	id: number;
	name: string;
}

export interface EventInterface {
	_id: number;
	title: string;
	notes: string;
	start: any;
	end: any;
	user: User;
}

export interface CalendarSliceInterface {
	title: string;
	notes: string;
	start: string;
	end: string;
	id: string;
	user: User;
}

export interface User {
	_id: number;
	nombre: string;
	correo: string;
	contrasena: string;
	__v: number;
}