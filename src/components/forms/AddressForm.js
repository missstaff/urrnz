import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { setCustomerHandler } from "../../store/customer-actions";
import classes from "./AddressForm.module.css";


const AddressForm = ({ activeStep, handleBack, handleNext, steps }) => {
    const dispatch = useDispatch();

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
            .number()
            .notRequired(),
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
        dispatch(setCustomerHandler(values));
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
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "row",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: `${5}rem`,
                    width: "100%"
                }}>
                    <div style={{ width: "100%" }}>

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-end",
                                width: "100%",
                                marginBottom: `
                             ${2.2}rem`
                            }}
                        >
                            <div style={{
                                width: "25%",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}>
                                <label style={{ fontSize: `${1.8}rem` }} htmlFor="shippingIsBilling">Shipping same as billing</label>
                                <Field style={{
                                    accentColor: "orange",
                                    transition: "accent-color 0.3s",
                                }} type="checkbox" id="shippingIsBilling" name="shippingIsBilling" />
                                <ErrorMessage name="shippingIsBilling" component="div" />
                            </div>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", marginBottom: `${2.2}rem` }}>
                            <label
                                style={{
                                    fontSize: `${1.8}rem`,
                                }}
                                htmlFor="fullName">
                                Full Name:
                            </label>
                            <Field
                                style={{
                                    fontSize: `${3.4}rem`,
                                    paddingTop: `${0.5}rem`,
                                    paddingLeft: `${0.5}rem`
                                }}
                                type="text"
                                id="fullName"
                                name="fullName"
                            />
                            <ErrorMessage style={{ color: "red" }} name="fullName" component="div" />
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", marginBottom: `${2.2}rem` }}>
                            <label style={{ fontSize: `${1.8}rem` }} htmlFor="email">Email:</label>
                            <Field style={{
                                fontSize: `${3.4}rem`,
                                paddingTop: `${0.5}rem`,
                                paddingLeft: `${0.5}rem`
                            }}
                                type="text"
                                id="email"
                                name="email" />

                            <ErrorMessage name="email" component="div" />
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", marginBottom: `${2.2}rem` }}>
                            <label style={{ fontSize: `${1.8}rem` }} htmlFor="phone">Phone:</label>
                            <Field style={{
                                fontSize: `${3.4}rem`,
                                paddingTop: `${0.5}rem`,
                                paddingLeft: `${0.5}rem`
                            }}
                                type="text"
                                id="phone" name="p
                                hone" />

                            <ErrorMessage name="phone" component="div" />
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", marginBottom: `${2.2}rem` }}>
                            <label style={{ fontSize: `${1.8}rem` }} htmlFor="addressLine1">Address Line 1:</label>
                            <Field style={{
                                fontSize: `${3.4}rem`,
                                paddingTop: `${0.5}rem`,
                                paddingLeft: `${0.5}rem`
                            }}
                                type="text"
                                id="addressLine1"
                                name="addressLine1"
                            />
                            <ErrorMessage name="addressLine1" component="div" />
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", marginBottom: `${2.2}rem` }}>
                            <label style={{ fontSize: `${1.8}rem` }} htmlFor="addressLine2">Address Line 2:</label>
                            <Field style={{
                                fontSize: `${3.4}rem`,
                                paddingTop: `${0.5}rem`,
                                paddingLeft: `${0.5}rem`
                            }}
                                type="text"
                                id="addressLine2"
                                name="addressLine2"
                            />
                            <ErrorMessage name="addressLine2" component="div" />
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", marginBottom: `${2.2}rem` }}>
                            <label style={{ fontSize: `${1.8}rem` }} htmlFor="city">City:</label>
                            <Field style={{
                                fontSize: `${3.4}rem`,
                                paddingTop: `${0.5}rem`,
                                paddingLeft: `${0.5}rem`
                            }}
                                type="text"
                                id="city" name="city" />

                            <ErrorMessage name="city" component="div" />
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", marginBottom: `${2.2}rem` }}>
                            <label style={{ fontSize: `${1.8}rem` }} htmlFor="state">State:</label>
                            <Field style={{
                                fontSize: `${3.4}rem`,
                                paddingTop: `${0.5}rem`,
                                paddingLeft: `${0.5}rem`
                            }}
                                type="text"
                                id="state" name="state" />

                            <ErrorMessage name="state" component="div" />
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", marginBottom: `${2.2}rem` }}>
                            <label style={{ fontSize: `${1.8}rem` }} htmlFor="zipCode">Zip Code:</label>
                            <Field style={{
                                fontSize: `${3.4}rem`,
                                paddingTop: `${0.5}rem`,
                                paddingLeft: `${0.5}rem`
                            }}
                                type="text"
                                id="zipCode" name=
                                "zipCode" />

                            <ErrorMessage name="zipCode" component="div" />
                        </div>

                    </div>

                    <div style={{ width: "50%" }}>
                        <h3>Shipping options</h3>
                        <div>
                            <label htmlFor="shippingIsBilling">Shipping OPtion</label>
                            <Field type="checkbox" id="shippingIsBilling" name="shippingIsBilling" />
                            <ErrorMessage name="shippingIsBilling" component="div" />
                        </div>

                        <div>
                            <label htmlFor="shippingIsBilling">Shipping OPtion</label>
                            <Field type="checkbox" id="shippingIsBilling" name="shippingIsBilling" />
                            <ErrorMessage name="shippingIsBilling" component="div" />
                        </div>

                        <div>
                            <label htmlFor="shippingIsBilling">Shipping OPtion</label>
                            <Field type="checkbox" id="shippingIsBilling" name="shippingIsBilling" />
                            <ErrorMessage name="shippingIsBilling" component="div" />
                        </div>
                    </div>

                </div>
                <div>
                    <button onClick={handleBack} disabled={activeStep === 0}>
                        Back
                    </button>
                    <button type="submit" disabled={activeStep === steps.length - 1}>
                        Next
                    </button>
                </div>
            </Form>
        </Formik>
    );
};

export default AddressForm;
