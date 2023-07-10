import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ErrorMessage, Field, Formik, Form } from "formik";

import AddressForm from "../components/forms/AddressForm";
import Container from "../components/Container";
import FormButton from "../components/forms/FormButton";
import Heading from "../components/layout/Heading";

import { setCustomerHandler } from "../store/customer-actions";
import { addressValidationSchema, postRequestHandler } from "../utility/utils";
import { POST_MESSAGE } from "../config/constants";

import classes from "./Contact.module.css";


const Contact = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const customer = useSelector(state => state.customer);
    const shippingAddress = customer.shippingAddress;

    const store = useSelector(state => state.store);
    const chatTemplate = store.chatObjectTemplate;

    const [file, setFile] = useState("");


    const initialValues = {
        fullName: customer.customer?.fullName || "",
        email: customer.customer?.email || "",
        phone: customer.customer?.phone || "",
        addressLine1: shippingAddress?.address || "",
        addressLine2: shippingAddress?.address2 || "",
        city: shippingAddress?.city || "",
        state: shippingAddress?.stateCd || "",
        zipCode: shippingAddress?.postalCd || "",
        message: "",
    };


    const handleSubmit = async (values) => {

        dispatch(setCustomerHandler(values));

        const newChatObject = {
            ...chatTemplate,
            addresses: [{
                address: values.addressLine1,
                address2: values.addressLine1,
                addressee: values.fullName,
                city: values.city,
                postalCd: values.zipCode,
                stateCd: values.state,
                type: "shipping",
            }],
            chats: [values.message],
            file: file.name,
            email: values.email,
            name: values.fullName,
            phone: values.phone,
            type: "contact",
        };

        const response = await postRequestHandler(POST_MESSAGE, newChatObject);
        if (response.success) {
            alert("Message sent!");
            navigate("/")
        } else {
            //handle this better?
            console.log("failedresponse", response);
            alert("Failed to send message, please check the required fields.");
        }
    };


    return (
        <section className={"wrapper"}>
            <div className="headingContainer">
                <Heading title="CONTACT" />
            </div>
            <main>
                <Container className={classes.container}>
                    <h3>
                        Send us a message
                    </h3>
                    <hr style={{marginTop: `${4.4}rem`, marginBottom: `${9.8}rem`}} />
                    <Formik
                        initialValues={initialValues}
                        validationSchema={addressValidationSchema}
                        onSubmit={handleSubmit}>
                        <Form>

                            <div className={classes.form}>
                                <AddressForm />

                                <div className={classes.formSection}>
                                    <label htmlFor="message">
                                        Message:
                                    </label>
                                    <Field
                                        className={classes.textArea}
                                        as="textarea"
                                        id="message"
                                        name="message"
                                        placeholder="We will get back to you as soon as possible."
                                    />
                                </div>

                                <div className={classes.formSection}>
                                    <label htmlFor="uploadImage">
                                        Image:
                                    </label>
                                    <Field
                                        id="uploadImage"
                                        name="uploadImage"
                                        onChange={(event) => {
                                            const uploadImage = event.target.files[0];
                                            setFile(uploadImage);
                                        }}
                                        className={classes.uploadField}
                                        type="file"
                                    />
                                </div>
                                <div className={classes.btnContainer}>
                                    <FormButton title="Sumit" type="submit" />
                                </div>
                            </div>

                        </Form>
                    </Formik>
                    <hr style={{ marginBottom: `${9.8}rem` }} />
                </Container>
            </main>
        </section >
    );
};

export default Contact;