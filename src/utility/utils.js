import * as Yup from "yup";
import { toast } from "react-toastify";
import { POST_MESSAGE, sizes } from "../config/constants";


export const isMatch = (media) => {
  const query = `(min-width: ${sizes[media]})`;
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
    console.log("failedresponse", response);
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