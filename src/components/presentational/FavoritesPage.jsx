import { useNavigate } from 'react-router-dom';
import RecipeGrid from './RecipeGrid.jsx';
import EmptyState from '../container/EmptyState.jsx';
import styles from './FavoritesPage.module.css';

import BackButton from './BackButton.jsx';

export default function FavoritesPage({ recipes }) {

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); // Go back to previous page
    };

    if (!recipes || recipes.length === 0) {
        return (
            <div className={styles['favorites-page']}>
                <h1 className={styles['page-title']}>Your Favorites</h1>
                <EmptyState />
            </div>
        );
    }

    return (
        <div className={styles['favorites-page']}>
            <BackButton />
            <h1 className={styles['page-title']}>Your Favorites</h1>
            <RecipeGrid recipes={recipes} />
        </div>
    );
}