import { cartActions } from "./cart-slice";
import { toast } from "react-toastify";


export const addToCartHandler = (item) => {
    return async (dispatch) => {
        try {
            dispatch(cartActions.addItemToCart(item));
        } catch (error) {
            console.log(`Failed to add an item to the cart!\n${error.message}\n${error.stack}`);
            toast.error("Failed to add item to cart please try again.",
            {
                toastId: "error-adding-cart-item",
                autoClose: 5000,
                position: "top-center",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };
};


export const removeFromCartHandler = (id) => {
    return async (dispatch) => {
        try {
            dispatch(cartActions.removeItemFromCart(id));
        } catch (error) {
            console.log(`Failed to remove an item rom the cart!\n${error.message}\n${error.stack}`);
            toast.error("Failed to remove item to cart please try again.",
            {
                toastId: "error-removing-cart-item",
                autoClose: 5000,
                position: "top-center",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };
};


export const setColorHandler = (id, color) => {
    return async (dispatch) => {
        try {
            dispatch(cartActions.setItemColor({ id, color }));
        } catch (error) {
            console.log(`Failed to set item color!\n${error.message}\n${error.stack}`);
            toast.error("Failed to set item color please try again.",
            {
                toastId: "error-setting-color-option",
                autoClose: 5000,
                position: "top-center",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };
};

export const setShippingOptionHandler = (option) => {
    return async (dispatch) => {
        try {
            dispatch(cartActions.setShipping(option));
        } catch (error) {
            Error(`Failed to set shipping option!\n${error.message}\n${error.stack}`);
            toast.error("FFailed to set shipping option please try again.",
            {
                toastId: "error-setting-shipping-option",
                autoClose: 5000,
                position: "top-center",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };
};

export const setTaxRateHandler = (rate) => {
    return async (dispatch) => {
        try {
            dispatch(cartActions.setTaxRate(rate));
        } catch (error) {
            console.log(`Failed to set tax rate!\n${error.message}\n${error.stack}`);
        }
    };
};

export const clearCartHandler = () => {
    return async (dispatch) => {
        try {
            dispatch(cartActions.clearCart());
        } catch (error) {
            console.log(`Failed to clear cart!\n${error.message}\n${error.stack}`);
        }
    };
};

export const replaceCartHandler = (cart) => {
    return async (dispatch) => {
        try {
            dispatch(cartActions.replaceCart(cart));
        } catch (error) {
            console.log(`Failed to replace cart!\n${error.message}\n${error.stack}`);
        }
    };
};

export const setItemInscriptionHandler = (id, inscription) => {
    return async (dispatch) => {
        try {
            dispatch(cartActions.setItemInscription({ id, inscription }));
        } catch (error) {
            console.log(`Failed to set item inscription!\n${error.message}\n${error.stack}`);
        }
    };
}