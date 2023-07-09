import React, { useState } from "react";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import FormButton from "./FormButton";
import PaymentForm from "./PaymentForm";
import ShowIf from "../ShowIf";
import { setCardDetailsHandler } from "../../store/customer-actions";
import { addressAndCardValidationSchema, cardValidationSchema } from "../../utility/utils";
import AddressForm from "./AddressForm";


const PaymentDetails = ({ activeStep, handleBack, handleNext, steps }) => {


  const dispatch = useDispatch();
  const customer = useSelector((state) => state.customer);
  const shippingIsBilling = customer.customer.isShippingSameAsBilling;


  const initialValuesWithBillingAddress = {
    cc_number: customer.customer.cardDetails?.cc_number || "",
    ccv: customer.customer.cardDetails?.ccv || "",
    month: customer.customer.cardDetails?.month || "",
    year: customer.customer.cardDetails?.year || "",
    zipCode: customer.customer?.billingAddress.postalCd || "",
  };

  const initialValuesWithoutBillingAddress = {
    ... initialValuesWithBillingAddress,
    fullName: customer.customer?.fullName || "",
    email: customer.customer?.email || "",
    phone: customer.customer?.phone || "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
  };

  const initialValues = shippingIsBilling ? initialValuesWithBillingAddress : initialValuesWithoutBillingAddress;


  const handleSubmit = (values) => {

    let newValues = {};
    if (shippingIsBilling) {
      newValues = {
        ...values,
        zipCode: customer.customer.billingAddress.postalCd,
      };
    } else {
      newValues = {
        ...values,
      };
    }
    dispatch(setCardDetailsHandler(newValues));
    handleNext();
  };


  return (
    <Formik
      initialValues={initialValues}
      validationSchema={shippingIsBilling ? cardValidationSchema : addressAndCardValidationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div style={{
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          flexDirection: "column",
          width: "50%",
          paddingTop: `${9.6}rem`,

        }}>
          <PaymentForm/>
          <ShowIf
            condition={!shippingIsBilling}
            render={() => {
              return (
                <AddressForm />
              );

            }}
          />

          <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center", marginBottom: `${9.6}rem`, gap: `${2.5}rem` }}>
            <FormButton title="Back" onClick={handleBack} disabled={activeStep === 0} />
            <FormButton title="Next" type="submit" disabled={activeStep === steps.length - 1} />
          </div>
        </div>

        <hr style={{ marginBottom: `${4.8}rem` }} />
      </Form>
    </Formik>
  );
};

export default PaymentDetails;