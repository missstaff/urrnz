import { createSlice } from "@reduxjs/toolkit";


const customerSlice = createSlice({
    name: "customer",
    initialState: {
        customer: {
            billingAddress: {},
            cardDetails: {},
            email: "",
            fullName: "",
            isShippingSameAsBilling: false,
            phone: "",
            message: "",
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
                type: "shipping",
            };

            if (action.payload.isShippingSameAsBilling) {

                const temp = {
                    ...shippingAddress,
                    type: "billing",
                };

                state.customer.billingAddress = temp;
            }

            state.customer.email = action.payload.email;
            state.customer.phone = action.payload.phone;
            state.customer.shippingAddress = shippingAddress;
            state.customer.fullName = action.payload.fullName;
            state.customer.message = action.payload.message;
        },


        setShippingSameAsBilling(state, action) {

            if (!action.payload) {
                state.customer.billingAddress = {};
            }
            state.customer.isShippingSameAsBilling = action.payload;
        },


        setCardDetails(state, action) {

            const tempCardDetails = {
                cc_number: action.payload.cc_number,
                ccv: action.payload.ccv,
                month: action.payload.month,
                year: action.payload.year,
                zipCode: action.payload.zipCode,
            };

            if (!state.customer.isShippingSameAsBilling) {
                const tempBillingAddress = {
                    address: action.payload.addressLine1,
                    address2: action.payload.addressLine1,
                    addressee: action.payload.fullName,
                    city: action.payload.city,
                    postalCd: action.payload.zipCode,
                    stateCd: action.payload.state,
                    type: "billing"
                }

                state.customer.billingAddress = tempBillingAddress;
            }

            state.customer.cardDetails = tempCardDetails;
        },

        clearCustomer(state) {
            state.customer = {},
                state.customer.billingAddress = {},
                state.customer.cardDetails = {},
                state.customer.email = "",
                state.customer.fullName = "",
                state.customer.isShippingSameAsBilling = false,
                state.customer.phone = "",
                state.customer.message = "",
                state.customer.shippingAddress = {},
                state.customer.tax = 0
        },
    }
});


export const customerActions = customerSlice.actions;
export default customerSlice;

