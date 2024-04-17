import Container from "./Container";
import { FAQ_ANSWERS, FAQ_QUESTIONS } from "../config/constants";
import classes from "./FAQ.module.css";
import ReactGA from "react-ga";
import { useEffect } from "react";

const FAQ = () => {
  const size = window.innerWidth
  const margin = size < 1000 ? "9.8rem" : "25rem";

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    ReactGA.event({
      category: "User",
      action: "User visited the FAQ page",
    });
  }, []);
  return (
    <div className={classes.container}>
      {FAQ_QUESTIONS.map((question, index) => {
        return (
          <div key={index}>
            <h2 className={classes.title}>{question}</h2>
              <p className={classes.text}>{FAQ_ANSWERS[index]}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FAQ;
