import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form } from "formik";
import CheckoutButtons from "./CheckoutButtons";
import { setShippingOptionHandler } from "../../store/cart-actions";
import classes from "./ShippingOptions.module.css";

const ShippingDetails = ({ activeStep, handleBack, handleNext }) => {
  const dispatch = useDispatch();
  const customer = useSelector((state) => state.customer);
  const shippingAddress = customer.shippingAddress;
  const store = useSelector((state) => state.store);
  const shippingOptions = store.shippingOptions;
  const [shippingOption, setShippingOption] = useState(1);

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

  const handleSubmit = async () => {
    dispatch(setShippingOptionHandler(shippingOptions[shippingOption]));
    handleNext();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <section>
        <Form>
          <div className={classes.card}>
            {shippingOptions.map((option, index) => {
              return (
                <div>
                  <div key={index} className={classes.optionContainer}>
                    <label htmlFor={option.name}>
                      <div>
                        <p className={classes.option}>{option.name}</p>
                      </div>
                    </label>
                    <p className={classes.option}>
                      ${option.price}
                      <span>
                        {" "}
                        {" "}
                        <Field
                          aria-label="shippingOption"
                          checked={shippingOption === index}
                          className={classes.field}
                          id={option.name}
                          name={option.name}
                          onClick={() => setShippingOption(index)}
                          role="radio"
                          tabIndex={index}
                          type="checkbox"
                        />
                      </span>
                    </p>
                  </div>
                </div>
              );
            })}
            <div className={classes.btnContainer}>
              <CheckoutButtons
                activeStep={activeStep}
                handleBack={handleBack}
                title="Next"
              />
            </div>
          </div>
        </Form>
      </section>
    </Formik>
  );
};

export default ShippingDetails;
{
  /*  <div>
       <p className={classes.message}>
          *Shipping price per item
        </p>
       </div> */
}
