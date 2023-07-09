import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form } from "formik";

import AddressForm from "./AddressForm";
import FormButton from "./FormButton";

import { setCustomerHandler } from "../../store/customer-actions";
import { setShippingOptionHandler, setTaxRateHandler } from "../../store/cart-actions";
import { addressValidationSchema, postRequestHandler } from "../../utility/utils";

import { FETCH_TAX } from "../../config/constants";



const ShippingDetails = ({ activeStep, handleBack, handleNext, steps }) => {

    const dispatch = useDispatch();

    const store = useSelector(state => state.store);
    const shippingOptions = store.shippingOptions;
    const orderTemplate = store.orderTemplate;

    const customer = useSelector(state => state.customer);

    const [isShippingSameAsBilling, setIsShippingSameAsBilling] = useState(false);
    const [shippingOption, setShippingOption] = useState(1);


    const initialValues = {
        fullName: "",
        email: "",
        phone: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        zipCode: "",
    };


    const handleSubmit = async (values) => {
        const newValues = {
            ...values,
            isShippingSameAsBilling: isShippingSameAsBilling
        }

        dispatch(setShippingOptionHandler(shippingOptions[shippingOption]));
        dispatch(setCustomerHandler(newValues));

        const updatedOrderTemplate = {
            ...orderTemplate,
            addresses: [{
                address: newValues.addressLine1,
                address2: newValues.addressLine1,
                addressee: newValues.fullName,
                city: newValues.city,
                postalCd: newValues.zipCode,
                stateCd: newValues.state,
                type: "shipping"
            }],
            email: newValues.email,
            name: newValues.fullName,
            phone: newValues.phone,
        };

        const res = await postRequestHandler(FETCH_TAX, updatedOrderTemplate);
        const taxRate = await res.response.taxRate;
        dispatch(setTaxRateHandler(taxRate));
        handleNext();
    };


    return (
        <Formik
            initialValues={initialValues}
            validationSchema={addressValidationSchema}
            onSubmit={handleSubmit}
        >
            <Form>

                <div style={{
                    display: "grid",
                    flexDirection: "row",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: `${9.6}rem`,
                    width: "100%",
                    paddingTop: `${9.6}rem`,
                }}>
                    <div style={{ width: "100%" }}>

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-end",
                                width: "100%",
                                marginBottom: `
                             ${2.2}rem`
                            }}
                        >
                            <div
                                style={{
                                    width: "50%",
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                }}>
                                <label style={{ fontSize: `${2.2}rem`, fontWeight: 700, }} htmlFor="shippingIsBilling">Shipping same as billing</label>
                                <Field
                                    style={{
                                        accentColor: "#ff5900",
                                        height: `${2.4}rem`,
                                        width: `${2.4}rem`,
                                    }}
                                    type="checkbox"
                                    id="shippingIsBilling"
                                    name="shippingIsBilling"
                                    onClick={() => { setIsShippingSameAsBilling(!isShippingSameAsBilling) }}
                                />
                            </div>
                        </div>

                        <AddressForm />

                    </div>

                    <div style={{ width: "100%" }}>
                        <h3 style={{
                            textAlign: "center",
                            fontSize: `${3.2}rem`,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            padding: `${1.8}rem`,
                            marginBottom: `${4.4}rem`,
                        }}>Shipping Options:</h3>
                        {shippingOptions.map((option, index) => {
                            return (
                                <div
                                    key={index}
                                    style={{
                                        width: "100%",
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "flex-start",
                                        justifyContent: "space-between",
                                        marginBottom: `${2.2}rem`,
                                    }}>
                                    <label style={{ fontSize: `${2.4}rem` }} htmlFor={option.name}><p>{option.name}</p> <p>${option.price}</p></label>
                                    <Field
                                        onClick={() => setShippingOption(index)}
                                        style={{
                                            height: `${2.4}rem`,
                                            width: `${2.4}rem`,
                                            accentColor: "#ff5900",
                                            transition: "accent-color 0.3s",
                                        }}
                                        type="checkbox"
                                        id={option.name}
                                        name={option.name}
                                        checked={shippingOption === index}
                                    />
                                </div>
                            );
                        })}
                    </div>

                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center", marginBottom: `${9.6}rem`, gap: `${2.5}rem` }}>
                    <FormButton title="Back" onClick={handleBack} disabled={activeStep === 0} />
                    <FormButton title="Next" type="submit" disabled={activeStep === steps.length - 1} />
                </div>

                <hr style={{ marginBottom: `${4.8}rem` }} />
            </Form>
        </Formik>
    );
};

export default ShippingDetails;
