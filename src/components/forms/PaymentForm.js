import { Field, ErrorMessage } from "formik";
import classes from "./PaymentForm.module.css";


const PaymentForm = () => {
    return (
        <div className={classes.formWrapper}>
            <div className={classes.fieldLargeWrapper}>
                <label htmlFor="cc_number">
                    Card Number:
                </label>
                <Field
                    className={`${classes.placeholderColor} ${classes.field}`}
                    id="cc_number"
                    name="cc_number"
                    placeholder="1234567887654321"
                    type="text"
                />
                <ErrorMessage
                    className={classes.errorMessage}
                    component="div"
                    name="cc_number"
                />
            </div>
            
            <div className={classes.smallInputContainer}>
                <div className={classes.fieldSmallWrapper}>
                    <label htmlFor="ccv">CCV:</label>
                    <Field
                        className={`${classes.placeholderColor} ${classes.field}`}
                        id="ccv"
                        name="ccv"
                        placeholder="123"
                        type="text"
                    />

                    <ErrorMessage
                        className={classes.errorMessage}
                        component="div"
                        name="ccv"
                    />
                </div>

                <div className={classes.fieldSmallWrapper}>
                    <label htmlFor="month">Month</label>
                    <Field
                        className={`${classes.placeholderColor} ${classes.field}`}
                        id="month"
                        name="month"
                        placeholder="01"
                        type="text"
                    />

                    <ErrorMessage
                        className={classes.errorMessage}
                        component="div"
                        name="month"
                    />
                </div>

                <div className={classes.fieldSmallWrapper}>
                    <label htmlFor="year">Year</label>
                    <Field
                        className={`${classes.placeholderColor} ${classes.field}`}
                        id="year"
                        name="year"
                        placeholder="2023"
                        type="text"
                    />
                    <ErrorMessage
                        className={classes.errorMessage}
                        component="div"
                        name="year"
                    />
                </div>
            </div>
        </div>
    );
};

export default PaymentForm;