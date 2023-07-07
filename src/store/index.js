import { configureStore } from '@reduxjs/toolkit';
import storeSlice from './store-slice';
import cartSlice from './cart-slice';


const store = configureStore({
    reducer: { 
        cart: cartSlice.reducer,
        store: storeSlice.reducer,
     },
});

export default store;