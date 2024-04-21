import "react-toastify/dist/ReactToastify.css";
import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import App from "./App";
import store from "./store/index.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
    <ToastContainer className="toast" />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals((metric) => {
  const { name, value } = metric;

  // Send the metric to Google Analytics
  if (
    name === "CLS" ||
    name === "FID" ||
    name === "FCP" ||
    name === "LCP" ||
    name === "TTFB"
  ) {
    gtag("event", name, {
      event_category: "Web Vitals",
      event_label: name,
      value: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
      non_interaction: true, // avoids affecting bounce rate
    });
  }
});
