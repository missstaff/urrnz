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
    const shippingAddress = customer.customer.shippingAddress;

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
                type: "shipping"
            }],
            email: values.email,
            name: values.fullName,
            phone: values.phone,
            type: "contact",
            chats: [values.message],
            file: file.name,
        }

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
        <section>
            <div className="headingContainer">
                <Heading title="CONTACT" />
            </div>

            <main>
                <Container style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: `${9.6}rem`,
                    maxWidth: `${150}rem`,
                    marginLeft: "auto",
                    marginRight: "auto",
                    paddingLeft: `${9.8}rem`,
                    paddingRight: `${9.8}rem`,
                    paddingTop: `${4.8}rem`,
                    paddingBottom: `${4.8}rem`,
                }}>

                    <h3
                        style={{
                            color: "#ff5900",
                            fontSize: `${5}rem`,
                            paddingTop: `${4.4}rem`,
                            paddingBottom: `${4.4}rem`,
                            textAlign: "center",
                            textShadow: "2px 2px 2px rgba(0 , 0, 0, 0.25)"
                        }}>
                        Send us a message
                    </h3>

                    <Formik
                        initialValues={initialValues}
                        validationSchema={addressValidationSchema}
                        onSubmit={handleSubmit}>
                        <Form>
                            <div
                                style={{
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                    display: "flex",
                                    flexDirection: "column",
                                    width: "50%",
                                    paddingTop: `${9.6}rem`,

                                }}>

                            </div>
                            <div style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}>
                                <AddressForm />


                                <div style={{ display: "flex", flexDirection: "column", marginBottom: `${1.5}rem` }}>
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
                                            paddingLeft: `${0.5}rem`,
                                            fontWeight: 400,
                                            width: "100%",
                                            height: `${25}rem`,
                                        }}
                                        as="textarea"
                                        id="message"
                                        name="message"
                                        className={classes.placeholderColor}
                                        placeholder="We will get back to you as soon as possible."

                                    />

                                </div>

                                <div style={{ display: "flex", flexDirection: "column", marginBottom: `${1.5}rem` }}>
                                    <label style={{ fontSize: `${1.8}rem` }} htmlFor="uploadImage">
                                        Upload Image:
                                    </label>
                                    <Field
                                        style={{
                                            fontSize: `${2.4}rem`,
                                            paddingTop: `${0.5}rem`,
                                            paddingLeft: `${0.5}rem`,
                                            fontWeight: 400,
                                        }}
                                        type="file"
                                        id="uploadImage"
                                        name="uploadImage"
                                        onChange={(event) => {
                                            const uploadImage = event.target.files[0];
                                            setFile(uploadImage);
                                        }}
                                    />
                                    <ErrorMessage style={{ color: "#ff5900" }} name="uploadImage" component="div" />
                                </div>


                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center", marginBottom: `${9.6}rem`, gap: `${2.5}rem` }}>

                                    <FormButton title="Sumit" type="submit" />
                                </div>
                            </div>

                        </Form>
                    </Formik>


                </Container>
            </main>
        </section >
    );
};

export default Contact;