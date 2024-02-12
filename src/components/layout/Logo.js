import React from "react";
import classes from "./Logo.module.css";


const Logo = () => {

    return (
        <picture>
            <source
                srcSet={require("../../assets/logo.white.png")}
                type="image/webp"
            />
            <source
                srcSet={require("../../assets/logo.white.png")}
                type="image/png"
            />
            <img
                src={require("../../assets/logo.white.png")}
                alt="Urrnz logo"
                className={classes.logo}
            />
        </picture>
    );
};

export default Logo;