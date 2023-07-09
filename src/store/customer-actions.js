import { customerActions } from "./customer-slice";


export const setCustomerHandler = (customer) => {
    return async (dispatch) => {
        try {
            dispatch(customerActions.setCustomer(customer));
        } catch (error) {
            console.log(`Failed to set customer!\n${error.message}\n${error.stack}`);
        }
    };
};

export const updateShippingSameAsBillingHandler = (isSame) => {
    return async (dispatch) => {
        try {
            dispatch(customerActions.setShippingSameAsBilling(isSame));
        } catch (error) {
            console.log(`Failed to update shipping same as billing!\n${error.message}\n${error.stack}`);
        }
    };
}

