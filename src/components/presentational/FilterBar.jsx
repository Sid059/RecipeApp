import styles from './FilterBar.module.css';

export default function FilterBar({ selectedCategory, onCategoryChange, onClearFilters }) {
    
    const categories = [
        'Beef', 'Chicken', 'Dessert', 'Lamb', 
        'Pasta', 'Pork', 'Seafood', 'Vegetarian',
        'Breakfast', 'Starter', 'Side', 'Vegan'
    ];

    const handleCategoryClick = (category) => {
        if (selectedCategory === category) {
            onCategoryChange('');
        } else {
            onCategoryChange(category);
        }
    };

    return (
        <div className={styles['filter-bar-container']}>
            <div className={styles['filter-header']}>
                <span className={styles['filter-title']}>Filter by Category</span>
                <button
                    className={`${styles['clear-filters-btn']} ${
                        !selectedCategory ? styles['hidden'] : ''
                    }`}
                    onClick={onClearFilters}
                >
                    ✕ Clear Filters
                </button>
            </div>

            <div className={styles['filter-buttons']}>
                {categories.map(category => (
                    <button
                        key={category}
                        className={`${styles['filter-button']} ${
                            selectedCategory === category ? styles['active'] : ''
                        }`}
                        onClick={() => handleCategoryClick(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            
            <div className={styles['filter-section-divider']}></div>
        </div>
    );
}