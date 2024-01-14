import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, createRoutesFromElements, Route ,RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import ProductScreen from './pages/ProductScreen';
import { Provider } from 'react-redux';
import store from './store';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<App />} >
      <Route exact path = '/' element = {<Home />} />
      <Route path = '/product/:productId' element = {<ProductScreen />} />
      <Route path  = '/:id' element = {<Home />} />
      <Route path  = '/seller/:id' element  = {<Home />} />
    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store = {store}>
     <RouterProvider router = {router} />
    </Provider>
  </React.StrictMode>
);


