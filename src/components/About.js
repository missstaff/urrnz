import { ABOUT_TEXT } from "../config/constants";
import ReactGA from "react-ga";
import { useEffect } from "react";
import Heading from "./layout/Heading";
import classes from "./About.module.css";

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
    <div className={classes.container} id="about">
      <Heading title="ABOUT" style={{ paddingTop: size < 1450 ? "5.4rem" : "" }} />
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
