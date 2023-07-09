import { createSlice } from "@reduxjs/toolkit";


const customerSlice = createSlice({
    name: "customer",
    initialState: {
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

                state.billingAddress = temp;
            }

            state.email = action.payload.email;
            state.phone = action.payload.phone;
            state.shippingAddress = shippingAddress;
            state.fullName = action.payload.fullName;
            state.message = action.payload.message;
        },


        setShippingSameAsBilling(state, action) {

            if (!action.payload) {
                state.billingAddress = {};
            }
            state.isShippingSameAsBilling = action.payload;
        },


        setCardDetails(state, action) {

            const tempCardDetails = {
                cc_number: action.payload.cc_number,
                ccv: action.payload.ccv,
                month: action.payload.month,
                year: action.payload.year,
                zipCode: action.payload.zipCode,
            };

            if (!state.isShippingSameAsBilling) {
                const tempBillingAddress = {
                    address: action.payload.addressLine1,
                    address2: action.payload.addressLine1,
                    addressee: action.payload.fullName,
                    city: action.payload.city,
                    postalCd: action.payload.zipCode,
                    stateCd: action.payload.state,
                    type: "billing"
                }

                state.billingAddress = tempBillingAddress;
            }

            state.cardDetails = tempCardDetails;
        },

        // clearCustomer(state) {
        //     state.customer = {},
        //         state.billingAddress = {},
        //         state.cardDetails = {},
        //         state.email = "",
        //         state.fullName = "",
        //         state.isShippingSameAsBilling = false,
        //         state.phone = "",
        //         state.message = "",
        //         state.shippingAddress = {},
        //         state.tax = 0
        // },
    }
});


export const customerActions = customerSlice.actions;
export default customerSlice;

