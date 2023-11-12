import FormButton from "./FormButton";
import classes from "./CheckoutButtons.module.css";


const CheckoutButtons = ({ activeStep, handleBack, title }) => {
    return (
        <div className={classes.btnContainer}>
            <FormButton
                fontClassName={classes.btnFont}
                onClick={handleBack}
                title="Back"
            />
            <FormButton
                fontClassName={classes.btnFont}
                title={title}
                type="submit"
            />
        </div>
    );
};

export default CheckoutButtons;