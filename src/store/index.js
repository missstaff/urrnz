import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cart-slice";
import customerSlice from "./customer-slice";
import storeSlice from "./store-slice";


const store = configureStore({
    reducer: { 
        cart: cartSlice.reducer,
        customer: customerSlice.reducer,
        store: storeSlice.reducer,
     },
});

export default store;