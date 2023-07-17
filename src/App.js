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


import ReactGA from 'react-ga';
const TRACKING_ID = "G-8ST98TVJ83"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
    dispatch(fetchOrderTemplate());
    dispatch(fetchChatTemplate());
  }, [dispatch]);


  return (
    <RouterProvider router={router} />
  );
};

export default App;
