import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";


const PaymentForm = ({activeStep, handleBack, handleNext, steps}) => {

    const initialValues = {
        cc_number: "",
        ccv: "",
        month: "",
        year: "",
        zipCode: "",
    };


    const cart = useSelector((state) => state.cart);
    const customer = useSelector((state) => state.customer);
    console.log("cart", cart);
    console.log("customer", customer);

    
    return (
        <div>
            <h1>Payment Form</h1>
            <div>
            <button onClick={handleBack} disabled={activeStep === 0}>
              Back
            </button>
            <button type="submit"disabled={activeStep === steps.length - 1}>
              Next
            </button>
          </div>
        </div>
    );
};

export default PaymentForm;