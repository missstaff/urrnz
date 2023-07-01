import {createBrowserRouter } from 'react-router-dom';

import Cart from '../pages/Cart';
import Categories from '../pages/Categories';
import Checkout from '../pages/Checkout';
import Confirmation from '../pages/Confirmation';
import Contact from '../pages/Contact';
import Error from '../pages/Error';
import Home from '../pages/Home';
import Product from '../pages/Product';
import Products from '../pages/Products';
import RootLayout from '../pages/RootLayout';
import Shipping from '../pages/Shipping';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: 'cart', element: <Cart/> },
      { path: 'categories', element: <Categories /> },
      { path: 'checkout', element: <Checkout /> },
      { path: 'confirmation', element: <Confirmation /> },
      { path: 'contact', element: <Contact /> },
      { path: 'product/:id', element: <Product /> },
      { path: 'products', element: <Products /> },
      { path: 'shipping', element: <Shipping /> },
    ],
  },
]);
