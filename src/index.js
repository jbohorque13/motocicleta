import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);