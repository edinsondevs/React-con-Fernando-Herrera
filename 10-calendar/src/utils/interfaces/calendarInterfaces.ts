export type InputCalendar = 'start' | 'end';
export type HourFormat = '12' | '24';
export interface labelCalendarInterface {
	onInputChange: (e: any) => void;
	type?: InputCalendar;
	minDate?: Date;
	showTime?: boolean;
	hourFormat?: HourFormat;
}

// Definición de FormInterface
export interface FormInterface {
    title: string;
    notes: string;
    start: Date;
    end: Date;
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
	start: Date;
	end: Date | "";
}
export interface User {
	id: number;
	name: string;
}

export interface EventInterface {
	title: string;
	notes: string;
	start: Date;
	end: Date;
	user: User;
}
