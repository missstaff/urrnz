import { createSlice } from "@reduxjs/toolkit";


const customerSlice = createSlice({
    name: "customer",
    initialState: {
        customer: {
            fullName: "",
            email: "",
            phone: "",
            billingAddress: {},
            shippingAddress: {},
            chatObject: {},
        },
    },
    reducers: {
        setCustomer(state, action) {
            const shippingAddress = {
                "address": action.payload.addressLine1,
                "address2": action.payload.addressLine1,
                "addressee": action.payload.fullName,
                "city": action.payload.city,
                "countryCd": null,
                "entityIdCustomer": 0,
                "id": 0,
                "isBilling": false,
                "latitude": null,
                "longitude": null,
                "postalCd": action.payload.zipCode,
                "stateCd": action.payload.state,
                "type": "shipping"
            };

            const chatObject = {
                email: {
                  from: null,
                  to: [action.payload.email],
                  cc: [],
                  bcc: [],
                  success: false
                },
                entityIdCustomer: 0,
                entityIdEmployee: 0,
                id: 0,
                message: "",
                notesHidden: null,
                phone: {
                  text: null,
                  personal: action.payload.phone,
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
            };
              
            console.log("action.payload.isShippingSameAsBilling", action.payload.isShippingSameAsBilling)

            if(action.payload.isShippingSameAsBilling){
                const temp = {
                    ...shippingAddress,
                    type: "billing"
                }

                state.customer.billingAddress = temp;
            }

            state.customer.chatObject = chatObject;
            state.customer.email = action.payload.email;
            state.customer.phone = action.payload.phone;
            state.customer.shippingAddress = shippingAddress;
            state.customer.fullName = action.payload.fullName;
        },
    },
});


export const customerActions = customerSlice.actions;
export default customerSlice;

