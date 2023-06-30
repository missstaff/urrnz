import React, { useEffect, useState } from "react";    
import Heading from "../components/layout/Heading";
import { useScreenSize } from "../hooks/useScreenSize";

const Categories = () => {

    const screenSize = useScreenSize();
    const [headingFontSize, setHeadingFontSize] = useState(0);


    useEffect(() => {
        const setSizes = () => {
            if (screenSize === "default") {
                setHeadingFontSize(5.8);
            } else if (screenSize === "xs") {
                setHeadingFontSize(6.4);
            } else if (screenSize === "sm") {
                setHeadingFontSize(7.2);
            } else if (screenSize === "md") {
                setHeadingFontSize(9.6);
            } else if (screenSize === "lg") {
                setHeadingFontSize(15);              
            } else if (screenSize === "xl") {
                setHeadingFontSize(18);
            } else if (screenSize === "xxl") {
                setHeadingFontSize(21);
            }
        };
        setSizes();
    }, [screenSize]);

   
    return (
        <main>
            <section style={{paddingTop: `${9.6}rem`}}>
                <Heading fontSize={headingFontSize} title="CATEGORIES" />
            </section>
        </main>
    );
};

export default Categories;