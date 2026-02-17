import RecipeCard from "./RecipeCard";
import styles from './RecipeGrid.module.css';

export default function RecipeGrid({ recipes, favorites, onRecipeClick, onFavoriteToggle }) {
    if (!recipes || recipes.length === 0) {
        //console.log('Recipe is undefined, returning null');
        return null;
    }

    return (
        <div className={styles['recipe-grid']}>
            {recipes.map(recipe => (
                <RecipeCard 
                    key={recipe.idMeal} 
                    recipe={recipe} 
                    onClick={() => onRecipeClick(recipe)} 
                    // isFavorite={favorites.includes(recipe.idMeal)} until we implement favorites functionality
                    onFavoriteToggle={onFavoriteToggle}
                />
            ))}
        </div>
    )
}