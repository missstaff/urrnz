import { createSlice } from "@reduxjs/toolkit";
import { COLORS } from "../config/constants";


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
                    color: COLORS[2],
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
            localStorage.setItem("cart", JSON.stringify(state));
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
            localStorage.setItem("cart", JSON.stringify(state));
        },

        setItemColor(state, action) {
            const { id, color } = action.payload;
            const existingItem = state.items.find(item => item.cid === id);
            existingItem.color = color;
            localStorage.setItem("cart", JSON.stringify(state));
        },

        setShipping(state, action) {
            state.shipping = action.payload;
            localStorage.setItem("cart", JSON.stringify(state));
        },

        setTaxRate(state, action) {
            state.taxRate = action.payload;
            localStorage.setItem("cart", JSON.stringify(state));
        },

        replaceCart(state, action) {
            const cart = action.payload;
            state.items = cart?.items ?? [];
            state.shipping = cart?.shipping ?? {};
            state.subTotal = cart?.subTotal ?? 0;
            state.taxRate = cart?.taxRate ?? 0;
            state.totalQuantity = cart?.totalQuantity ?? 0;
        },

        clearCart(state) {
            localStorage.removeItem("cart");
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
