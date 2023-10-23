import React from "react";
import Logo from "./Logo";
import classes from "./Footer.module.css";


const Footer = () => {
  return (
    <footer className={classes.footer}>
       <Logo />
        <p className={classes.text}>
          All Rights Reserved © {new Date().getFullYear()}
        </p>
    </footer>
  );
};

export default Footer;
