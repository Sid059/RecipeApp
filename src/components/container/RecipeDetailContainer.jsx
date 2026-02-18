import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch.js';
import RecipeDetailPage from '../presentational/RecipeDetailPage.jsx';

export default function RecipeDetailContainer(){

    const navigate = useNavigate();

    const handleGoback = () => {
        navigate(-1);   //go back to precvious page in history stack,
    }

    const { id } = useParams();

    const RECIPE_URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
    
    const { data, loading, error } = useFetch(`${RECIPE_URL}${id}`);

    const recipe = data?.meals?.[0] || [];  //.meals?.[0] beacause the API returns an array of meals but with only one meal object when we search by ID.

    console.log('Full data:', data);
    console.log('Extracted recipe:', recipe);

    return (
        <RecipeDetailPage
            recipe={recipe}
            loading={loading}
            error={error}
            onGoBack={handleGoback}
        />
    )
}