import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';


export default function Header(){

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src="/cookbook.png" alt="Recipe Book Logo" />
            </div>
            <nav className={styles['nav-links']}>
                <NavLink to="/" className={({isActive}) => isActive ? styles.active : ''}>Home</NavLink>
                <NavLink to="/recipes" className={({isActive}) => isActive ? styles.active : ''}>Recipes</NavLink>
                <NavLink to="/favorites" className={({isActive}) => isActive ? styles.active : ''}>Favorites</NavLink>
            </nav>
        </header>
    );
}