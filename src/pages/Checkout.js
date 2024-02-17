import { useState } from "react";

import ShippingDetails from "../components/forms/ShippingDetails";
import Container from "../components/Container";
import Heading from "../components/layout/Heading";
import PaymentDetails from "../components/forms/PaymentDetails";
import Review from "../components/forms/Review";

import { CHECKOUT_STEPS } from "../config/constants";
import classes from "./Checkout.module.css";
import { useNavigate } from "react-router-dom";

const getStepContent = (activeStep, handleBack, handleNext) => {
  switch (activeStep) {
    case 0:
      return (
        <ShippingDetails
          activeStep={activeStep}
          handleBack={handleBack}
          handleNext={handleNext}
        />
      );
    case 1:
      return (
        <PaymentDetails
          activeStep={activeStep}
          handleBack={handleBack}
          handleNext={handleNext}
        />
      );
    case 2:
      return <Review activeStep={activeStep} handleBack={handleBack} />;
    default:
      throw new Error("Unknown step");
  }
};

const Checkout = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    console.log("CLICK");
    if (activeStep === 0) {
      navigate("/cart");
    }
    setActiveStep((prevStep) => prevStep - 1);
  };

  return (
    <section className="wrapper">
      <Heading title="CHECKOUT" />

      <main>
        <Container className={classes.container}>
          <h2 className={classes.heading}>{CHECKOUT_STEPS[activeStep]}</h2>
          <hr />
          {getStepContent(activeStep, handleBack, handleNext)}
        </Container>
      </main>
    </section>
  );
};

export default Checkout;
