/**
 * This module defines the router configuration for the application.
 * It uses react-router-dom to create the routes and components.
 */

import { createBrowserRouter } from "react-router-dom";

import Cart from "../pages/Cart";
import Genres from "../pages/Genres";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Products from "../pages/Gallery";
import RootLayout from "../pages/RootLayout";
import ThankYou from "../pages/ThankYou";
import LandingPage from "../pages/LandingPage";

/**
 * The router configuration object.
 * It defines the routes and their corresponding components.
 *
 * @type {Object[]}
 */
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "cart", element: <Cart /> },
      // { path: "genres", element: <Genres /> },
      { path: "checkout", element: <Checkout /> },
      { path: "contact", element: <Contact /> },
      { path: "products/:category", element: <Products /> },
      { path: "product/:id", element: <Product /> },
      { path: "thank-you", element: <ThankYou /> },
      { path: "landing-page", element: <LandingPage /> },
      { path: "*", element: <Error /> },
    ],
  },
]);
