import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../components/Container";
import Heading from "../components/layout/Heading";
import PaymentDetails from "../components/forms/PaymentDetails";
import Review from "../components/forms/Review";
import SEO from "../components/SEO";
import ShippingDetails from "../components/forms/ShippingDetails";
import ShippingOptions from "../components/forms/ShippingOptions";
import { CHECKOUT_STEPS } from "../config/constants";
import classes from "./Checkout.module.css";

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
        <ShippingOptions
          activeStep={activeStep}
          handleBack={handleBack}
          handleNext={handleNext}
        />
      );
    case 2:
      return (
        <PaymentDetails
          activeStep={activeStep}
          handleBack={handleBack}
          handleNext={handleNext}
        />
      );
    case 3:
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
    if (activeStep === 0) {
      navigate("/cart");
    }
    setActiveStep((prevStep) => prevStep - 1);
  };

  return (
    <>
      <SEO
        title="Urrnz Custom 3D Printed Keepsakes"
        description="Urrnz custom 3D printed keepsakes checkout."
        name="Urrnz."
        type="website"
        imageUrl="../assets/logo192.png"
      />
      <section className={classes.section}>
        <Heading title={CHECKOUT_STEPS[activeStep]} />
            {getStepContent(activeStep, handleBack, handleNext)}
      </section>
    </>
  );
};

export default Checkout;
