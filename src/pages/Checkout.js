import { useState } from "react";

import AddressForm from "../components/forms/AddressForm";
import Heading from "../components/layout/Heading";
import PaymentForm from "../components/forms/PaymentForm";
import Review from "../components/forms/Review";

const steps = ["Shipping address", "Payment details", "Review your order"];

const getStepContent = (step) => {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
};

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <section>
      <div className="headingContainer">
        <Heading title="CHECKOUT" />
      </div>

      <main>
        <div>
          <h3>{steps[activeStep]}</h3>
          {getStepContent(activeStep)}
          <div>
            <button onClick={handleBack} disabled={activeStep === 0}>
              Back
            </button>
            <button onClick={handleNext} disabled={activeStep === steps.length - 1}>
              Next
            </button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Checkout;
