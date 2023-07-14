import { Field, ErrorMessage } from "formik";
import classes from "./AddressForm.module.css";


const AddressForm = () => {
    return (
        <>
            <div className={classes.fieldWrapper}>
                <label
                    htmlFor="fullName">
                    Full Name:
                </label>
                <Field
                    className={`${classes.placeholderColor} ${classes.field}`}
                    id="fullName"
                    name="fullName"
                    placeholder="John Doe"
                    type="text"
                />
                <ErrorMessage
                    className={classes.errorMessage}
                    component="div"
                    name="fullName" />
            </div>

            <div className={classes.fieldWrapper}>
                <label htmlFor="email">
                    Email:
                </label>
                <Field
                    className={`${classes.placeholderColor} ${classes.field}`}
                    id="email"
                    name="email"
                    placeholder="you@email.com"
                    type="text"
                />

                <ErrorMessage
                    className={classes.errorMessage}
                    component="div"
                    name="email" />
            </div>

            <div className={classes.fieldWrapper}>
                <label htmlFor="phone">Phone:</label>
                <Field
                    className={`${classes.placeholderColor} ${classes.field}`}
                    id="phone"
                    name="phone"
                    placeholder="555-555-5555"
                    type="text"
                />

                <ErrorMessage
                    className={classes.errorMessage}
                    component="div"
                    name="phone" />
            </div>

            <div className={classes.fieldWrapper}>
                <label htmlFor="addressLine1">Address Line 1:</label>
                <Field
                    className={`${classes.placeholderColor} ${classes.field}`}
                    id="addressLine1"
                    name="addressLine1"
                    placeholder="123 Main St."
                    type="text"
                />
                <ErrorMessage
                    className={classes.errorMessage}
                    component="div"
                    name="addressLine1" />
            </div>

            <div className={classes.fieldWrapper}>
                <label htmlFor="addressLine2">Address Line 2:</label>
                <Field
                    className={`${classes.placeholderColor} ${classes.field}`}
                    id="addressLine2"
                    name="addressLine2"
                    placeholder="Apt. 1"
                    type="text"
                />
                <ErrorMessage
                    className={classes.errorMessage}
                    component="div"
                    name="addressLine2" />
            </div>

            <div className={classes.fieldWrapper}>
                <label htmlFor="city">City:</label>
                <Field
                    className={`${classes.placeholderColor} ${classes.field}`}
                    id="city"
                    name="city"
                    placeholder="Anytown"
                    type="text"
                />

                <ErrorMessage
                    className={classes.errorMessage}
                    component="div"
                    name="city" />
            </div>

            <div className={classes.fieldWrapper}>
                <label htmlFor="state">State:</label>
                <Field
                    className={`${classes.placeholderColor} ${classes.field}`}
                    id="state"
                    name="state"
                    placeholder="CA"
                    type="text"
                />

                <ErrorMessage
                    className={classes.errorMessage}
                    component="div"
                    name="state" />
            </div>
            <div className={classes.fieldWrapper}>
                <label htmlFor="zipCode">Zip Code:</label>
                <Field
                    className={`${classes.placeholderColor} ${classes.field}`}
                    id="zipCode"
                    name="zipCode"
                    placeholder="12345"
                    type="text"
                />

                <ErrorMessage
                    className={classes.errorMessage}
                    component="div"
                    name="zipCode" />
            </div>
        </>
    );
};

export default AddressForm;