import { Formik, Field, Form, ErrorMessage } from "formik";
import { useSelector } from "react-redux";
import FormButton from "./FormButton";
import { cardValidationSchema } from "../../utility/utils";


const PaymentForm = ({ activeStep, handleBack, handleNext, steps }) => {

  const initialValues = {
    cc_number: "",
    ccv: "",
    month: "",
    year: "",
    zipCode: "",
  };


  const cart = useSelector((state) => state.cart);
  const customer = useSelector((state) => state.customer);
  const store = useSelector((state) => state.store);
  console.log("store", store);
  console.log("cart", cart);
  console.log("customer", customer);

  const handleSubmit = (values) => {
    console.log("values", values);
  };


  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>

        <div style={{
          // display: "grid",
          flexDirection: "row",
          // gridTemplateColumns: "repeat(2, 1fr)",
          // gap: `${9.6}rem`,
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

         
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center", marginBottom: `${9.6}rem`, gap: `${2.5}rem` }}>
          <FormButton title="Back" onClick={handleBack} disabled={activeStep === 0} />
          <FormButton title="Next" type="submit" disabled={activeStep === steps.length - 1} />
        </div>

        <hr style={{ marginBottom: `${4.8}rem` }} />
        </div>
      </Form>
    </Formik>
  );
};

export default PaymentForm;