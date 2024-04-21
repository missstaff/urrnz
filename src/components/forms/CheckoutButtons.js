import FormButton from "./FormButton";
import classes from "./CheckoutButtons.module.css";

const CheckoutButtons = ({ activeStep, handleBack, title }) => {
  console.log({activeStep})
  return (
    <div className={classes.btnContainer}>
      <FormButton
        aria-label="checkout buttons"
        fontClassName={classes.btnFont}
        onClick={handleBack}
        role="button"
        tabIndex={activeStep}
        title="Back"
      />
      <FormButton fontClassName={classes.btnFont} title={title} type="submit" />
    </div>
  );
};

export default CheckoutButtons;
