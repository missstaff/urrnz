import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form } from "formik";
import AddressForm from "./AddressForm";
import CheckoutButtons from "./CheckoutButtons";
import { updateShippingSameAsBillingHandler } from "../../store/customer-actions";
import { addressValidationSchema, handleSubmitShipping } from "../../utility/utils";
import classes from "./ShippingDetails.module.css";

const ShippingDetails = ({ activeStep, handleBack, handleNext }) => {
  const dispatch = useDispatch();

  const customer = useSelector((state) => state.customer);
  const shippingAddress = customer.shippingAddress;

  const store = useSelector((state) => state.store);

  const [isShippingSameAsBilling, setIsShippingSameAsBilling] = useState(false);

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
      store,
      values
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={addressValidationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div
          className={classes.container}>
          <div>
            <div className={classes.row}>
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

            <AddressForm />
          </div>
            <div>
              <CheckoutButtons
                activeStep={activeStep}
                handleBack={handleBack}
                title="Next"
              />
            </div>
          </div>
      </Form>
    </Formik>
  );
};

export default ShippingDetails;
