import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({ 
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        totalAmount: 0,
        shipping: {},
    },

    reducers: {
        addItemToCart(state, action) {
            console.log("State", state) 
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;
            if (!existingItem) {
                state.items.push({
                    id: newItem.zid,
                    name: newItem.name,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    image: newItem.image,
                    isTaxable: true,
                    sku8: newItem.sku8,
                    
                });
            }
            else {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            }
        },

        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuantity--;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            }
            else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }
        },

        clearCart(state) {
            state.items = [];
            state.totalQuantity = 0;
            state.totalAmount = 0;
            state.shipping = {};
        },

        setShipping(state, action) {
            state.shipping = action.payload;
        },
    },
});



export const cartActions = cartSlice.actions;
export default cartSlice;
