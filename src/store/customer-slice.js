import { createSlice } from "@reduxjs/toolkit";

const customerSlice = createSlice({
    name: "customer",
    initialState: {
        billingAddress: {},
        chatObject: {},
        cardDetails: {},
        email: "",
        fullName: "",
        isShippingSameAsBilling: false,
        phone: "",
        message: "",
        shippingAddress: {},
        transactionObject: {},
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
                cc_last_four: action.payload.cc_number.slice(-4),
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

            const chatObject = {
                chatObject: {
                    email: {
                      from: null,
                      to: [state.billingAddress.email],
                      cc: [],
                      bcc: [],
                      success: false
                    },
                    entityIdCustomer: 0,
                    entityIdEmployee: 0,
                    id: 0,
                    message: state.message,
                    notesHidden: null,
                    phone: {
                      text: null,
                      personal: state.phone,
                      business: null,
                      other: null,
                      carrier: null,
                      success: false
                    },
                    social: {
                      account: null,
                      platform: null,
                      success: false
                    },
                    subject: null,
                    ts: null
                  },
                };

            const transactionObject = {
                address: state.billingAddress,
                address2: state.shippingAddress,
                amount: 0,
                amountAttempted: 0,
                amountConfirmed: 0,
                authCd: null,
                brand: null,
                cc_cvc: state.cardDetails.ccv,
                cc_last4: state.cardDetails.cc_last_four,
                cc_mm: state.cardDetails.month,
                cc_name: state.billingAddress.addressee,
                cc_number: state.cardDetails.cc_number,
                cc_yyyy: state.cardDetails.year,
                city: state.billingAddress.city,
                countryCd: null,
                currency: "USD",
                entityIdCustomer: 0,
                entityIdMerchant: 0,
                id: 0,
                nonce: null,
                postalCd: state.billingAddress.postalCd,
                refCdExt: null,
                refCdInt: null,
                stateCd: state.billingAddress.stateCd,
                success: null,
                ts: null,
                type: null
              };

              state.chatObject = chatObject;
              state.transactionObject = transactionObject;
        },

        clearCustomer(state) {
            state.billingAddress = {};
            state.cardDetails = {};
            state.email = "";
            state.fullName = "";
            state.isShippingSameAsBilling = false;
            state.phone = "";
            state.message = "";
            state.shippingAddress = {};
        },
    }
});


export const customerActions = customerSlice.actions;
export default customerSlice;

