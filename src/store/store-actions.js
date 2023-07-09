import { storeActions } from "./store-slice";
import { FETCH_ALL_PRODUCTS, FETCH_TEMPLATE_CHAT, FETCH_TEMPLATE_ORDER, } from "../config/constants";


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

export const fetchOrderTemplate = () => {
    return async (dispatch) => {
        try{
            const response = await fetch(FETCH_TEMPLATE_ORDER);
            const data = await response.json();
            // console.log("order", data);
            dispatch(storeActions.setOrderObject(data));
        }catch(error){
            console.log(`Failed to fetch order template!\n${error.message}\n${error.stack}`);
        }
    };
};

export const fetchChatTemplate = () => {
    return async (dispatch) => {
        try{
            const response = await fetch(FETCH_TEMPLATE_CHAT);
            const data = await response.json();
            dispatch(storeActions.setChatObject(data));
        }catch(error){
            console.log(`Failed to fetch chat template!\n${error.message}\n${error.stack}`);
        }
    };
}



