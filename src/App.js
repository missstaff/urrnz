import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";
import { router } from "./hooks/useRoutes";
import {
  fetchCategories,
  fetchChatTemplate,
  fetchOrderTemplate,
  fetchProducts,
} from "./store/store-actions";
import { HelmetProvider } from 'react-helmet-async';
import { GOOGLE_TRACKING_ID } from "./config/constants.js";
import ReactGA from "react-ga";
ReactGA.initialize(GOOGLE_TRACKING_ID);



/**
 * The main component of the application.
 * @returns {JSX.Element} The rendered App component.
 */
function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
    dispatch(fetchOrderTemplate());
    dispatch(fetchChatTemplate());
    ReactGA.pageview(window.location.pathname + window.location.search);
    ReactGA.event({
      category: "User",
      action: "User visited the website",
    });
  }, []);

  const helmetContext = {
    title: "Urrnz Custom 3D Printed Keepsakes",
    description: "Urrnz Custom 3D Printed Keepsakes homepage.",
    name: "Urrnz.",
    type: "website",
    imageUrl: "../assets/logo192.png",
  };

  return (
    <HelmetProvider context={helmetContext}>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
};

export default App;
