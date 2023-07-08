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

