import { useNavigate } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import styles from './RecipeGrid.module.css';

export default function RecipeGrid({ recipes }) {
    const navigate = useNavigate();

    const handleRecipeClick = (recipe) => {
        navigate(`/recipes/${recipe.idMeal}`);
    }

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
                    onClick={() => handleRecipeClick(recipe)} 
                    // isFavorite={favorites.includes(recipe.idMeal)} until we implement favorites functionality
                    //onFavoriteToggle={onFavoriteToggle}
                />
            ))}
        </div>
    )
}