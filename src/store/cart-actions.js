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


export const removeFromCartHandler = (id) => {
    return async (dispatch) => {
        try {
            console.log("cart", id);
            dispatch(cartActions.removeItemFromCart(id));
        } catch (error) {
            console.log(`Failed to fetch products!\n${error.message}\n${error.stack}`);
        }
    };
}