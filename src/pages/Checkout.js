import { useState } from "react";

import ShippingDetails from "../components/forms/ShippingDetails";
import Container from "../components/Container";
import Heading from "../components/layout/Heading";
import PaymentDetails from "../components/forms/PaymentDetails";
import Review from "../components/forms/Review";

import classes from "./Checkout.module.css";


const steps = ["Shipping Details", "Payment Details", "Review"];


const getStepContent = (activeStep, handleBack, handleNext, steps) => {

  switch (activeStep) {
    case 0:
      return <ShippingDetails
        activeStep={activeStep}
        handleBack={handleBack}
        handleNext={handleNext}
        steps={steps}
      />;
    case 1:
      return <PaymentDetails
        activeStep={activeStep}
        handleBack={handleBack}
        handleNext={handleNext}
        steps={steps}
      />;
    case 2:
      return <Review
        activeStep={activeStep}
        handleBack={handleBack}
        handleNext={handleNext}
        steps={steps}
      />;
    default:
      throw new Error("Unknown step");
  }
};


const Checkout = () => {

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };


  return (
    <section>
      <div className="headingContainer">
        <Heading title="CHECKOUT" />
      </div>

      <main>
        <Container className={classes.container}>
          <h2 className={classes.heading}>
            {steps[activeStep]}
          </h2>
          <hr />
          {getStepContent(activeStep, handleBack, handleNext, steps)}
        </Container>
      </main>
    </section>
  );
};

export default Checkout;
