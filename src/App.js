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


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
    dispatch(fetchOrderTemplate());
    dispatch(fetchChatTemplate());
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const helmetContext = {};


  return (
    <HelmetProvider context={helmetContext}>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
};

export default App;
