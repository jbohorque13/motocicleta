import React from 'react';
import ReactDOM from 'react-dom/client';
import Game from './screens/Game/Game';
import Home from './screens/Home/Home';

import {
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/game',
    element: <Game />
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);