import { useState, useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import HomePage from '../presentational/HomePage';

export default function HomeContainer() {

    const RECIPES_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

    const { data, loading, error } = useFetch(RECIPES_URL);

    const featuredRecipes = data?.meals || [];  //if data is null or meals is undefined, default to an empty array

    console.log('Featured recipes:', featuredRecipes);

    return (
        <HomePage 
            featuredRecipes={featuredRecipes}
            loading={loading}
            error={error}
        />
    )
}