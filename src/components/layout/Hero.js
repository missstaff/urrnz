import React, { useEffect, useState } from "react";
import StoreButton from "../ui/StoreButton";
import { useScreenSize } from "../../hooks/useScreenSize";
import classes from "./Hero.module.css";
import "../../general.css";


const Hero = () => {

    const screenSize = useScreenSize();
    const [fontSize, setFontSize] = useState(0);
    const [fontVerticalPadding, setFontVerticalPadding] = useState(0);

    useEffect(() => {
        setSizes();
    }, [screenSize]);
   
    const setSizes = () => {
        if (screenSize === "default") {
            setFontSize(3.8);
            setFontVerticalPadding(3.2);
        } else if (screenSize === "xs") {
            setFontSize(5.8);
            setFontVerticalPadding(5.2);
        } else if (screenSize === "sm") {
            setFontSize(6.8);
            setFontVerticalPadding(4.2);
        } else if (screenSize === "md") {
            setFontSize(12.6);
            setFontVerticalPadding(12.2);
        }else if (screenSize === "lg") {
            setFontSize(9.6);
            setFontVerticalPadding(8.4);
        }else if (screenSize === "xl") {
            setFontSize(12.6);
            setFontVerticalPadding(9.6);
        }else if (screenSize === "xxl") {
            setFontSize(15);
            setFontVerticalPadding(15);
        }
    };


    return (
        <div className={classes.hero}>
           <div style={{alignItems: "center"}}>
           <div>
            <h1 style={{fontSize: `${fontSize}rem`, paddingBottom: `${fontVerticalPadding}rem`, paddingTop: `${fontVerticalPadding}rem`, textAlign: "left"}}>URRNZ CUSTOM KEEPSAKES</h1>
            </div>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                <StoreButton />
            </div>
           </div>
        </div>
    );
};

export default Hero;
