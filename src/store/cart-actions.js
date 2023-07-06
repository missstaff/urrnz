import { cartActions } from "./cart-slice";


export const addToCartHandler = (item) => {
    return async (dispatch) => {
        try {
            console.log("cart", item);
            dispatch(cartActions.addItemToCart(item));
        } catch (error) {
            console.log(`Failed to fetch products!\n${error.message}\n${error.stack}`);
        }
    };
};