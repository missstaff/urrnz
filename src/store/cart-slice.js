import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        shipping: {},
        subTotal: 0,
        taxRate: 0,
        totalQuantity: 0,
    },
    reducers: {
        addItemToCart(state, action) {

            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id && item.cid === newItem.cid);

            if (!existingItem) {
                state.items.push({
                    cid: state.items.length + 1,
                    description: newItem.description,
                    id: newItem.zid,
                    image: newItem.images.lg,
                    isTaxable: true,
                    name: newItem.name,
                    price: newItem.price,
                    quantity: 1,
                    sku8: newItem.sku8,
                    totalPrice: newItem.price,
                });
            }
            else {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            }
            state.totalQuantity++;
            state.subTotal += newItem.price;
        },

        removeItemFromCart(state, action) {

            const id = action.payload;
            const existingItem = state.items.find(item => item.cid === id);

            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.cid !== id);
            }
            else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }

            state.totalQuantity--;
            state.subTotal -= existingItem.price;
        },

        setItemColor(state, action) {
            const { id, color } = action.payload;
            const existingItem = state.items.find(item => item.cid === id);
            existingItem.color = color;
        },

        setShipping(state, action) {
            state.shipping = action.payload;
        },

        setTaxRate(state, action) {
            state.taxRate = action.payload;
        },

        clearCart(state) {
            state.items = [];
            state.shipping = {};
            state.subTotal = 0;
            state.totalQuantity = 0;
            state.taxRate = 0;
            state.totalQuantity = 0;
        },
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
