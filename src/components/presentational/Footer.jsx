import styles from './Footer.module.css';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <p className={styles.copyright}>&copy; 2026 Recipe Book App</p>
        </div>
    )
}