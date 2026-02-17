import { useState, useEffect, useRef } from 'react';

export default function useDebounce(value, delay = 500) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    const timeoutIdRef = useRef(null);

    useEffect(() => {
        timeoutIdRef.current = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(timeoutIdRef.current);
        }

    }, [value, delay]);

    return debouncedValue;
}