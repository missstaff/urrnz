import React from "react";
import classes from "./Logo.module.css";


const Logo = () => {

    return (
        <picture>
            <source
                srcSet={require("../../assets/logo.h200.beige.webp")}
                type="image/webp"
            />
            <source
                srcSet={require("../../assets/logo.h200.beige.png")}
                type="image/png"
            />
            <img
                src={require("../../assets/logo.h200.beige.png")}
                alt="Urrnz logo"
                className={classes.logo}
            />
        </picture>
    );
};

export default Logo;