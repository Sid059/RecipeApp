import { createContext, useContext, useMemo } from "react";
import useLocalStorage from '../hooks/useLocalStorage.js';

const FavoritesContext = createContext();   //its always outside of the provider component to avoid creating a new context on every render of the provider

export function FavoriteProvider({ children }) {

    const [favorites, setFavorites] = useLocalStorage('favorites', []);

    // toggleFavorite function to add or remove a recipe ID from the favorites list
    const toggleFavorite = (recipe) => {
        setFavorites(prev => {
            const exists = prev.some(fav => fav.idMeal === recipe.idMeal);
            if (exists) {
                return prev.filter(fav => fav.idMeal !== recipe.idMeal);
            } else {
                return [...prev, recipe];
            }
        });
    }

    const isFavorite = recipeId => favorites.some(fav => fav.idMeal === recipeId);

    const value = useMemo(() => ({
        favorites,
        toggleFavorite,
        isFavorite
    }), [favorites]);   //only re-create the context value when favorites change

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    );
}

// Custom hook for using the context
export function useFavorites() {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error('useFavorites must be used within a FavoritesProvider');
    }
    return context;     //returns { favorites, toggleFavorite, isFavorite }
}