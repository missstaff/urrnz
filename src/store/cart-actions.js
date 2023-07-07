import { cartActions } from "./cart-slice";


export const addToCartHandler = (item) => {
    return async (dispatch) => {
        try {
            dispatch(cartActions.addItemToCart(item));
        } catch (error) {
            console.log(`Failed to add an item to the cart!\n${error.message}\n${error.stack}`);
        }
    };
};


export const removeFromCartHandler = (id) => {
    return async (dispatch) => {
        try {
            dispatch(cartActions.removeItemFromCart(id));
        } catch (error) {
            console.log(`Failed to remove an item rom the cart!\n${error.message}\n${error.stack}`);
        }
    };
};

export const setColorHandler = (id, color) => {
    return async (dispatch) => {
        try {
            console.log("cart", id, color);
            dispatch(cartActions.setItemColor({id, color}));
        } catch (error) {
            console.log(`Failed to set item color!\n${error.message}\n${error.stack}`);
        }
    };
}