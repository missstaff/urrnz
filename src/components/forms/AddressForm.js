import { Field, ErrorMessage } from "formik";
import classes from "./AddressForm.module.css";

const AddressForm = () => {
  return (
    <div className={classes.rows}>
      <div className={classes.fieldWrapper}>
        <label className={classes.label} htmlFor="fullName">
          Full Name:
        </label>
        <Field
          aria-label="Full Name Input Field"
          className={`${classes.placeholderColor} ${classes.field}`}
          id="fullName"
          name="fullName"
          placeholder="John Doe"
          role="textbox"
          type="text"
          tabIndex={0}
        />
        <ErrorMessage
          className={classes.errorMessage}
          component="div"
          name="fullName"
        />
      </div>

      <div className={classes.fieldWrapper}>
        <label className={classes.label} htmlFor="email">
          Email:
        </label>
        <Field
          aria-label="Email Input Field"
          className={`${classes.placeholderColor} ${classes.field}`}
          id="email"
          name="email"
          placeholder="you@email.com"
          role="textbox"
          type="text"
          tabIndex={1}
        />

        <ErrorMessage
          className={classes.errorMessage}
          component="div"
          name="email"
        />
      </div>

      <div className={classes.fieldWrapper}>
        <label className={classes.label} htmlFor="phone">
          Phone:
        </label>
        <Field
          aria-label="Phone Input Field"
          className={`${classes.placeholderColor} ${classes.field}`}
          id="phone"
          name="phone"
          placeholder="555-555-5555"
          role="textbox"
          type="text"
          tabIndex={2}
        />

        <ErrorMessage
          className={classes.errorMessage}
          component="div"
          name="phone"
        />
      </div>

      <div className={classes.fieldWrapper}>
        <label className={classes.label} htmlFor="addressLine1">
          Address Line 1:
        </label>
        <Field
          aria-label="Address Line 1 Input Field"
          className={`${classes.placeholderColor} ${classes.field}`}
          id="addressLine1"
          name="addressLine1"
          placeholder="123 Main St."
          role="textbox"
          type="text"
          tabIndex={3}
        />
        <ErrorMessage
          className={classes.errorMessage}
          component="div"
          name="addressLine1"
        />
      </div>

      <div className={classes.fieldWrapper}>
        <label className={classes.label} htmlFor="addressLine2">
          Address Line 2:
        </label>
        <Field
          aria-label="Address Line 2 Input Field"
          className={`${classes.placeholderColor} ${classes.field}`}
          id="addressLine2"
          name="addressLine2"
          placeholder="Apt. 1"
          role="textbox"
          type="text"
          tabIndex={4}
        />
        <ErrorMessage
          className={classes.errorMessage}
          component="div"
          name="addressLine2"
        />
      </div>

      <div className={classes.fieldWrapper}>
        <label className={classes.label} htmlFor="city">
          City:
        </label>
        <Field
          aria-label="City Input Field"
          className={`${classes.placeholderColor} ${classes.field}`}
          id="city"
          name="city"
          placeholder="Anytown"
          role="textbox"
          type="text"
          tabIndex={5}
        />

        <ErrorMessage
          className={classes.errorMessage}
          component="div"
          name="city"
        />
      </div>

      <div className={classes.fieldWrapper}>
        <label className={classes.label} htmlFor="state">
          State:
        </label>
        <Field
          aria-label="State Input Field"
          className={`${classes.placeholderColor} ${classes.field}`}
          id="state"
          name="state"
          placeholder="CA"
          role="textbox"
          type="text"
          tabIndex={6}
        />

        <ErrorMessage
          className={classes.errorMessage}
          component="div"
          name="state"
        />
      </div>
      <div className={classes.fieldWrapper}>
        <label className={classes.label} htmlFor="zipCode">
          Zip Code:
        </label>
        <Field
          aria-label="Zip Code Input Field"
          className={`${classes.placeholderColor} ${classes.field}`}
          id="zipCode"
          name="zipCode"
          placeholder="12345"
          role="textbox"
          type="text"
          tabIndex={7}
        />

        <ErrorMessage
          className={classes.errorMessage}
          component="div"
          name="zipCode"
        />
      </div>
    </div>
  );
};

export default AddressForm;
