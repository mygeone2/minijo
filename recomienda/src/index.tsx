import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Reviews from './routes/reviews';
import ResponsiveAppBar from './components/Navbar';
import Customization from './routes/customization';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      { 
        path: "/reviews",
        element: <Reviews />
      },
      {
        path: "customization/:id",
        element: <Customization />,
      },
    ]
  }
  
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>   
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
