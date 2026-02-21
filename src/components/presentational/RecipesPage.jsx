import SearchBar from './SearchBar.jsx';  // We'll build this next
import FilterBar from './FilterBar.jsx';  // We'll build this next
import RecipeGrid from './RecipeGrid';
import LoadingSpinner from './LoadingSpinner';
import EmptyState from '../container/EmptyState';
import styles from './RecipesPage.module.css';

export default function RecipesPage({
    recipes,
    loading,
    error,
    searchTerm,
    selectedCategory,
    selectedCuisine,
    onSearchChange,
    onCategoryChange,
    onClearFilters
}) {

    const getPageTitle = () => {
        if (selectedCuisine) return `${selectedCuisine} Recipes`;
        if (selectedCategory) return `${selectedCategory} Recipes`;
        if (searchTerm) return `Search Results for "${searchTerm}"`;
        return 'Explore Recipes';
    };

    
    // check if any filter is active
    const hasActiveFilters = !!(searchTerm || selectedCategory || selectedCuisine);


    // Show loading state
    if (loading) {
        return (
            <div className={styles['loading-container']}>
                <LoadingSpinner />
            </div>
        );
    }

    // Show error state
    if (error) {
        return (
            <EmptyState 
                message="Failed to load recipes"
                description={error}
                actionType="home"
            />
        );
    }

    return (
        <div className={styles['recipes-page']}>
            <h1 className={styles['page-title']}>{getPageTitle()}</h1>
            
            <div className={styles['search-section']}>
                <SearchBar 
                    value={searchTerm}
                    onChange={onSearchChange}
                    placeholder="Search recipes..."
                />
                
                <FilterBar 
                    selectedCategory={selectedCategory}
                    onCategoryChange={onCategoryChange}
                    onClearFilters={onClearFilters}
                />
            </div>

            {recipes.length === 0 ? (
                <EmptyState 
                    message="No recipes found"
                    description="Try adjusting your search or filters"
                    actionType={{
                        buttonText: 'Clear Filters',
                        path: '/recipes',
                        action: onClearFilters
                    }}
                />
            ) : (
                <RecipeGrid recipes={recipes} />
            )}
        </div>
    );
}