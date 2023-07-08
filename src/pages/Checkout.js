import { useState } from 'react';
import AddressForm from '../components/forms/AddressForm';
import FormButton from '../components/forms/FormButton';
import Heading from '../components/layout/Heading';
import PaymentForm from '../components/forms/PaymentForm';
import Review from '../components/forms/Review';

const steps = ['Shipping address', 'Payment details', 'Review your order'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <section>
      <div
        className="headingContainer">
        <Heading
          title="CHECKOUT" />
      </div>

     
      <main>

    
      </main>
    </section>
  );
}