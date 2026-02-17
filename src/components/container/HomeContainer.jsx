import useFetch from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import HomePage from '../presentational/HomePage';
import { cuisines } from '../../data/cuisines';

export default function HomeContainer() {
    const navigate = useNavigate();

    const handleCuisineClick = (cuisineName) => {
        navigate(`/recipes?cuisine=${cuisineName}`);
    }

    const RECIPES_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

    const { data, loading, error } = useFetch(RECIPES_URL);

    const featuredRecipes = data?.meals || [];  //if data is null or meals is undefined, default to an empty array

    //console.log('Featured recipes:', featuredRecipes);

    return (
        <HomePage 
            featuredRecipes={featuredRecipes}
            loading={loading}
            error={error}
            cuisines={cuisines}
            onCuisineClick={handleCuisineClick}
        />
    )
}