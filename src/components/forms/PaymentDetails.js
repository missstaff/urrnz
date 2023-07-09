import { Formik, Form } from "formik";
import { useSelector } from "react-redux";
import FormButton from "./FormButton";
import PaymentForm from "./PaymentForm";
import ShowIf from "../ShowIf";
import { addressValidationSchema, cardValidationSchema } from "../../utility/utils";
import AddressForm from "./AddressForm";


const PaymentDetails = ({ activeStep, handleBack, handleNext, steps }) => {

 
  const initialValues = {
    cc_number: "",
    ccv: "",
    month: "",
    year: "",
    zipCode: "",
  };


  const cart = useSelector((state) => state.cart);
  const customer = useSelector((state) => state.customer);
  const shippingIsBilling = customer.customer.isShippingSameAsBilling;
  const store = useSelector((state) => state.store);
  console.log("store", store);
  console.log("cart", cart);
  console.log("customer", customer);

  const handleSubmit = (values) => {
    console.log("values", values);

    handleNext();
  };


  return (
    <Formik
      initialValues={initialValues}
      validationSchema={cardValidationSchema}
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
          <PaymentForm />
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