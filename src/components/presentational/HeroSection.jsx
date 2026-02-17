import styles from './HeroSection.module.css';

export default function HeroSection({onExploreClick}) {
    return (
        <div className={styles['hero-container']}>
            <h1 className={styles['hero-title']} aria-label='Title'>Discover Delicious Recipes</h1>
            <p className={styles['hero-description']} aria-label='Description of the webapp'>
                Explore recipes from around the world, save your favorites, and share your culinary creations with friends!
            </p>
            <button className={styles['navigate-recipes-btn']}
                onClick={onExploreClick}
                aria-label='Explore button to navigate to recipes page'> 
                Explore Recipes
            </button>
        </div>
    )
}