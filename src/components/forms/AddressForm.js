import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import FormButton from "./FormButton";

import { setCustomerHandler } from "../../store/customer-actions";
import { setShippingOptionHandler } from "../../store/cart-actions";



const AddressForm = ({ activeStep, handleBack, handleNext, steps }) => {

    const dispatch = useDispatch();
    const store = useSelector(state => state.store);
    const shippingOptions = store.shippingOptions;


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

    const validationSchema = Yup.object().shape({
        email: Yup
            .string()
            .email("Please enter valid email")
            .required("Email is required"),
        fullName: Yup
            .string()
            .matches(/^[a-zA-Z]\w*\s[a-zA-Z]{2,}.*$/, "Enter at least 2 names")
            .required("Full name is required"),
        phone: Yup
            .string()
            .matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/, "Enter a valid phone number")
            .required(),
        zipCode: Yup
            .string()
            .matches(/^[0-9]{5}$/, 'zipcodes must be 5 digits')
            .required("A zipcode is required"),
        city: Yup
            .string()
            .matches(/^[A-Za-z ]{2,30}$/, "Enter a city")
            .required("A city is required"),
        state: Yup
            .string()
            .matches(/^[a-zA-Z]{2}$/, "Enter state abbreviation")
            .required("A state is required"),
        addressLine1: Yup
            .string()
            .matches(/^[a-zA-Z0-9\s\.\#\-]+$/, "Enter a valid street address")
            .required("A street address or P.O Box required"),
    });



    const handleSubmit = (values) => {
        const newValues = {
            ...values,
            isShippingSameAsBilling: isShippingSameAsBilling
        }
        dispatch(setShippingOptionHandler(shippingOptions[shippingOption]));
        dispatch(setCustomerHandler(newValues));
        handleNext();
    };


    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
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
                                {/* <ErrorMessage name="shippingIsBilling" component="div" /> */}
                            </div>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", marginBottom: `${1.5}rem` }}>
                            <label
                                style={{
                                    fontSize: `${1.8}rem`,
                                }}
                                htmlFor="fullName">
                                Full Name:
                            </label>
                            <Field
                                style={{
                                    fontSize: `${2.4}rem`,
                                    paddingTop: `${0.5}rem`,
                                    paddingLeft: `${0.5}rem`
                                }}
                                type="text"
                                id="fullName"
                                name="fullName"
                            />
                            <ErrorMessage style={{ color: "#ff5900" }} name="fullName" component="div" />
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", marginBottom: `${1.5}rem` }}>
                            <label style={{ fontSize: `${1.8}rem` }} htmlFor="email">Email:</label>
                            <Field style={{
                                fontSize: `${2.4}rem`,
                                paddingTop: `${0.5}rem`,
                                paddingLeft: `${0.5}rem`
                            }}
                                type="text"
                                id="email"
                                name="email" />

                            <ErrorMessage style={{ color: "#ff5900" }} name="email" component="div" />
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", marginBottom: `${1.5}rem` }}>
                            <label style={{ fontSize: `${1.8}rem` }} htmlFor="phone">Phone:</label>
                            <Field style={{
                                fontSize: `${2.4}rem`,
                                paddingTop: `${0.5}rem`,
                                paddingLeft: `${0.5}rem`
                            }}
                                type="text"
                                id="phone"
                                name="phone" />

                            <ErrorMessage style={{ color: "#ff5900" }} name="phone" component="div" />
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", marginBottom: `${1.5}rem` }}>
                            <label style={{ fontSize: `${1.8}rem` }} htmlFor="addressLine1">Address Line 1:</label>
                            <Field style={{
                                fontSize: `${2.4}rem`,
                                paddingTop: `${0.5}rem`,
                                paddingLeft: `${0.5}rem`
                            }}
                                type="text"
                                id="addressLine1"
                                name="addressLine1"
                            />
                            <ErrorMessage style={{ color: "#ff5900" }} name="addressLine1" component="div" />
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", marginBottom: `${1.5}rem` }}>
                            <label style={{ fontSize: `${1.8}rem` }} htmlFor="addressLine2">Address Line 2:</label>
                            <Field style={{
                                fontSize: `${2.4}rem`,
                                paddingTop: `${0.5}rem`,
                                paddingLeft: `${0.5}rem`
                            }}
                                type="text"
                                id="addressLine2"
                                name="addressLine2"
                            />
                            <ErrorMessage style={{ color: "#ff5900" }} name="addressLine2" component="div" />
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", marginBottom: `${1.5}rem` }}>
                            <label style={{ fontSize: `${1.8}rem` }} htmlFor="city">City:</label>
                            <Field style={{
                                fontSize: `${2.4}rem`,
                                paddingTop: `${0.5}rem`,
                                paddingLeft: `${0.5}rem`
                            }}
                                type="text"
                                id="city" name="city" />

                            <ErrorMessage style={{ color: "#ff5900" }} name="city" component="div" />
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", marginBottom: `${1.5}rem` }}>
                            <label style={{ fontSize: `${1.8}rem` }} htmlFor="state">State:</label>
                            <Field style={{
                                fontSize: `${2.4}rem`,
                                paddingTop: `${0.5}rem`,
                                paddingLeft: `${0.5}rem`
                            }}
                                type="text"
                                id="state" name="state" />

                            <ErrorMessage style={{ color: "#ff5900" }} name="state" component="div" />
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", marginBottom: `${1.5}rem` }}>
                            <label style={{ fontSize: `${1.8}rem` }} htmlFor="zipCode">Zip Code:</label>
                            <Field style={{
                                fontSize: `${2.4}rem`,
                                paddingTop: `${0.5}rem`,
                                paddingLeft: `${0.5}rem`
                            }}
                                type="text"
                                id="zipCode" name=
                                "zipCode" />

                            <ErrorMessage style={{ color: "#ff5900" }} name="zipCode" component="div" />
                        </div>

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
                                    <ErrorMessage style={{ color: "#ff5900" }} name={option.name} component="div" />
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

export default AddressForm;
