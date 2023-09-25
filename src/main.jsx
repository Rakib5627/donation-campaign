import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Donation from './components/Donation/Donation.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import Root from './components/Root/Root.jsx';
import CardDetails from './components/CardDetails/CardDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      }, 
      {
        path: '/donation', 
        element: <Donation></Donation> ,
      },
      {
        path: '/statistics', 
        element: <Statistics></Statistics> ,
      },
      {
        path: '/details/:id', 
        element: <CardDetails></CardDetails> ,
        loader : () => fetch(`/donate.json`),
      }
    ]
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
