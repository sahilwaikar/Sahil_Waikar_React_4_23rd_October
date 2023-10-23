import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Component/Home';
import SingleElement from './Component/SingleElement';
import React from "react";
import ErrorPage from "./Component/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
let MainComponent= () => {
  return (
      <div>
          <Provider store={store}>
              <Home/>
          </Provider>
      </div>
  )
}
const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainComponent/>,
  },
  {
    path: "/posts",
    element: <MainComponent/>,
  },
  {
    path: "/posts/:id",
    element: <SingleElement/>
  },       
  { 
    errorElement: <ErrorPage/>
  }
])
let element = document.getElementById('root');
let root = ReactDOM.createRoot(element);
root.render(<RouterProvider router={mainRouter}/>);
reportWebVitals();
