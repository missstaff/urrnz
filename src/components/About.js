import Container from "./Container";
import { ABOUT_TEXT } from "../config/constants";
import ReactGA from "react-ga";
import classes from "./About.module.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    ReactGA.event({
      category: "User",
      action: "User visited the about page",
    });
  }, []);
  return (
    <div className={classes.container}>
    {ABOUT_TEXT.map((text, index) => {
      return (
        <p key={index} className={classes.text}>
          {text}
        </p>
      );
    })}
  </div>
  );
};

export default About;
