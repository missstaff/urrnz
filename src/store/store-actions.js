import { storeActions } from "./store-slice";
import { FETCH_ALL_PRODUCTS } from "../config/constants";


export const fetchProducts = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(FETCH_ALL_PRODUCTS);
            const data = await response.json();

            dispatch(storeActions.setProducts(data));
            dispatch(storeActions.setCategories(data));
            dispatch(storeActions.setShippingOptions(data));
        } catch (error) {
            console.log(`Failed to fetch products!\n${error.message}\n${error.stack}`);
        }
    };
};



