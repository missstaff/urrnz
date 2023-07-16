import React from "react";
import classes from "./Logo.module.css";


const Logo = () => {

    return (
        <picture>
            {/* WebP image source */}
            <source
                srcSet={require("../../assets/logo.h200.beige.webp")}
                type="image/webp"
            />
            {/* PNG image source */}
            <source
                srcSet={require("../../assets/logo.h200.beige.png")}
                type="image/png"
            />
            {/* Fallback image */}
            <img
                src={require("../../assets/logo.h200.beige.png")}
                alt="Urrnz logo"
                className={classes.logo}
            />
        </picture>
    );
};

export default Logo;