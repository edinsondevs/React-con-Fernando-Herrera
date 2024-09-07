import { useState, useEffect } from "react";

interface StorageItem {
	itemStorage: string | null;
	error: Error | null;
	setItemStorage: (newValue: string) => void;
	clearLocalStorage: () => void;
	getLocalStorage: () => string | null;
}

export const useLocalStorage = <T>(
	key: string,
	initialValue: any | null = null
): StorageItem => {
	const [itemStorage, setItemStorage] = useState<string | null>(initialValue);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		const storedValue = localStorage.getItem(key);
		if (storedValue) {
			try {
				setItemStorage(JSON.parse(storedValue));
			} catch (error) {
				  setError(error as Error);
			}
		}
	}, [key]);

	const setValueInLocalStorage = (newValue: string) => {
		try {
			localStorage.setItem(key, newValue);
			setItemStorage(newValue);
		} catch (error) {
			 setError(error as Error);
		}
	};

    const clearLocalStorage = () => {
        localStorage.clear();
        setItemStorage(null);
    };

    const getLocalStorage = () => {
        try {
            return (localStorage.getItem('token') || "");
        } catch (error) {
            return null;
        }
    };

	return { itemStorage, error, setItemStorage: setValueInLocalStorage, clearLocalStorage , getLocalStorage };
};


