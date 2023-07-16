import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchProducts, fetchCategories, fetchChatTemplate, fetchOrderTemplate } from "./store/store-actions";
import { router } from "./hooks/useRoutes";


function App() {

  const dispatch = useDispatch();


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
