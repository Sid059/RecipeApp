import styles from './EmptyState.module.css';

export default function EmptyStatePresentational({ icon, message, description, onAction, buttonText = 'Go Home' }) {
    return (
        <div className={styles['empty-state']} role='alert'>
            <img src={icon} alt="Not-found" className={styles['empty-state-icon']} />
            <h2 className={styles['empty-state-message']}>{message}</h2>
            {description && <p className={styles['empty-state-description']}>{description}</p>}
            <button onClick={onAction} className={styles['empty-state-button']}>{buttonText}</button>
        </div>
    )
}