import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";

import AddressForm from "./AddressForm";
import CheckoutButtons from "./CheckoutButtons";
import PaymentForm from "./PaymentForm";
import ShowIf from "../ShowIf";

import { setCardDetailsHandler } from "../../store/customer-actions";
import { addressAndCardValidationSchema, cardValidationSchema } from "../../utility/utils";

import classes from "./PaymentDetails.module.css";


const PaymentDetails = ({ activeStep, handleBack, handleNext }) => {

  const dispatch = useDispatch();
  const customer = useSelector((state) => state.customer);
  const shippingIsBilling = customer.isShippingSameAsBilling;

  const initialValuesWithBillingAddress = {
    cc_number: customer.cardDetails?.cc_number || "4242424242424242",
    ccv: customer.cardDetails?.ccv || "123",
    month: customer.cardDetails?.month || "12",
    year: customer.cardDetails?.year || "2025",
    zipCode: customer.customer?.billingAddress.postalCd || "90210",
  };

  const initialValuesWithoutBillingAddress = {
    ...initialValuesWithBillingAddress,
    fullName: customer?.fullName || "",
    email: customer?.email || "",
    phone: customer?.phone || "",
    addressLine1: customer?.billingAddress.address || "",
    addressLine2: customer?.billingAddress.address2 || "",
    city: customer?.billingAddress.city || "",
    state: customer?.billingAddress.stateCd || "",
    zipCode: customer?.billingAddress.postalCd || "",
  };

  const initialValues = shippingIsBilling ? initialValuesWithBillingAddress : initialValuesWithoutBillingAddress;


  const handleSubmit = (values) => {
    let newValues = {};
    if (shippingIsBilling) {
      newValues = {
        ...values,
        zipCode: customer.billingAddress.postalCd,
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
        <div className={classes.form}>
          <PaymentForm />
          <ShowIf
            condition={!shippingIsBilling}
            render={() => {
              return (
                <AddressForm />
              );
            }}
          />
          <div style={{ marginTop: `${1.8}rem` }}>
            <CheckoutButtons 
              activeStep={activeStep} 
              handleBack={handleBack} 
              title="Next" />
          </div>
        </div>
        <hr className={classes.hr} />
      </Form>
    </Formik>
  );
};

export default PaymentDetails;