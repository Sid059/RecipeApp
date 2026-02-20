import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes.jsx';
// import TestContainer from './tests/TestContainer.jsx';
import { FavoriteProvider }from './context/FavoritesContext.jsx';

import './App.css';

function App() {
  return (
    <>
      <FavoriteProvider>
        <RouterProvider router={routes} />
        {/* <TestContainer /> */}
      </FavoriteProvider>
    </>
  );
}

export default App;
