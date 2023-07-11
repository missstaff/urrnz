import { cartActions } from "./cart-slice";


export const addToCartHandler = (item) => {
    return async (dispatch) => {
        try {
            dispatch(cartActions.addItemToCart(item));
        } catch (error) {
            console.log(`Failed to add an item to the cart!\n${error.message}\n${error.stack}`);
            alert("Failed to add item to cart please try again.");
        }
    };
};


export const removeFromCartHandler = (id) => {
    return async (dispatch) => {
        try {
            dispatch(cartActions.removeItemFromCart(id));
        } catch (error) {
            console.log(`Failed to remove an item rom the cart!\n${error.message}\n${error.stack}`);
            alert("Failed to remove item from cart please try again.");
        }
    };
};

export const setColorHandler = (id, color) => {
    return async (dispatch) => {
        try {
            dispatch(cartActions.setItemColor({ id, color }));
        } catch (error) {
            console.log(`Failed to set item color!\n${error.message}\n${error.stack}`);
            alert("Failed to set item color please try again.");
        }
    };
};

export const setShippingOptionHandler = (option) => {
    return async (dispatch) => {
        try {
            dispatch(cartActions.setShipping(option));
        } catch (error) {
            Error(`Failed to set shipping option!\n${error.message}\n${error.stack}`);
            alert("Failed to set shipping option please try again.");
        }
    };
};

export const setTaxRateHandler = (rate) => {
    return async (dispatch) => {
        try {
            dispatch(cartActions.setTaxRate(rate));
        } catch (error) {
            console.log(`Failed to set tax rate!\n${error.message}\n${error.stack}`);
            alert("Failed to get tax rate please confirm your zipcode and try again.");
        }
    };
};