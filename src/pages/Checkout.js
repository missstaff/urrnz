import { useState } from "react";

import AddressForm from "../components/forms/AddressForm";
import Container from "../components/Container";
import Heading from "../components/layout/Heading";
import PaymentForm from "../components/forms/PaymentForm";
import Review from "../components/forms/Review";

const steps = ["Shipping Details", "Payment Details", "Review"];

const getStepContent = (activeStep, handleBack, handleNext, steps) => {

  switch (activeStep) {
    case 0:
      return <AddressForm activeStep={activeStep} handleBack={handleBack} handleNext={handleNext} steps={steps} />;
    case 1:
      return <PaymentForm activeStep={activeStep} handleBack={handleBack} handleNext={handleNext} steps={steps} />;
    case 2:
      return <Review activeStep={activeStep} handleBack={handleBack} handleNext={handleNext} steps={steps} />;
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
        <Container style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: `${9.6}rem`,
          maxWidth: `${150}rem`,
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: `${9.8}rem`,
          paddingRight: `${9.8}rem`,
          paddingTop: `${4.8}rem`,
          paddingBottom: `${4.8}rem`,
        }}>
          <h2 style={{ fontSize: `${5}rem`, paddingTop: `${4.4}rem`, paddingBottom: `${9.6}rem`, textAlign: "center" }}>{steps[activeStep]}</h2>
          <hr />
          {getStepContent(activeStep, handleBack, handleNext, steps)}
        </Container>
      </main>
    </section>
  );
};

export default Checkout;
