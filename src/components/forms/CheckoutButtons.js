import FormButton from "./FormButton";
import classes from "./CheckoutButtons.module.css";

const CheckoutButtons = ({ activeStep, handleBack, steps }) => {
    return (
        <div className={classes.btnContainer}>
            <FormButton
                disabled={activeStep === 0}
                fontClassName={classes.btnFont}
                onClick={handleBack}
                title="Back"
            />
            <FormButton
                disabled={activeStep === steps.length - 1}
                fontClassName={classes.btnFont}
                title="Next"
                type="submit"
            />

        </div>
    );
};

export default CheckoutButtons;