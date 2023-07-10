import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";

import AddressForm from "./AddressForm";
import FormButton from "./FormButton";
import PaymentForm from "./PaymentForm";
import ShowIf from "../ShowIf";

import { setCardDetailsHandler } from "../../store/customer-actions";
import { addressAndCardValidationSchema, cardValidationSchema } from "../../utility/utils";

import classes from "./PaymentDetails.module.css";


const PaymentDetails = ({ activeStep, handleBack, handleNext, steps }) => {


  const dispatch = useDispatch();
  const customer = useSelector((state) => state.customer);
  const shippingIsBilling = customer.isShippingSameAsBilling;


  const initialValuesWithBillingAddress = {
    cc_number: customer.cardDetails?.cc_number || "",
    ccv: customer.cardDetails?.ccv || "",
    month: customer.cardDetails?.month || "",
    year: customer.cardDetails?.year || "",
    zipCode: customer.customer?.billingAddress.postalCd || "",
  };

  const initialValuesWithoutBillingAddress = {
    ...initialValuesWithBillingAddress,
    fullName: customer.customer?.fullName || "",
    email: customer.customer?.email || "",
    phone: customer.customer?.phone || "",
    addressLine1: customer.customer?.billingAddress.address || "",
    addressLine2: customer.customer?.billingAddress.address2 || "",
    city: customer.customer?.billingAddress.city || "",
    state: customer.customer?.billingAddress.stateCd || "",
    zipCode: customer.customer?.billingAddress.postalCd || "",
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

          <div className={classes.btnContainer}>
            <FormButton
              disabled={activeStep === 0}
              onClick={handleBack}
              title="Back" />
            <FormButton
              disabled={activeStep === steps.length - 1}
              title="Next"
              type="submit"
            />
          </div>
        </div>

        <hr className={classes.hr} />
      </Form>
    </Formik>
  );
};

export default PaymentDetails;