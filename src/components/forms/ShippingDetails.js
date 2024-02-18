import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form } from "formik";

import AddressForm from "./AddressForm";
import CheckoutButtons from "./CheckoutButtons";

import { updateShippingSameAsBillingHandler } from "../../store/customer-actions";
import { useScreenSize } from "../../hooks/useScreenSize";
import {
  addressValidationSchema,
  handleSubmitShipping,
} from "../../utility/utils";

import classes from "./ShippingDetails.module.css";

const ShippingDetails = ({ activeStep, handleBack, handleNext }) => {
  const dispatch = useDispatch();
  const screenSize = useScreenSize();

  const customer = useSelector((state) => state.customer);
  const shippingAddress = customer.shippingAddress;

  const store = useSelector((state) => state.store);
  const shippingOptions = store.shippingOptions;

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
    await handleSubmitShipping(
      dispatch,
      handleNext,
      isShippingSameAsBilling,
      shippingOption,
      store,
      values
    );
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
  }, [screenSize]);

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
            gridTemplateColumns: isLargeScreen
              ? "repeat(2, 1fr)"
              : "repeat(1, 1fr)",
          }}
        >
          <div style={{ width: "100%" }}>
            <div className={classes.row}>
              <div className={classes.fieldWrapper}>
                <label
                 className={classes.label}
                 htmlFor="shippingIsBilling">
                  Shipping same as billing
                </label>
                <Field
                  checked={
                    customer?.isShippingSameAsBilling || isShippingSameAsBilling
                  }
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
            <h3
              style={{
                fontSize: `${4.4}rem`,
                marginTop: isLargeScreen ? "0" : `${-4.4}rem`,
              }}
            >
              Shipping Options:
            </h3>
            {shippingOptions.map((option, index) => {
              return (
                <div
                  key={index}
                  className={classes.optionsContainer}
                  style={{ marginBottom: `${2.2}rem` }}
                >
                  <label htmlFor={option.name}>
                    <p className={classes.option}>{option.name}</p>
                    <p className={classes.optionPrice}>${option.price}</p>
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
            <p
              style={{
                fontSize: 15,
                fontStyle: "italic",
                fontWeight: 700,
                marginBottom: `${4.4}rem`,
              }}
            >
              *Shipping price per item
            </p>
            <div>
              <CheckoutButtons
                activeStep={activeStep}
                handleBack={handleBack}
                title="Next"
              />
            </div>
          </div>
        </div>
        <hr className={classes.hr} />
      </Form>
    </Formik>
  );
};

export default ShippingDetails;
