import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import store from './components/redux-toolkit/store.js';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Productinfo from './components/Productinfo.jsx'; // Ensure file name casing is correct
import Cart from './components/Cart.jsx';
import Display from './components/dISPLAY.JSX';
import Navbar from './components/Navbar.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
     <App></App>
    </Provider>
  </StrictMode>
);
