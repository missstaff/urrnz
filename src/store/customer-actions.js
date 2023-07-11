import { customerActions } from "./customer-slice";


export const setCustomerHandler = (customer) => {
    return async (dispatch) => {
        try {
            dispatch(customerActions.setCustomer(customer));
        } catch (error) {
            console.log(`Failed to set customer!\n${error.message}\n${error.stack}`);
            alert("Failed to set shipping details please try again.");
        }
    };
};

export const updateShippingSameAsBillingHandler = (isSame) => {
    return async (dispatch) => {
        try {
            dispatch(customerActions.setShippingSameAsBilling(isSame));
        } catch (error) {
            console.log(`Failed to update shipping same as billing!\n${error.message}\n${error.stack}`);
            alert("Failed to set billing address please try again.");
        }
    };
};

export const setCardDetailsHandler = (cardDetails) => {
    return async (dispatch) => {
        try {
            dispatch(customerActions.setCardDetails(cardDetails));
        } catch (error) {
            console.log(`Failed to set card details!\n${error.message}\n${error.stack}`);
            alert("Failed to set payment details please try again.");
        }
    };
};

