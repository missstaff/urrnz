import React, { useEffect, useState } from "react";
import { useScreenSize } from "../../hooks/useScreenSize";


const Logo = () => {

    const screenSize = useScreenSize();
    const [logoSize, setLogoSize] = useState(0);


    useEffect(() => {
        setSizes();
    }, [screenSize]);


    const setSizes = () => {
        if (screenSize === "default") {
            setLogoSize(1.4);
        } else if (screenSize === "xs") {
            setLogoSize(2.2);
        } else if (screenSize === "sm") {
            setLogoSize(2.2);
        } else if (screenSize === "md") {
            setLogoSize(3.4);
        } else if (screenSize === "lg") {
            setLogoSize(4.8);
        } else if (screenSize === "xl") {
            setLogoSize(5.5);
        } else if (screenSize === "xxl") {
            setLogoSize(6.5);
        }
    };


    return (
        <img
            alt="Urrnz logo"
            src={require("../../assets/logo.h200.beige.png")}
            style={{
                height: `${logoSize}rem`,
            }}
        />
    );
};

export default Logo;