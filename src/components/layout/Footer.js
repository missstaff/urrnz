import React from "react";
import Logo from "./Logo";
import classes from "./Footer.module.css";

/**
 * Footer component.
 * Renders the footer section of the website.
 *
 * @returns {JSX.Element} The rendered footer component.
 */
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <Logo />
        <p className={classes.text}>
          All Rights Reserved © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
