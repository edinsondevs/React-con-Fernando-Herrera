import { useState, useEffect, useMemo } from "react";

export const useForm = (initialForm = {}, formValidations = {}) => {

    const [formState, setFormState] = useState(initialForm);
    const [formValidation, setFormValidation] = useState({});
    
    useEffect(() => {
        createValidators()
    },[ formState ]);

    useEffect(() => {
      setFormState(initialForm)
    }, [initialForm])
    
    
    const isFormValid = useMemo(() => Object.values(formValidation).every(v => v === null),[formValidation]);

    const onInputChange = ({ target }) => {
        const { value, name } = target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const onResetForm = () => {
        setFormState(initialForm)
    }

    const createValidators = () => {
        const formCheckValues = {};

        for (const formField of Object.keys( formValidations )) {
            const [ fn, errorMessage ] = formValidations[ formField ];
            formCheckValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage
        }

        setFormValidation(formCheckValues);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        isFormValid
    }
}
