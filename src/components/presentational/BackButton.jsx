import { useNavigate } from 'react-router-dom';
import styles from './BackButton.module.css';

export default function BackButton() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); // Go back to previous page
    };

    return (
        <button className={styles['back-button']} onClick={handleGoBack}>
            &larr; Back
        </button>
    );
}