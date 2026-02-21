import RecipeGrid from './RecipeGrid.jsx';
import EmptyState from '../container/EmptyState.jsx';
import styles from './FavoritesPage.module.css';

import BackButton from './BackButton.jsx';

export default function FavoritesPage({ recipes }) {

    if (!recipes || recipes.length === 0) {
        return (
            <div className={styles['favorites-page']}>
                <h1 className={styles['page-title']}>Your Favorites</h1>
                <EmptyState 
                    message={"Your favorites are empty"}
                    icon={"/empty-folder-icon.png"}
                    description={"You haven't added any recipes to your favorites yet. Start exploring and add some delicious recipes to your collection!"}
                    actionType='recipes'
                />
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