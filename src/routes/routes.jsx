import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Root from '../components/presentational/Root.jsx';
import HomeContainer from '../components/container/HomeContainer.jsx';
import RecipesContainer from '../components/container/RecipesContainer.jsx';
import RecipeDetailContainer from '../components/container/RecipeDetailContainer.jsx';
import FavoritesContainer from '../components/container/FavoritesContainer.jsx';
import AddRecipeContainer from '../components/container/AddRecipeContainer.jsx';

const routes = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Root />}>
        <Route index element={<HomeContainer />} />
        <Route path='recipes' element={<RecipesContainer />} />
        <Route path='recipes/:id' element={<RecipeDetailContainer />} />
        <Route path='favorites' element={<FavoritesContainer />} />
        <Route path='add-recipe' element={<AddRecipeContainer />} />
    </Route>
));

export { routes };