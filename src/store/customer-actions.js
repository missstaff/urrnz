import { customerActions } from "./customer-slice";
import { toast } from "react-toastify";


export const setCustomerHandler = (customer) => {
    return async (dispatch) => {
        try {
            dispatch(customerActions.setCustomer(customer));
        } catch (error) {
            console.warn(`Failed to set customer!\n${error.message}\n${error.stack}`);
            toast.error("Failed to set shipping details please try again.",
            {
                toastId: "error-setting-shipping-details",
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

export const updateShippingSameAsBillingHandler = (isSame) => {
    return async (dispatch) => {
        try {
            dispatch(customerActions.setShippingSameAsBilling(isSame));
        } catch (error) {
            console.warn(`Failed to update shipping same as billing!\n${error.message}\n${error.stack}`);
            toast.error("Failed to set billing address please try again.",
            {
                toastId: "error-setting-billing-details",
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

export const setCardDetailsHandler = (cardDetails) => {
    return async (dispatch) => {
        try {
            dispatch(customerActions.setCardDetails(cardDetails));
        } catch (error) {
            console.warn(`Failed to set card details!\n${error.message}\n${error.stack}`);
            toast.error("Failed to set payment details please try again.",
            {
                toastId: "error-setting-payment-details",
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

export const clearCustomerHandler = () => {
    return async (dispatch) => {
        try {
            dispatch(customerActions.clearCustomer());
        } catch (error) {
            console.warn(`Failed to clear customer!\n${error.message}\n${error.stack}`);
        }
    };
};

