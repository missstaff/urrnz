import * as Yup from "yup";
import { toast } from "react-toastify";

import { clearCartHandler, setTaxRateHandler, setShippingOptionHandler } from "../store/cart-actions";
import { clearCustomerHandler, setCustomerHandler } from "../store/customer-actions";
import { FETCH_TAX, POST_MESSAGE, POST_ORDER, SIZES } from "../config/constants";


export const isMatch = (media) => {
  const query = `(min-width: ${SIZES[media]})`;
  return window.matchMedia(query).matches;
};

export const findClosest = (queries) => {
  for (let i = queries.length - 1; i >= 0; i--) {
    if (isMatch(queries[i])) {
      return queries[i];
    }
  }
  return "xs";
};

export const postRequestHandler = async (url, data) => {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    return json;
  } catch (err) {
    throw new Error(`Error: Failed to send post request.\n${err.message}\n${err.stack}`);
  }
};

export const handleSubmitContact = async (
  chatTemplate,
  dispatch,
  file,
  navigate,
  setCustomerHandler,
  values
) => {

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
    toast.success("Message sent!.",
      {
        toastId: "message-sent",
        autoClose: 2500,
        position: "top-center",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
    navigate("/")
  } else {

    toast.error("Failed to send message! Please try again.",
      {
        toastId: "error-adding-cart-item",
        autoClose: 5000,
        position: "top-center",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  }
};


export const handleSubmitShipping = async (
  dispatch,
  handleNext,
  isShippingSameAsBilling,
  shippingOption,
  store,
  values,
) => {

  const { orderTemplate, shippingOptions } = store;

  const newValues = {
    ...values,
    isShippingSameAsBilling: isShippingSameAsBilling,
  }

  dispatch(setShippingOptionHandler(shippingOptions[shippingOption]));
  dispatch(setCustomerHandler(newValues));

  const updatedOrderTemplate = {
    ...orderTemplate,
    addresses: [{
      address: newValues.addressLine1,
      address2: newValues.addressLine1,
      addressee: newValues.fullName,
      city: newValues.city,
      postalCd: newValues.zipCode,
      stateCd: newValues.state,
      type: "shipping"
    }],
    email: newValues.email,
    name: newValues.fullName,
    phone: newValues.phone,
  };

  const res = await postRequestHandler(FETCH_TAX, updatedOrderTemplate);

  if (res?.errors) {
    const error = res.errors.major[0];
    console.warn(`Could not fetch tax rate\nLocation: ShippingDetails.js, handleSubmit\n ${error}`);

    toast.error("Invalid zipcode please try again.",
      {
        toastId: "invalid-zipcode",
        autoClose: 5000,
        position: "top-center",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    return;
  }
  const taxRate = await res.response.taxRate;
  dispatch(setTaxRateHandler(taxRate));
  handleNext();
};

export const handleSubmitOrder = async (
  cart,
  customer,
  dispatch,
  navigate,
  orderTemplate,
  total,
  ) => {

  const orderItems = [];
  const items = cart.items;
  const shipping = cart.shipping;
  const email = customer.email;
  const phone = customer.phone;
  const chatObject = customer.chatObject;
  const shippingAddress = customer.shippingAddress;
  const billingAddress = customer.billingAddress;
  let transactionObject = customer.transactionObject;

  toast.info("Submitting order...",
    {
      toastId: "loading-submitting-order",
      autoClose: 1000,
      position: "top-center",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  items.forEach((item) => {
    let temp = {};
    let count = item.quantity;
    for (let i = 0; i < count; i++) {
      temp.dateOrdered = new Date();
      temp.color = item.color;
      temp.name = item.name;
      temp.price = item.price;
      temp.sku8 = item.sku8;
      temp.isTaxable = item.isTaxable;
      orderItems.push(temp);
    }
  });

  orderItems.push(shipping);

  const order = {
    ...orderTemplate,
    addresses: [billingAddress, shippingAddress],
    chats: [chatObject],
    email: email,
    items: orderItems,
    dateOrdered: new Date(),
    phone: phone,
    transactions: [transactionObject = {
      ...transactionObject,
      amount: total,
    }],
  };


  const res = await postRequestHandler(POST_ORDER, order);

  if (!res.response.transactions[0].success) {
    const error = res.messages.primary;
    console.warn(`Error submitting order\n Location: Review.js handleSubmit\n ${error}`);
    setTimeout(() => {
      toast.error("Error submitting order.",
        {
          toastId: "error-submitting-order",
          autoClose: 5000,
          position: "top-center",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
    }, 1000);
    return;
  } else {
    navigate("/thank-you");
    dispatch(clearCartHandler());
    dispatch(clearCustomerHandler());
  }
};


//VALIDATION SCHEMAS
export const addressValidationSchema = Yup.object().shape({
  email: Yup
    .string()
    .email("Please enter valid email")
    .required("Email is required"),
  fullName: Yup
    .string()
    .matches(/^[a-zA-Z]\w*\s[a-zA-Z]{2,}.*$/, "Enter at least 2 names")
    .required("Full name is required"),
  phone: Yup
    .string()
    .matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/, "Enter a valid phone number")
    .required("A phone number is required"),
  zipCode: Yup
    .string()
    .matches(/^[0-9]{5}$/, "zipcodes must be 5 digits")
    .required("A zipcode is required"),
  city: Yup
    .string()
    .matches(/^[A-Za-z ]{2,30}$/, "Enter a city")
    .required("A city is required"),
  state: Yup
    .string()
    .matches(/^[a-zA-Z]{2}$/, "Enter state abbreviation")
    .required("A state is required"),
  addressLine1: Yup
    .string()
    .matches(/^[a-zA-Z0-9\s\.\#\-]+$/, "Enter a valid street address")
    .required("A street address or P.O Box required"),
  message: Yup
    .string()
    .notRequired(),
  uploadImage: Yup
    .string()
    .notRequired(),
});

export const cardValidationSchema = Yup.object().shape({
  cc_number: Yup
    .string()
    .matches(/^[0-9]{4}[-\s]?[0-9]{4}[-\s]?[0-9]{4}[-\s]?[0-9]{4}/, "Card number must be 16 digits")
    .test("luhn-test", "Card number is invalid", function (value) {
      if (!value) {
        return false;
      }
      const digits = value.replace(/[\s-]/g, "").split("").reverse();
      let sum = 0;
      for (let i = 0; i < digits.length; i++) {
        let digit = parseInt(digits[i]);
        if (i % 2 === 1) {
          digit *= 2;
          if (digit > 9) digit -= 9;
        }
        sum += digit;
      }
      return sum % 10 === 0;
    })
    .required(),
  ccv: Yup
    .string()
    .matches(/^[0-9]{3,4}$/, "CCV code is invalid")
    .required(),
  month: Yup
    .string()
    .matches(/^(0[1-9]|1[0-2])$/, "Month must be in MM format")
    .test("is-greater-than-current-month", "Date must be greater than or equal to the current date", function (value) {
      if (value) {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth() + 1;
        const yearNumber = parseInt(this.parent.year, 10);
        const monthNumber = parseInt(value, 10);

        if (yearNumber > currentYear) {
          return true;
        } else if (yearNumber === currentYear && monthNumber >= currentMonth) {
          return true;
        } else {
          return false;
        }
      }
      return true;
    })
    .required("Month required"),
  year: Yup
    .string()
    .matches(/^[0-9]{4}$/, "Year must be in YYYY format")
    .test("is-greater-than-current-year", "Year must be greater than or equal to the current year", value => {
      if (value) {
        const currentYear = new Date().getFullYear();
        const yearNumber = parseInt(value, 10);
        return yearNumber >= currentYear;
      }
      return true;
    })
    .required("Year required"),
});

export const addressAndCardValidationSchema = Yup.object().shape({
  email: Yup
    .string()
    .email("Please enter valid email")
    .required("Email is required"),
  fullName: Yup
    .string()
    .matches(/^[a-zA-Z]\w*\s[a-zA-Z]{2,}.*$/, "Enter at least 2 names")
    .required("Full name is required"),
  phone: Yup
    .string()
    .matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/, "Enter a valid phone number")
    .required(),
  zipCode: Yup
    .string()
    .matches(/^[0-9]{5}$/, "zipcodes must be 5 digits")
    .required("A zipcode is required"),
  city: Yup
    .string()
    .matches(/^[A-Za-z ]{2,30}$/, "Enter a city")
    .required("A city is required"),
  state: Yup
    .string()
    .matches(/^[a-zA-Z]{2}$/, "Enter state abbreviation")
    .required("A state is required"),
  addressLine1: Yup
    .string()
    .matches(/^[a-zA-Z0-9\s\.\#\-]+$/, "Enter a valid street address")
    .required("A street address or P.O Box required"),
  cc_number: Yup
    .string()
    .matches(/^[0-9]{4}[-\s]?[0-9]{4}[-\s]?[0-9]{4}[-\s]?[0-9]{4}/, "Card number must be 16 digits")
    .test("luhn-test", "Card number is invalid", function (value) {
      if (!value) {
        return false;
      }
      const digits = value.replace(/[\s-]/g, "").split("").reverse();
      let sum = 0;
      for (let i = 0; i < digits.length; i++) {
        let digit = parseInt(digits[i]);
        if (i % 2 === 1) {
          digit *= 2;
          if (digit > 9) digit -= 9;
        }
        sum += digit;
      }
      return sum % 10 === 0;
    })
    .required(),
  ccv: Yup
    .string()
    .matches(/^[0-9]{3,4}$/, "CCV code is invalid")
    .required(),
  month: Yup
    .string()
    .matches(/^(0[1-9]|1[0-2])$/, "Month must be in MM format")
    .test("is-greater-than-current-month", "Date must be greater than or equal to the current date", function (value) {
      if (value && this.parent.year) {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth() + 1;
        const yearNumber = parseInt(this.parent.year, 10);
        const monthNumber = parseInt(value, 10);

        if (yearNumber > currentYear) {
          return true;
        } else if (yearNumber === currentYear && monthNumber >= currentMonth) {
          return true;
        } else {
          return false;
        }
      }
      return true;
    })
    .required("Month required"),
  year: Yup
    .string()
    .matches(/^[0-9]{4}$/, "Year must be in YYYY format")
    .test("is-greater-than-current-year", "Year must be greater than or equal to the current year", value => {
      if (value) {
        const currentYear = new Date().getFullYear();
        const yearNumber = parseInt(value, 10);
        return yearNumber >= currentYear;
      }
      return true;
    })
    .required("Year required"),
  message: Yup
    .string()
    .notRequired(),
});