import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Root from './routes/root';

import {
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />
  },
  {
    path: '/game',
    element: <App />
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);