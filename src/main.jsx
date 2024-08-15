import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './index.css';
import App from './routes/App.jsx';
import Bag from "./routes/Bag.jsx";
import Home from './routes/Home.jsx';
import myntraStore from './store/index.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/bag",
        element: <Bag/>
      },
      
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
  <RouterProvider router={router}></RouterProvider>
  </Provider>
  </React.StrictMode>,
);
