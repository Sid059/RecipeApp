import { useNavigate } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import styles from './RecipeGrid.module.css';
import { memo, useCallback } from 'react';

export default memo(function RecipeGrid({ recipes }) {
    const navigate = useNavigate();

    const handleRecipeClick = useCallback((recipe) => {
        navigate(`/recipe/${recipe.idMeal}`);
    }, [navigate]);

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
                    onRecipeClick={handleRecipeClick} 
                    // isFavorite={favorites.includes(recipe.idMeal)} until we implement favorites functionality
                    //onFavoriteToggle={onFavoriteToggle}
                />
            ))}
        </div>
    )
});