import { useState, useEffect } from 'react';
import HomePage from '../presentational/HomePage';

export default function HomeContainer() {
    const [featuredRecipes, setFeaturedRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchFeaturedRecipes() {
            
        }
    }, []);

    return (
        <HomePage />
    )
}