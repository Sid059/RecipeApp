import HeroSection from "./HeroSection.jsx";
import CategoryPreview from "./CategoryPreview.jsx";
import RecipeGrid from "./RecipeGrid.jsx";
import LoadingSpinner from "./LoadingSpinner.jsx";
import EmptyState from "../container/EmptyState.jsx";
import styles from './HomePage.module.css';

export default function HomePage({ featuredRecipes, loading, error, cuisines, onCuisineClick, onExploreClick}) {

    return (
        <div className={styles["home-page"]}>
            <HeroSection onExploreClick={onExploreClick}/>

            <CategoryPreview
                categories={cuisines}
                onCategoryClick={onCuisineClick}
            />

            <section className={styles['featured-section']}>
                <h2 className={styles['section-title']}>Featured Recipes</h2>

                {loading && (
                    <div className={styles['loading-container']}>
                        <LoadingSpinner />
                    </div>
                )}

                {error && !loading && (
                    <EmptyState />
                )}

                {!loading && !error && featuredRecipes.length === 0 && (
                    <EmptyState />
                )}

                {!loading && !error && featuredRecipes.length > 0 && (
                    <RecipeGrid 
                        recipes={featuredRecipes}
                    />
                )}

            </section>
        </div>
    )
}