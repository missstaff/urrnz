import React, { useEffect, useState } from "react";

import StoreButton from "../ui/StoreButton";
import { useScreenSize } from "../../hooks/useScreenSize";

import classes from "./Hero.module.css";
import "../../general.css";


const Hero = () => {

    return (
        <div className={classes.hero}>
            <div className={classes.content}>
                <h1 className={classes.title}>
                    URRNZ CUSTOM KEEPSAKES
                </h1>
                <StoreButton
                    to="/products/all"
                    title="SHOP NOW"
                    style={{ fontSize: `${4.8}rem`, }}
                />
            </div>
        </div>
    );
};

export default Hero;
