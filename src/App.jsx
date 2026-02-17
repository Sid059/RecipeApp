import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes.jsx';
// import TestContainer from './tests/TestContainer.jsx';

import './App.css';

function App() {
  return (
    <>
      <RouterProvider router={routes} />
      {/* <TestContainer /> */}
    </>
  );
}

export default App;
