import { useState } from "react";
import {
	UseFormProps,
	UseFormReturn,
} from "../utils/interfaces/calendarInterfaces";

export const useForm = <T>({ initialForm = {} as T }: UseFormProps<T>): UseFormReturn<T> => {
	
	const [formState, setFormState] = useState<T>(initialForm);

	const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { value, name } = target;
		setFormState((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const onResetForm = () => {
		setFormState(initialForm);
	};

	return {
		formState,
		onInputChange,
		onResetForm,
	};
};
