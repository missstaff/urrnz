import React, { useEffect, useState } from "react";
import StoreButton from "../ui/StoreButton";
import { useScreenSize } from "../../hooks/useScreenSize";
import classes from "./Hero.module.css";
import "../../general.css";


const Hero = () => {

    const screenSize = useScreenSize();
    const [btnFontSize, setBtnFontSize] = useState(2.2);
    const [fontSize, setFontSize] = useState(0);
    const [verticalSpacing, setVerticalSpacing] = useState(0);

    useEffect(() => {
        setSizes();
    }, [screenSize]);

    const setSizes = () => {
        if (screenSize === "default") {
            setBtnFontSize(2.6);
            setFontSize(3.4);
            setVerticalSpacing(3.2);
        } else if (screenSize === "xs") {
            setBtnFontSize(3.0);
            setFontSize(4.8);
            setVerticalSpacing(2.8);
        } else if (screenSize === "sm") {
            setBtnFontSize(3.2);
            setFontSize(4.8);
            setVerticalSpacing(4.2);
        } else if (screenSize === "md") {
            setBtnFontSize(3.4);
            setFontSize(5.6);
            setVerticalSpacing(2.4);
        } else if (screenSize === "lg") {
            setBtnFontSize(4.4);
            setFontSize(10.8);
            setVerticalSpacing(3.2);
        } else if (screenSize === "xl") {
            setBtnFontSize(5.2);
            setFontSize(12.6);
            setVerticalSpacing(5.6);
        } else if (screenSize === "xxl") {
            setBtnFontSize(6.4);
            setFontSize(15);
            setVerticalSpacing(6.8);
        }
    };
    console.log("screenSize", screenSize)

    return (
        <div className={classes.hero}>
            <div className={classes.content}>
                <h1
                    className={classes.title}
                    style={{
                        fontSize: `${fontSize}rem`,
                        marginBottom: `${verticalSpacing}rem`,

                        textAlign: "left",
                        width: "75%",
                    }}>
                    <p style={{ textTransform: "uppercase" }}>URRNZ CUSTOM KEEPSAKES</p>
                </h1>
                <div style={{ marginTop: `${verticalSpacing}rem` }}>
                    <StoreButton style={{ fontSize: `${btnFontSize}rem`, }} />
                </div>
            </div>
        </div>
    );
};


export default Hero;
