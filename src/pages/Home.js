import React, { useEffect, useState } from "react";
import About from "../components/About";
import Heading from "../components/layout/Heading";
import Hero from "../components/layout/Hero";
import { useScreenSize } from "../hooks/useScreenSize";
import "../general.css";


const Home = () => {

    const screenSize = useScreenSize();
    const [headingFontSize, setHeadingFontSize] = useState(0);
    const [fontSize, setFontSize] = useState(0);


    useEffect(() => {
        const setSizes = () => {
        if (screenSize === "default") {
            setHeadingFontSize(5.8);
            setFontSize(1.8);
        } else if (screenSize === "xs") {
            setHeadingFontSize(6.4);
            setFontSize(2.2);
        } else if (screenSize === "sm") {
            setHeadingFontSize(7.2);
            setFontSize(3.2);
        } else if (screenSize === "md") {
            setHeadingFontSize(9.6);
            setFontSize(3.2);
        } else if (screenSize === "lg") {
            setHeadingFontSize(15);
            setFontSize(3.2);
        } else if (screenSize === "xl") {
            setHeadingFontSize(18);
            setFontSize(3.2);
        } else if (screenSize === "xxl") {
            setHeadingFontSize(21);
            setFontSize(3.8);
        }
    };
        setSizes();
    }, [screenSize]);


    return (
        <main className={`grid`}>
            <section id="home">
                <Hero />
            </section>
            <section id="about">
                <Heading fontSize={headingFontSize} title="ABOUT" />
                <About fontSize={fontSize} />
            </section>
            <section id="faqs">
                <Heading fontSize={headingFontSize} title="FAQs" />
            </section>
        </main>
    );
};

export default Home;