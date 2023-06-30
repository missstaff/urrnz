import React, { useEffect, useState } from "react";
import StoreButton from "../ui/StoreButton";
import { useScreenSize } from "../../hooks/useScreenSize";
import classes from "./Hero.module.css";
import "../../general.css";


const Hero = () => {

    const screenSize = useScreenSize();
    const [btnFontSize, setBtnFontSize] = useState(2.2);
    const [fontSize, setFontSize] = useState(0);
    const [fontVerticalPadding, setFontVerticalPadding] = useState(0);

    useEffect(() => {
        setSizes();
    }, [screenSize]);
    console.log("screenSize", screenSize)
    const setSizes = () => {
        if (screenSize === "default") {
            setBtnFontSize(2.6);
            setFontSize(3.4);
            setFontVerticalPadding(3.2);
        } else if (screenSize === "xs") {
            setBtnFontSize(3.0);
            setFontSize(4.8);
            setFontVerticalPadding(2.8);
        } else if (screenSize === "sm") {
            setBtnFontSize(3.2);
            setFontSize(4.8);
            setFontVerticalPadding(4.2);
        } else if (screenSize === "md") {
            setBtnFontSize(3.4);
            setFontSize(5.6);
            setFontVerticalPadding(2.4);
        } else if (screenSize === "lg") {
            setBtnFontSize(4.4);
            setFontSize(10.8);
            setFontVerticalPadding(3.2);
        } else if (screenSize === "xl") {
            setBtnFontSize(5.2);
            setFontSize(12.6);
            setFontVerticalPadding(5.6);
        } else if (screenSize === "xxl") {
            setBtnFontSize(6.4);
            setFontSize(15);
            setFontVerticalPadding(6.8);
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
                        marginBottom: `${fontVerticalPadding}rem`,
                       
                        textAlign: "left",
                        width: "75%",
                    }}>
                    <p style={{textTransform: "uppercase"}}>URRNZ CUSTOM KEEPSAKES</p>
                </h1>
                <StoreButton style={{ fontSize: `${btnFontSize}rem` }} />
            </div>
        </div>
    );
};


export default Hero;
