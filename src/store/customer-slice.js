import { createSlice } from "@reduxjs/toolkit";


const customerSlice = createSlice({
    name: "customer",
    initialState: {
        customer: {
            fullName: "",
            billingAddress: {},
            shippingAddress: {},
        },
    },
    reducers: {
        setCustomer(state, action) {
            console.log("SLICE",action.payload);
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

            if(action.payload.isShippingSameAsBilling){
                const temp = {
                    ...shippingAddress,
                    type: "billing"
                }

                state.customer.billingAddress = temp;
            }
            state.customer.shippingAddress = shippingAddress;
            state.customer.fullName = action.payload.fullName;
        },
    },
});


export const customerActions = customerSlice.actions;
export default customerSlice;

