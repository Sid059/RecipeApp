import styles from './LoadingSpinner.module.css';
export default function LoadingSpinner() {
    return (
        <div className={styles['spinner-container']} role='status' aria-label='Loading content, please wait'>
            <div className={styles['loading-spinner']}></div>
        </div>
    )
}