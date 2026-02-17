import styles from './RecipeCard.module.css';

export default function RecipeCard({ recipe, onClick, isFavorite }) {
    if (!recipe) {
        //console.log('Recipe is undefined, returning null');
        return null;
    }

    return (
        <div className={styles['recipe-card']} onClick={onClick}>
            <div className={styles['recipe-img-container']}>
                <img 
                    src={recipe.strMealThumb} 
                    alt={recipe.strMeal} 
                    className={styles['recipe-img']} 
                />
            </div>
            <div className={styles['recipe-info']}>
                <h3 className={styles['recipe-title']}>{recipe.strMeal}</h3>
                <p className={styles['recipe-category']}>{recipe.strCategory}</p>
                <div className={styles['heart-icon-container']}>
                    <img 
                        src={isFavorite ? "/heart_filled.png" : "/heart_empty.png"}
                        alt={isFavorite ? "Remove from favorites" : "Add to favorites"} 
                        className={styles['heart-icon']}
                    />
                </div>
            </div>
        </div>
    );
}