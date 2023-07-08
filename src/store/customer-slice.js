import { createSlice } from "@reduxjs/toolkit";


const customerSlice = createSlice({
    name: "customer",
    initialState: {
        customer: {
            fullName: "",
            addressLine1: "",
            addressLine2: "",
            city: "",
            state: "",
            zipCode: "",
        },
    },
    reducers: {
        setCustomer(state, action) {
            console.log("SLICE",action.payload);
            state.customer = action.payload;
        },
    },
});


export const customerActions = customerSlice.actions;
export default customerSlice;

