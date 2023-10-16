import { createSlice } from "@reduxjs/toolkit";
import { ALL } from "../config/constants";


const storeSlice = createSlice({
    name: "store",
    initialState: {
        categories: [],
        category: "All",
        chatObjectTemplate: {},
        orderTemplate: {},
        products: [],
        shippingOptions: [],
    },
    reducers: {
        setProducts(state, action) {
            const fetchedProducts = action.payload.response;
            const filteredProducts = fetchedProducts.filter(product => product.category !== "Test" && product.category !== "Services");
            state.products = filteredProducts;
        },
        setCategories(state, action) {
            const fetchedCategories = action.payload.response;
            const filteredCategories = fetchedCategories.filter(category => category.name !== "Test" && category.name !== "Services");
            filteredCategories.unshift({ name: ALL });
            state.categories = filteredCategories;
        },
        setShippingOptions(state, action) {
            const fetchedProducts = action.payload.response;
            const filteredShippingOptions = fetchedProducts.filter(product => product.category === "Services");
            const mappedShippingOptions = filteredShippingOptions.map(option => ({
                isTaxable: false,
                name: option.name,
                price: option.price,
                sku8: option.sku8,
            }));
            state.shippingOptions = mappedShippingOptions;
        },
        setCategory(state, action) {
            state.category = action.payload;
        },

        setOrderObject(state, action) {
            const orderTemplate = action.payload.response.order;
            state.orderTemplate = orderTemplate;
        },

        setChatObject(state, action) {
            const chatObjectTemplate = action.payload.response.contact;
            state.chatObjectTemplate = chatObjectTemplate;
        },
    }
});

export const storeActions = storeSlice.actions;
export default storeSlice;
