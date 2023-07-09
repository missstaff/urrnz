import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        shipping: {},
        taxRate: 0,
        totalQuantity: 0,
        subTotal: 0,
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id && item.cid === newItem.cid);
            
            if (!existingItem) {
                state.items.push({
                    id: newItem.zid,
                    name: newItem.name,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    image: newItem.images.lg,
                    isTaxable: true,
                    sku8: newItem.sku8,
                    cid: state.items.length + 1,
                    description: newItem.description,

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
            console.log("shipping", action.payload)
            state.shipping = action.payload;
        },

        setTaxRate(state, action) {
            console.log("setTaxRate", action.payload)
            state.taxRate = action.payload;
        },

        clearCart(state) {
            state.items = [];
            state.totalQuantity = 0;
            state.subTotal = 0;
            state.shipping = {};
        },
    },
});



export const cartActions = cartSlice.actions;
export default cartSlice;
