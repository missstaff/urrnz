import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form } from "formik";

import AddressForm from "./AddressForm";
import CheckoutButtons from "./CheckoutButtons";

import { setCustomerHandler, updateShippingSameAsBillingHandler } from "../../store/customer-actions";
import { setShippingOptionHandler, setTaxRateHandler } from "../../store/cart-actions";
import { useScreenSize } from "../../hooks/useScreenSize";
import { addressValidationSchema, postRequestHandler } from "../../utility/utils";

import { FETCH_TAX } from "../../config/constants";

import classes from "./ShippingDetails.module.css";


const ShippingDetails = ({ activeStep, handleBack, handleNext, steps }) => {

    const dispatch = useDispatch();
    const screenSize = useScreenSize();

    const customer = useSelector(state => state.customer);
    const shippingAddress = customer.shippingAddress;

    const store = useSelector(state => state.store);
    const shippingOptions = store.shippingOptions;
    const orderTemplate = store.orderTemplate;

    const [isShippingSameAsBilling, setIsShippingSameAsBilling] = useState(false);
    const [shippingOption, setShippingOption] = useState(1);
    const [isLargeScreen, setIsLargeScreen] = useState(false);


    const initialValues = {
        fullName: customer?.fullName || "",
        email: customer?.email || "",
        phone: customer?.phone || "",
        addressLine1: shippingAddress?.address || "",
        addressLine2: shippingAddress?.address2 || "",
        city: shippingAddress?.city || "",
        state: shippingAddress?.stateCd || "",
        zipCode: shippingAddress?.postalCd || "",
        message: customer?.message || "",
    };

    const handleShippingSameAsBillingChange = () => {
        setIsShippingSameAsBilling(!isShippingSameAsBilling);
        dispatch(updateShippingSameAsBillingHandler(!isShippingSameAsBilling));
    };


    const handleSubmit = async (values) => {
        const newValues = {
            ...values,
            isShippingSameAsBilling: isShippingSameAsBilling,
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

    useEffect(() => {
        const setSizes = () => {
            if (screenSize === "default") {
                setIsLargeScreen(false);
            } else if (screenSize === "xs") {
                setIsLargeScreen(false);
            } else if (screenSize === "sm") {
                setIsLargeScreen(false);
            } else if (screenSize === "md") {
                setIsLargeScreen(false);
            } else if (screenSize === "lg") {
                setIsLargeScreen(true);
            } else if (screenSize === "xl") {
                setIsLargeScreen(true);
            } else if (screenSize === "xxl") {
                setIsLargeScreen(true);
            }
        };
        setSizes();
    }, [screenSize,]);


    return (
        <Formik
            initialValues={initialValues}
            validationSchema={addressValidationSchema}
            onSubmit={handleSubmit}
        >
            <Form style={{ width: "100%" }}>

                <div
                    className={classes.container}
                    style={{
                        gridTemplateColumns: isLargeScreen ? "repeat(2, 1fr)" : "repeat(1, 1fr)"
                    }}>
                    <div style={{ width: "100%" }}>

                        <div className={classes.row}>
                            <div className={classes.fieldWrapper}>
                                <label htmlFor="shippingIsBilling">Shipping same as billing</label>
                                <Field
                                    checked={customer.customer?.isShippingSameAsBilling || isShippingSameAsBilling}
                                    className={classes.field}
                                    id="shippingIsBilling"
                                    name="shippingIsBilling"
                                    onClick={handleShippingSameAsBillingChange}
                                    type="checkbox"
                                />
                            </div>
                        </div>

                        <AddressForm />

                    </div>

                    <div style={{ width: "100%" }}>
                        {!isLargeScreen && <hr className={classes.hr} />}
                        <h3 style={{
                            fontSize: `${4.4}rem`,
                            marginTop: isLargeScreen ? "0" : `${-4.4}rem`,
                        }}>
                            Shipping Options:
                        </h3>
                        {shippingOptions.map((option, index) => {
                            return (
                                <div
                                    key={index}
                                    className={classes.optionsContainer}>
                                    <label
                                        htmlFor={option.name}>
                                        <p className={classes.option}>
                                            {option.name}
                                        </p>
                                        <p className={classes.optionPrice}>
                                            ${option.price}
                                        </p>
                                    </label>
                                    <Field
                                        checked={shippingOption === index}
                                        className={classes.field}
                                        id={option.name}
                                        name={option.name}
                                        onClick={() => setShippingOption(index)}
                                        type="checkbox"
                                    />
                                </div>
                            );
                        })}

                        <div>
                            <div className={classes.textAreaContainer}>
                                <label
                                    htmlFor="message">
                                    Message:
                                </label>
                                <Field
                                    as="textarea"
                                    className={`${classes.placeholderColor} ${classes.textAreaField}`}
                                    id="message"
                                    name="message"
                                    placeholder="Name for inscription, special instructions."
                                />
                            </div>
                            <CheckoutButtons activeStep={activeStep} handleBack={handleBack} steps={steps} />
                        </div>
                    </div>

                </div>

                <hr className={classes.hr} />
            </Form>
        </Formik>
    );
};

export default ShippingDetails;
