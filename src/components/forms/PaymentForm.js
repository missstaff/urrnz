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
                        htmlFor="cc_number">
                        Card Number:
                    </label>
                    <Field
                        style={{
                            fontSize: `${2.4}rem`,
                            paddingTop: `${0.5}rem`,
                            paddingLeft: `${0.5}rem`
                        }}
                        type="text"
                        id="cc_number"
                        name="cc_number"
                    />
                    <ErrorMessage style={{ color: "#ff5900" }} name="cc_number" component="div" />
                </div>

                <div style={{alignItems: "center", display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginBottom: `${1.5}rem`, width: "100%" }}>
                    <div style={{ display: "flex", flexDirection: "column", marginBottom: `${1.5}rem`, width: "33%" }}>
                        <label htmlFor="ccv">CCV:</label>
                        <Field style={{
                            fontSize: `${2.4}rem`,
                            paddingTop: `${0.5}rem`,
                            paddingLeft: `${0.5}rem`
                        }}
                            type="text"
                            id="ccv"
                            name="ccv"
                             />

                        <ErrorMessage style={{ color: "#ff5900" }} name="ccv" component="div" />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", marginBottom: `${1.5}rem`, width: "33%" }}>
                        <label htmlFor="month">Month</label>
                        <Field style={{
                            fontSize: `${2.4}rem`,
                            paddingTop: `${0.5}rem`,
                            paddingLeft: `${0.5}rem`
                        }}
                            type="text"
                            id="month"
                            name="month"
                            />

                        <ErrorMessage style={{ color: "#ff5900" }} name="month" component="div" />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", marginBottom: `${1.5}rem`, width: "33%", gap: `${0.15}rem` }}>
                        <label htmlFor="year">Year</label>
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