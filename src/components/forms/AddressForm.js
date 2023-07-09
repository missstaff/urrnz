import { Field, ErrorMessage } from "formik";
import classes from "./AddressForm.module.css";


const AddressForm = () => {
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", marginBottom: `${1.5}rem` }}>
                <label
                    style={{
                        fontSize: `${1.8}rem`,
                    }}
                    htmlFor="fullName">
                    Full Name:
                </label>
                <Field
                    style={{
                        fontSize: `${2.4}rem`,
                        paddingTop: `${0.5}rem`,
                        paddingLeft: `${0.5}rem`,
                        fontWeight: 400,

                    }}
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="John Doe"
                    className={classes.placeholderColor}

                />
                <ErrorMessage style={{ color: "#ff5900" }} name="fullName" component="div" />
            </div>

            <div style={{ display: "flex", flexDirection: "column", marginBottom: `${1.5}rem` }}>
                <label style={{ fontSize: `${1.8}rem` }} htmlFor="email">Email:</label>
                <Field style={{
                    fontSize: `${2.4}rem`,
                    paddingTop: `${0.5}rem`,
                    paddingLeft: `${0.5}rem`,
                    fontWeight: 400,
                }}
                    type="text"
                    id="email"
                    name="email"
                    placeholder="you@email.com"
                    className={classes.placeholderColor}
                />

                <ErrorMessage style={{ color: "#ff5900" }} name="email" component="div" />
            </div>

            <div style={{ display: "flex", flexDirection: "column", marginBottom: `${1.5}rem` }}>
                <label style={{ fontSize: `${1.8}rem` }} htmlFor="phone">Phone:</label>
                <Field style={{
                    fontSize: `${2.4}rem`,
                    paddingTop: `${0.5}rem`,
                    paddingLeft: `${0.5}rem`,
                    fontWeight: 400,
                }}
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="555-555-5555"
                    className={classes.placeholderColor}
                />

                <ErrorMessage style={{ color: "#ff5900" }} name="phone" component="div" />
            </div>

            <div style={{ display: "flex", flexDirection: "column", marginBottom: `${1.5}rem` }}>
                <label style={{ fontSize: `${1.8}rem` }} htmlFor="addressLine1">Address Line 1:</label>
                <Field style={{
                    fontSize: `${2.4}rem`,
                    paddingTop: `${0.5}rem`,
                    paddingLeft: `${0.5}rem`,
                    fontWeight: 400,
                }}
                    type="text"
                    id="addressLine1"
                    name="addressLine1"
                    placeholder="123 Main St."
                    className={classes.placeholderColor}
                />
                <ErrorMessage style={{ color: "#ff5900" }} name="addressLine1" component="div" />
            </div>

            <div style={{ display: "flex", flexDirection: "column", marginBottom: `${1.5}rem` }}>
                <label style={{ fontSize: `${1.8}rem` }} htmlFor="addressLine2">Address Line 2:</label>
                <Field style={{
                    fontSize: `${2.4}rem`,
                    paddingTop: `${0.5}rem`,
                    paddingLeft: `${0.5}rem`,
                    fontWeight: 400,
                }}
                    type="text"
                    id="addressLine2"
                    name="addressLine2"
                    placeholder="Apt. 1"
                    className={classes.placeholderColor}
                />
                <ErrorMessage style={{ color: "#ff5900" }} name="addressLine2" component="div" />
            </div>

            <div style={{ display: "flex", flexDirection: "column", marginBottom: `${1.5}rem` }}>
                <label style={{ fontSize: `${1.8}rem` }} htmlFor="city">City:</label>
                <Field style={{
                    fontSize: `${2.4}rem`,
                    paddingTop: `${0.5}rem`,
                    paddingLeft: `${0.5}rem`,
                    fontWeight: 400,
                }}
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Anytown"
                    className={classes.placeholderColor}
                />

                <ErrorMessage style={{ color: "#ff5900" }} name="city" component="div" />
            </div>

            <div style={{ display: "flex", flexDirection: "column", marginBottom: `${1.5}rem` }}>
                <label style={{ fontSize: `${1.8}rem` }} htmlFor="state">State:</label>
                <Field style={{
                    fontSize: `${2.4}rem`,
                    paddingTop: `${0.5}rem`,
                    paddingLeft: `${0.5}rem`,
                    fontWeight: 400,
                }}
                    type="text"
                    id="state"
                    name="state"
                    placeholder="CA"
                    className={classes.placeholderColor}
                />

                <ErrorMessage style={{ color: "#ff5900" }} name="state" component="div" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", marginBottom: `${1.5}rem` }}>
                <label style={{ fontSize: `${1.8}rem` }} htmlFor="zipCode">Zip Code:</label>
                <Field style={{
                    fontSize: `${2.4}rem`,
                    paddingTop: `${0.5}rem`,
                    paddingLeft: `${0.5}rem`,
                    fontWeight: 400,
                }}
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    placeholder="12345"
                    className={classes.placeholderColor}
                />

                <ErrorMessage style={{ color: "#ff5900" }} name="zipCode" component="div" />
            </div>

            {/* <div style={{ display: "flex", flexDirection: "column", marginBottom: `${1.5}rem` }}>
                <label
                    style={{
                        fontSize: `${1.8}rem`,
                    }}
                    htmlFor="message">
                    Message:
                </label>
                <Field
                    style={{
                        fontSize: `${2.4}rem`,
                        paddingTop: `${0.5}rem`,
                        paddingLeft: `${0.5}rem`
                    }}
                    as="textarea"
                    id="message"
                    name="message"
                    className={classes.placeholderColor}

                />
                <ErrorMessage style={{ color: "#ff5900" }} name="message" component="div" />
            </div>  */}
        </>
    );
};

export default AddressForm;