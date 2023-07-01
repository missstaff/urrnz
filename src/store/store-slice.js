import { createSlice } from "@reduxjs/toolkit";


const storeSlice = createSlice({
    name: 'store',
    initialState: {
        products: [],
        categories: [],
        shippingOptions: [],
    },
    reducers: {
        setProducts(state, action) {
            const fetchedProducts = action.payload.response;
            const filteredProducts = fetchedProducts.filter(product => product.category !== "Test" && product.category !== "Services");
            state.products = filteredProducts;
        },
        setCategories(state, action) {
            const fetchedProducts = action.payload.response;
            const filteredCategories = fetchedProducts.filter(product => product.category !== "Test" && product.category !== "Services");
            const categories = filteredCategories.map(product => product.category); 
            categories.unshift("All")
            const uniqueCategories = [...new Set(categories)];
            state.categories = uniqueCategories;
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
    }
});

export const storeActions = storeSlice.actions;
export default storeSlice;
