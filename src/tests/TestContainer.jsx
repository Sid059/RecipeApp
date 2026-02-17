import RecipeCard from '../components/presentational/RecipeCard.jsx';

// Sample recipe data matching TheMealDB format
const sampleRecipe = {
    idMeal: "52772",
    strMeal: "Chicken Handi",
    strCategory: "Chicken",
    strArea: "Indian",
    strMealThumb: "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg"
};

export default function TestContainer() {
    const handleCardClick = () => {
        console.log('Card clicked:', sampleRecipe.strMeal);
    };

    const handleFavoriteClick = (e) => {
        e.stopPropagation();
        console.log('Favorite toggled for:', sampleRecipe.strMeal);
        // We'll add actual favorite logic later
    };

    return (
        <div style={{ 
            padding: '2rem',
            maxWidth: '400px',
            margin: '0 auto',
            backgroundColor: '#F5F5F0',
            minHeight: '100vh'
        }}>
            <h2 style={{ color: '#2C3E2F', marginBottom: '2rem' }}>
                Testing Recipe Card
            </h2>
            
            <RecipeCard 
                recipe={sampleRecipe}
                onClick={handleCardClick}
                isFavorite={true}
            />

            <div style={{ marginTop: '2rem' }}>
                <h3 style={{ color: '#2C3E2F' }}>Checklist:</h3>
                <ul style={{ color: '#5D6D5D', lineHeight: '2' }}>
                    <li>✓ Card should have white background</li>
                    <li>✓ Image should load from TheMealDB</li>
                    <li>✓ Title: "Chicken Handi" in dark green</li>
                    <li>✓ Category chip: "Chicken" with beige background</li>
                    <li>✓ Heart icon should be empty (not filled)</li>
                    <li>✓ Hover effects: card lifts, image zooms</li>
                    <li>✓ Click card → console shows "Card clicked"</li>
                </ul>
            </div>
        </div>
    );
}