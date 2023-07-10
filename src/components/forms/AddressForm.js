import { Field, ErrorMessage } from "formik";
import classes from "./AddressForm.module.css";


const AddressForm = () => {
    return (
        <>
            <div cclassName={classes.fieldWrapper}>
                <label
                    htmlFor="fullName">
                    Full Name:
                </label>
                <Field
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="John Doe"
                    className={`${classes.placeholderColor} ${classes.field}`}

                />
                <ErrorMessage className={classes.errorMessage} name="fullName" component="div" />
            </div>

            <div className={classes.fieldWrapper}>
                <label 
                    htmlFor="email">Email:</label>
                <Field 
                    type="text"
                    id="email"
                    name="email"
                    placeholder="you@email.com"
                    className={`${classes.placeholderColor} ${classes.field}`}
                />

                <ErrorMessage className={classes.errorMessage} name="email" component="div" />
            </div>

            <div className={classes.fieldWrapper}>
                <label htmlFor="phone">Phone:</label>
                <Field 
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="555-555-5555"
                    className={`${classes.placeholderColor} ${classes.field}`}
                />

                <ErrorMessage className={classes.errorMessage} name="phone" component="div" />
            </div>

            <div className={classes.fieldWrapper}>
                <label htmlFor="addressLine1">Address Line 1:</label>
                <Field 
                    type="text"
                    id="addressLine1"
                    name="addressLine1"
                    placeholder="123 Main St."
                    className={`${classes.placeholderColor} ${classes.field}`}
                />
                <ErrorMessage className={classes.errorMessage} name="addressLine1" component="div" />
            </div>

            <div className={classes.fieldWrapper}>
                <label htmlFor="addressLine2">Address Line 2:</label>
                <Field
                    type="text"
                    id="addressLine2"
                    name="addressLine2"
                    placeholder="Apt. 1"
                    className={`${classes.placeholderColor} ${classes.field}`}
                />
                <ErrorMessage className={classes.errorMessage} name="addressLine2" component="div" />
            </div>

            <div className={classes.fieldWrapper}>
                <label htmlFor="city">City:</label>
                <Field
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Anytown"
                    className={`${classes.placeholderColor} ${classes.field}`}
                />

                <ErrorMessage className={classes.errorMessage} name="city" component="div" />
            </div>

            <div className={classes.fieldWrapper}>
                <label htmlFor="state">State:</label>
                <Field 
                    type="text"
                    id="state"
                    name="state"
                    placeholder="CA"
                    className={`${classes.placeholderColor} ${classes.field}`}
                />

                <ErrorMessage className={classes.errorMessage} name="state" component="div" />
            </div>
            <div className={classes.fieldWrapper}>
                <label htmlFor="zipCode">Zip Code:</label>
                <Field 
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    placeholder="12345"
                    className={`${classes.placeholderColor} ${classes.field}`}
                />

                <ErrorMessage className={classes.errorMessage} name="zipCode" component="div" />
            </div>
        </>
    );
};

export default AddressForm;