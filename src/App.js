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
