import { useState, useEffect } from 'react';
import useDebounce from '../hooks/useDebounce.js';

export default function DebounceTest() {
    const [input, setInput] = useState('');
    const debounced = useDebounce(input, 1000);
    
    useEffect(() => {
        console.log('API call with:', debounced);
    }, [debounced]);
    
    return (
        <div style={{ padding: '2rem' }}>
            <h2>Debounce Test (1000ms delay)</h2>
            <input 
                value={input}
                onChange={(e) => {
                    setInput(e.target.value);
                    console.log('Input changed to:', e.target.value);
                }}
                placeholder="Type something..."
                style={{
                    padding: '0.5rem',
                    fontSize: '1rem',
                    width: '300px'
                }}
            />
            <div style={{ marginTop: '1rem' }}>
                <p><strong>Current input:</strong> {input}</p>
                <p><strong>Debounced value:</strong> {debounced}</p>
            </div>
        </div>
    );
}