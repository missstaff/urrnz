import React from "react";
import classes from "./Logo.module.css";
import webp from "../../assets/logo.white.png";
import png from "../../assets/logo.white.png";

const Logo = () => {
  return (
    <picture>
      <source
        srcSet={webp}
        type="image/webp"
      />
      <source
        srcSet={png}
        type="image/png"
      />
      <img
        src={png}
        alt="Urrnz logo"
        className={classes.logo}
      />
    </picture>
  );
};

export default Logo;
