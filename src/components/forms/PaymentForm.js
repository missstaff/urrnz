import { Field, ErrorMessage } from "formik";

const PaymentForm = () => {
    return (
        <>
            <div style={{ width: "100%" }}>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        width: "100%",
                        marginBottom: `${2.2}rem`,
                    }}
                >
                </div>

                <div style={{ display: "flex", flexDirection: "column", marginBottom: `${1.5}rem` }}>
                    <label
                        style={{
                            fontSize: `${1.8}rem`,
                        }}
                        htmlFor="cardNumber">
                        Card Number:
                    </label>
                    <Field
                        style={{
                            fontSize: `${2.4}rem`,
                            paddingTop: `${0.5}rem`,
                            paddingLeft: `${0.5}rem`
                        }}
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                    />
                    <ErrorMessage style={{ color: "#ff5900" }} name="cardNumber" component="div" />
                </div>

                <div style={{alignItems: "center", display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginBottom: `${1.5}rem`, width: "100%" }}>
                    <div style={{ display: "flex", flexDirection: "column", marginBottom: `${1.5}rem`, width: "33%" }}>
                        <label style={{ fontSize: `${1.8}rem` }} htmlFor="cvv">CVV:</label>
                        <Field style={{
                            fontSize: `${2.4}rem`,
                            paddingTop: `${0.5}rem`,
                            paddingLeft: `${0.5}rem`
                        }}
                            type="text"
                            id="cvv"
                            name="cvv" />

                        <ErrorMessage style={{ color: "#ff5900" }} name="cvv" component="div" />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", marginBottom: `${1.5}rem`, width: "33%" }}>
                        <label style={{ fontSize: `${1.8}rem` }} htmlFor="phone">Month</label>
                        <Field style={{
                            fontSize: `${2.4}rem`,
                            paddingTop: `${0.5}rem`,
                            paddingLeft: `${0.5}rem`
                        }}
                            type="text"
                            id="month"
                            name="month" />

                        <ErrorMessage style={{ color: "#ff5900" }} name="month" component="div" />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", marginBottom: `${1.5}rem`, width: "33%", gap: `${0.15}rem` }}>
                        <label style={{ fontSize: `${1.8}rem` }} htmlFor="addressLine1">Year</label>
                        <Field style={{
                            fontSize: `${2.4}rem`,
                            paddingTop: `${0.5}rem`,
                            paddingLeft: `${0.5}rem`
                        }}
                            type="text"
                            id="year"
                            name="year"
                        />
                        <ErrorMessage style={{ color: "#ff5900" }} name="year" component="div" />
                    </div>
                </div>

            </div>
        </>
    );

};

export default PaymentForm;