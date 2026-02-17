import RecipeGrid from '../components/presentational/RecipeGrid.jsx';
import HeroSection from '../components/presentational/HeroSection.jsx';

// Sample recipe data array matching TheMealDB format
const sampleRecipes = [
    {
        idMeal: "52772",
        strMeal: "Chicken Handi",
        strCategory: "Chicken",
        strArea: "Indian",
        strMealThumb: "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg"
    },
    {
        idMeal: "52894",
        strMeal: "Beef Dumpling Stew",
        strCategory: "Beef",
        strArea: "British",
        strMealThumb: "https://www.themealdb.com/images/media/meals/uyqutq1592775088.jpg"
    },
    {
        idMeal: "52959",
        strMeal: "Baked Salmon with Fennel & Tomatoes",
        strCategory: "Seafood",
        strArea: "British",
        strMealThumb: "https://www.themealdb.com/images/media/meals/1548772327.jpg"
    },
    {
        idMeal: "52878",
        strMeal: "Beef and Oyster pie",
        strCategory: "Beef",
        strArea: "British",
        strMealThumb: "https://www.themealdb.com/images/media/meals/wrssvt1511556563.jpg"
    },
    {
        idMeal: "52795",
        strMeal: "Chicken Congee",
        strCategory: "Chicken",
        strArea: "Chinese",
        strMealThumb: "https://www.themealdb.com/images/media/meals/1529446352.jpg"
    },
    {
        idMeal: "52831",
        strMeal: "Chicken Karaage",
        strCategory: "Chicken",
        strArea: "Japanese",
        strMealThumb: "https://www.themealdb.com/images/media/meals/tyywru1501780373.jpg"
    }
];

export default function TestContainer() {
    // Mock favorites array - first two recipes are favorites
    const mockFavorites = ["52772", "52894"];

    const handleRecipeClick = (recipe) => {
        console.log('Recipe clicked:', recipe.strMeal, 'ID:', recipe.idMeal);
    };

    const handleFavoriteToggle = (recipeId) => {
        console.log('Favorite toggled for ID:', recipeId);
        console.log('Current favorites:', mockFavorites);
        console.log('Will add/remove:', recipeId);
    };

    return (
        <div style={{ 
            padding: '2rem',
            maxWidth: '1200px',
            margin: '0 auto',
            backgroundColor: '#F5F5F0',
            minHeight: '100vh'
        }}>
            <h2 style={{ 
                color: '#2C3E2F', 
                marginBottom: '1rem',
                fontFamily: 'Montserrat, sans-serif'
            }}>
                Testing Recipe Grid
            </h2>
            
            <p style={{ 
                color: '#5D6D5D', 
                marginBottom: '2rem',
                fontFamily: 'Montserrat, sans-serif'
            }}>
                Showing {sampleRecipes.length} recipes. Favorites: IDs {mockFavorites.join(', ')}
            </p>

            <HeroSection />

            {/* Recipe Grid Component */}
            <RecipeGrid 
                recipes={sampleRecipes}
                favorites={mockFavorites}
                onRecipeClick={handleRecipeClick}
                onFavoriteToggle={handleFavoriteToggle}
            />

            {/* Test Info Section */}
            <div style={{ 
                marginTop: '3rem', 
                padding: '1.5rem',
                backgroundColor: '#E6D8C3',
                borderRadius: '8px',
                fontFamily: 'Montserrat, sans-serif'
            }}>
                <h3 style={{ color: '#2C3E2F', marginBottom: '1rem' }}>
                    Test Checklist:
                </h3>
                <ul style={{ 
                    color: '#5D6D5D', 
                    lineHeight: '2',
                    listStyleType: 'none',
                    padding: 0
                }}>
                    <li>✅ Grid displays 6 cards in responsive layout</li>
                    <li>✅ First two cards have filled hearts (IDs: 52772, 52894)</li>
                    <li>✅ Remaining cards have empty hearts</li>
                    <li>✅ Click card → console shows recipe name and ID</li>
                    <li>✅ Click heart → console shows toggle message</li>
                    <li>✅ Heart click doesn't trigger card click</li>
                    <li>✅ Grid has proper spacing between cards</li>
                    <li>✅ Responsive: resize browser to see columns change</li>
                </ul>
                
                <div style={{ 
                    marginTop: '1rem',
                    padding: '1rem',
                    backgroundColor: '#F5F5F0',
                    borderRadius: '4px'
                }}>
                    <p style={{ color: '#2C3E2F', fontWeight: 600 }}>
                        Console Check:
                    </p>
                    <p style={{ color: '#5D6D5D', fontSize: '0.9rem' }}>
                        Open browser console (F12) to see click events
                    </p>
                </div>
            </div>
        </div>
    );
}