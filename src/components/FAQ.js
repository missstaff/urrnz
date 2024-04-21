import { useEffect } from "react";
import ReactGA from "react-ga";
import Heading from "./layout/Heading";
import { FAQ_ANSWERS, FAQ_QUESTIONS } from "../config/constants";
import classes from "./FAQ.module.css";

/**
 * Renders the Frequently Asked Questions (FAQ) component.
 * This component displays a list of questions and answers.
 *
 * @returns {JSX.Element} The rendered FAQ component.
 */
const FAQ = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    ReactGA.event({
      category: "User",
      action: "User visited the FAQ page",
    });
  }, []);
  return (
    <div className={classes.container}>
      <Heading title="FAQs" />
      {FAQ_QUESTIONS.map((question, index) => {
        return (
          <div key={index}>
            <h2 className={classes.topic} role="heading">{question}</h2>
            <p className={classes.text}>{FAQ_ANSWERS[index]}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FAQ;
