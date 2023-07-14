import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cart-slice";
import customerSlice from "./customer-slice";
import storeSlice from "./store-slice";
import loadingSlice from "./loading-slice";


const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        customer: customerSlice.reducer,
        store: storeSlice.reducer,
        loading: loadingSlice.reducer,
    },
});

export default store;