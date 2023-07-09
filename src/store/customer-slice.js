import { createSlice } from "@reduxjs/toolkit";


const customerSlice = createSlice({
    name: "customer",
    initialState: {
        customer: {
            email: "",
            fullName: "",
            isShippingSameAsBilling: false,
            phone: "",
            billingAddress: {},
            shippingAddress: {},
            tax: 0,
        },
    },
    reducers: {
        setCustomer(state, action) {
            const shippingAddress = {
                address: action.payload.addressLine1,
                address2: action.payload.addressLine1,
                addressee: action.payload.fullName,
                city: action.payload.city,
                postalCd: action.payload.zipCode,
                stateCd: action.payload.state,
                type: "shipping"
            };


            if(action.payload.isShippingSameAsBilling){
                const temp = {
                    ...shippingAddress,
                    type: "billing"
                }

                state.customer.billingAddress = temp;
            }
            state.customer.email = action.payload.email;
            state.customer.phone = action.payload.phone;
            state.customer.shippingAddress = shippingAddress;
            state.customer.fullName = action.payload.fullName;
        },

        setShippingSameAsBilling(state, action) {
            state.customer.isShippingSameAsBilling = action.payload;
        },

        setCardDetails(state, action) {
            // state.customer.cardDetails = action.payload;
            console.log("setCardDetails", action.payload);
        },
    },
});


export const customerActions = customerSlice.actions;
export default customerSlice;

