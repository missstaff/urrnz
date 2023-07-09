import * as Yup from "yup";
import { sizes } from "../config/constants";

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
    console.log(`Error: Failed to send post request.\n${err.message}\n${err.stack}`)
  }
};

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
});

export  const cardValidationSchema = Yup.object().shape({
  cardNumber: Yup
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
  cvv: Yup
    .string()
    .matches(/^[0-9]{3,4}$/, "CVV code is invalid")
    .required(),
  month: Yup
    .string()
    .matches(/^(0[1-9]|1[0-2])$/, "Month must be in MM format")
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