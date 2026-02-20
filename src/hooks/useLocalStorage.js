import { useState } from 'react';

export default function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            
            if (item === null || item === "undefined") {
                return initialValue;
            }
            
            return JSON.parse(item);
        } catch (error) {
            console.error(`Error reading localStorage key "${key}":`, error);
            return initialValue;
        }
    });

    const setValue = (value) => {
        try {
            // To specifically handle callback functions passed to setter functions like used in favorites context, where we do setFavorites(prev => ...), to get the previous value of favorites and update it based on that, we check if the value is a function, if it is we call it with the current storedValue to get the new value to store, otherwise we just use the value directly
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error(`Error setting localStorage key "${key}":`, error);
        }
    };

    return [storedValue, setValue];
}