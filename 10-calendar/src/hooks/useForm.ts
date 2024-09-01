import { useState, useEffect, useMemo } from 'react';


const useForm = <T>(initialForm: T, formValidations: { [key: string]: [Function, string] } = {}) => {
  const [formState, setFormState] = useState<any>(initialForm);
  const [formValidation, setFormValidation] = useState<any>({});

  useEffect(() => {
	createValidators();
  }, [formState]);

  useEffect(() => {
	setFormState(initialForm);
  }, [initialForm]);

  const isFormValid = useMemo(() => {
	for (const formValue of Object.keys(formValidation)) {
	  if (formValidation[formValue] !== null) return false;
	}

	return true;
  }, [formValidation]);

  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
	const { name, value } = target;
	setFormState({
	  ...formState,
	  [name]: value,
	});
  };

  const onResetForm = () => {
	setFormState(initialForm);
  };

  const createValidators = () => {
	const formCheckedValues: { [key: string]: string | null } = {};

	for (const formField of Object.keys(formValidations)) {
	  const [fn, errorMessage] = formValidations[formField];

	  formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage;
	}

	setFormValidation(formCheckedValues);
  };

  return {
	...formState,
	formState,
	onInputChange,
	onResetForm,
	...formValidation,
	isFormValid,
  };
};

export default useForm;