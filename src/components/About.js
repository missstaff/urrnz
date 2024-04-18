import { ABOUT_TEXT } from "../config/constants";
import ReactGA from "react-ga";
import classes from "./About.module.css";
import { useEffect } from "react";
import Heading from "./layout/Heading";

const About = () => {
  const size = window.innerWidth
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    ReactGA.event({
      category: "User",
      action: "User visited the about page",
    });
  }, []);
  return (
    <div id="about" className={classes.container}>
  <Heading title="ABOUT" style={{paddingTop: size < 1450 ? "5.4rem" : ""}} />
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
