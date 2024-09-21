import { Navigate, createBrowserRouter } from 'react-router-dom';
import { App } from './components/app/app';
import { HomePage } from './components/pages/home-page/home-page';

export const router = createBrowserRouter([
  {
    element: <App />,
    path: '/',
    children: [
      { index: true, element: <HomePage /> },
      { path: '*', element: <Navigate to='/' /> },
      /* { path: 'drawing_shapes', element: <DrawingShapes /> }, */
    ],
  },
]);
