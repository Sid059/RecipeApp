import { useNavigate } from 'react-router-dom';
import EmptyStatePresentational from '../presentational/EmptyStatePresentational';

export default function EmptyState(){
    const navigate = useNavigate();

    const handleEmptyStateAction = () => {
        navigate('/');
    }

    return (
       <EmptyStatePresentational 
        icon='/NotFoundIcon.png'
        message='Something went wrong.'
        description='The page you are looking for does not exist or an error occurred.'
        onAction={handleEmptyStateAction}
        buttonText='Go Home'
       />
    )
}