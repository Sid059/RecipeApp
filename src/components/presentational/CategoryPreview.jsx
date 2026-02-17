import styles from './CategoryPreview.module.css';

export default function CategoryPreview({ categories, onCategoryClick}) {

    return (
        <div className={styles["categories-container"]}>
            <h2 className={styles["categories-title"]} aria-label='Browse by Category'> Browse by Category </h2>
            <div className={styles['categories-grid']}>
                {categories.map(category => (
                    <div 
                        className={styles['category-card']}
                        key={category.name}
                        onClick={() => onCategoryClick(category.name)}
                        aria-label={`Browse ${category.name} recipes`}
                    >
                        <img 
                            src={category.image} 
                            alt={category.name} 
                            className={styles['category-image']}
                        />
                        <p className={styles['category-name']}>{category.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}