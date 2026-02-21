import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch.js';
import useDebounce from '../../hooks/useDebounce.js';
import RecipesPage from '../presentational/RecipesPage.jsx'

export default function RecipesContainer() {

    const [searchParams , setSearchParams] = useSearchParams();
    // console.log('URL params:', Object.fromEntries(searchParams));
    const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
    const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');
    const [selectedCuisine, setSelectedCuisine] = useState(searchParams.get('cuisine') || '');
    // console.log('Search term:', searchTerm);
    // console.log('Selected category:', selectedCategory);

    const debouncedSearch = useDebounce(searchTerm, 1000);

    const getApiUrl = () => {
    if (debouncedSearch) {
        return `https://www.themealdb.com/api/json/v1/1/search.php?s=${debouncedSearch}`;
    }
    if (selectedCategory) {
        return `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`;
    }
    if (selectedCuisine) {  
        return `https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedCuisine}`;
    }
    // Default: show all recipes on empty search
    return 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    };


    const { data, loading, error } = useFetch(getApiUrl());
    const recipes = data?.meals || [];
    console.log('Fetched recipes:', recipes.length);

    useEffect(() => {
        const params = {};
        //shorthand for adding property to object
        if (searchTerm) params.search = searchTerm;
        if (selectedCategory) params.category = selectedCategory;
        if (selectedCuisine) params.cuisine = selectedCuisine;

        setSearchParams(params);
    }, [searchTerm, selectedCategory, selectedCuisine, setSearchParams]);


    const handleSearchChange = (term) => {
        setSearchTerm(term);
        // Clear other filters when searching
        setSelectedCategory('');
        setSelectedCuisine('');
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        // Clear other filters
        setSearchTerm('');
        setSelectedCuisine('');
    };

    const handleCuisineChange = (cuisine) => {
        setSelectedCuisine(cuisine);
        // Clear other filters
        setSearchTerm('');
        setSelectedCategory('');
    };

    const handleClearFilters = () => {
        setSearchTerm('');
        setSelectedCategory('');
        setSelectedCuisine('');
    };

    return (
        <RecipesPage
            recipes={recipes}
            loading={loading}
            error={error}
            searchTerm={searchTerm}
            selectedCategory={selectedCategory}
            selectedCuisine={selectedCuisine}  
            onSearchChange={handleSearchChange}
            onCategoryChange={handleCategoryChange}
            onCuisineChange={handleCuisineChange} 
            onClearFilters={handleClearFilters}
        />
    );
}