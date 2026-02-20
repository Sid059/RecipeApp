import styles from './RecipeCard.module.css';
import { useFavorites } from '../../context/FavoritesContext.jsx';

export default function RecipeCard({ recipe, onClick }) {

    const { toggleFavorite, isFavorite } = useFavorites();
    //console.log('Favorites:', favorites);

    const favorite = isFavorite(recipe.idMeal);

    const handleHeartClick = (e) => {
        e.stopPropagation(); // Stop the click event from bubbling up to the card's onClick
        toggleFavorite(recipe.idMeal); // Call the function with recipe ID
    };

    return (
        <div className={styles['recipe-card']} onClick={onClick}>
            <div className={styles['recipe-img-container']}>
                <img 
                    src={recipe.strMealThumb} 
                    alt={recipe.strMeal} 
                    className={styles['recipe-img']} 
                    loading="lazy"
                />
            </div>
            <div className={styles['recipe-info']}>
                <h3 className={styles['recipe-title']}>{recipe.strMeal}</h3>
                <p className={styles['recipe-category']}>{recipe.strCategory}</p>
                <div className={styles['heart-icon-container']} onClick={handleHeartClick}>
                    <img 
                        src={favorite ? "/heart_filled.png" : "/heart_empty.png"}
                        alt={favorite ? "Remove from favorites" : "Add to favorites"} 
                        className={styles['heart-icon']}
                    />
                </div>
            </div>
        </div>
    );
}