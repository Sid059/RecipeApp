import styles from './SearchBar.module.css';

export default function SearchBar({ value, onChange, placeholder = 'Search recipes...' }) {
    
    const handleChange = ({target}) => {
        const { value } = target;
        onChange(value);
    };

    const handleClear = () => {
        onChange('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            // Optionally trigger search on Enter
            //console.log('Search submitted:', value);
        }
    };

    return (
        <div className={styles['search-bar-container']}>
            <div className={styles['search-input-wrapper']}>
                <img 
                    src="/search_Icon.png" 
                    alt="Search Icon"
                    className={styles['search-icon']}
                />
                
                <input
                    type="text"
                    className={styles['search-input']}
                    value={value}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    placeholder={placeholder}
                />
                
                {value && (
                    <button 
                        className={styles['clear-search']}
                        onClick={handleClear}
                        aria-label="Clear search"
                    >
                        ×
                    </button>
                )}
            </div>
        </div>
    );
}