import styles from './RecipeDetailPage.module.css';
import LoadingSpinner from './LoadingSpinner.jsx';
import EmptyState from '../container/EmptyState.jsx';

import BackButton from './BackButton.jsx';

export default function RecipeDetailPage({ recipe, loading, error, onGoBack }) {

    const getIngredients = recipe => {
        const ingredients = [];
        for (let i = 1; i <= 20; i++) { // TheMealDB API has 20 ingredient slots (strIngredient1 to strIngredient20)
                const ingredient = recipe[`strIngredient${i}`];
                const measure = recipe[`strMeasure${i}`];
                
                if (ingredient && ingredient.trim()) {
                    ingredients.push({
                        ingredient: ingredient,
                        measure: measure?.trim() || ''
                    });
                }
            }
            return ingredients;
    };

    
    // Handle loading, error, empty states FIRST
    if (loading) {
        return (
            <div className={styles['loading-container']}>
                <LoadingSpinner />
            </div>
        );
    }

    if (error || !recipe) {
        return <EmptyState />;
    }

    // runs only after we have confirmed the loading is not in progress and there is no error and recipe data is available
    const ingredientsList = getIngredients(recipe);
    
    // Debug: Log the entire recipe
    console.log('Full recipe object:', recipe);
    console.log('First ingredient field:', recipe.strIngredient1);
    console.log('First measure field:', recipe.strMeasure1);


    return (
        <div className={styles['detail-page']}>
            <BackButton />
            
            <h1 className={styles['detail-title']}>{recipe.strMeal}</h1>
            
            <div className={styles['detail-meta']}>
                <span className={styles['category-chip']}>{recipe.strCategory}</span>
                <span className={styles['area-chip']}>{recipe.strArea}</span>
            </div>
            
            <div className={styles['content-grid']}>
                {/* Left Column - Image and Ingredients */}
                <div className={styles['left-column']}>
                    <div className={styles['detail-image-container']}>
                        <img 
                            src={recipe.strMealThumb} 
                            alt={recipe.strMeal} 
                            className={styles['detail-image']} 
                        />
                    </div>
                    
                    <div className={styles['ingredients-section']}>
                        <h2 className={styles['section-heading']}>Ingredients</h2>
                        <div className={styles['ingredients-grid']}>
                            {ingredientsList.map((item, index) => (
                                <div key={index} className={styles['ingredient-item']}>
                                    <span className={styles['ingredient-name']}>{item.ingredient}</span>
                                    <span className={styles['ingredient-measure']}>{item.measure}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                {/* Right Column - Instructions */}
                <div className={styles['right-column']}>
                    <h2 className={styles['section-heading']}>Instructions</h2>
                    <p className={styles['instructions']}>{recipe.strInstructions}</p>
                </div>
            </div>
        </div>
    );
}