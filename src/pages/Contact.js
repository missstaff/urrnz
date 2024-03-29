import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Field, Formik, Form } from "formik";

import AddressForm from "../components/forms/AddressForm";
import Container from "../components/Container";
import FormButton from "../components/forms/FormButton";
import Heading from "../components/layout/Heading";

import { setCustomerHandler } from "../store/customer-actions";
import { addressValidationSchema, handleSubmitContact } from "../utility/utils";

import classes from "./Contact.module.css";
import SEO from '../components/SEO';

const Contact = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const customer = useSelector((state) => state.customer);
  const store = useSelector((state) => state.store);

  const [file, setFile] = useState("");
  const shippingAddress = customer.shippingAddress;
  const chatTemplate = store.chatObjectTemplate;

  const initialValues = {
    fullName: customer?.fullName || "",
    email: customer?.email || "",
    phone: customer?.phone || "",
    addressLine1: shippingAddress?.address || "",
    addressLine2: shippingAddress?.address2 || "",
    city: shippingAddress?.city || "",
    state: shippingAddress?.stateCd || "",
    zipCode: shippingAddress?.postalCd || "",
    message: "",
  };

  const handleSubmit = async (values) => {
    handleSubmitContact(
      chatTemplate,
      dispatch,
      file,
      navigate,
      setCustomerHandler,
      values
    );
  };

  return (
    <section className={classes.section}>
      <SEO
        title='Urrnz Custom 3D Printed Keepsakes'
        description='Urrnz custom 3D printed keepsakes contact information.'
        name='Urrnz.'
        type='website'
        imageUrl='../assets/logo192.png'
      />
      <Heading title="CONTACT" />
      <main>
        <Container className={classes.container}>
          <h3 className={classes.title}>Send us a message</h3>
          <Formik
            initialValues={initialValues}
            validationSchema={addressValidationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className={classes.form}>
                <AddressForm />

                <div className={classes.formSection}>
                  <label className={classes.label} htmlFor="message">
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

                <div className={classes.formButtonsContainer}>
                  <div >
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
                  <div className={classes.submit}>
                    <FormButton title="Submit" type="submit" />
                  </div>
                </div>
              </div>
            </Form>
          </Formik>
        </Container>
      </main>
    </section>
  );
};

export default Contact;
