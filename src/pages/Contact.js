import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Field, Formik, Form } from "formik";
import AddressForm from "../components/forms/AddressForm";
import FormButton from "../components/forms/FormButton";
import Heading from "../components/layout/Heading";
import SEO from "../components/SEO";
import { setCustomerHandler } from "../store/customer-actions";
import { addressValidationSchema, handleSubmitContact } from "../utility/utils";
import classes from "./Contact.module.css";

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
    <>
      <SEO
        title="Urrnz Custom 3D Printed Keepsakes"
        description="Urrnz custom 3D printed keepsakes contact information."
        name="Urrnz."
        type="website"
        imageUrl="../assets/logo192.png"
      />

      <section className={classes.section}>
        <div className={classes.heading}>
          <Heading title="Contact Us" />
        </div>
        <div className={classes.container}>
          <Formik
            initialValues={initialValues}
            validationSchema={addressValidationSchema}
            onSubmit={handleSubmit}
          >
            <Form className={classes.form}>
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
                <FormButton title="Submit" type="submit" />
              </div>
            </Form>
          </Formik>
        </div>
      </section>
    </>
  );
};

export default Contact;
