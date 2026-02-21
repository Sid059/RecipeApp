import { useNavigate } from 'react-router-dom';
import EmptyStatePresentational from '../presentational/EmptyStatePresentational';

export default function EmptyState({ 
    message = 'Something went wrong.', 
    icon = '/NotFoundIcon.png', 
    description = 'The page you are looking for does not exist or an error occurred.',
    actionType = 'home'
    }) {

    const navigate = useNavigate();

    // All possible actions in a object
    const actionConfig = {
        home: {
            text: 'Go Home',
            action: () => navigate('/')
        },
        recipes: {
            text: 'Browse Recipes',
            action: () => navigate('/recipes')
        },
        favorites: {
            text: 'Go to Favorites',
            action: () => navigate('/favorites')
        }
    };

    // Get the config based on actionType
    let config;

    if (typeof actionType === 'string' && actionConfig[actionType]) {
        config = actionConfig[actionType];
    } 
    else if (typeof actionType === 'object') {
        config = {
            text: actionType.buttonText || 'Go Back',
            action: () => navigate(actionType.path)
        };
    } 
    else {
        config = actionConfig.home;
    }

    return (
       <EmptyStatePresentational 
            icon={icon}
            message={message}
            description={description}
            onAction={config.action}
            buttonText={config.text}
       />
    )
}