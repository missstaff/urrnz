import React, { useEffect, useState } from "react";
import About from "../components/About";
import FAQ from "../components/FAQ";
import Heading from "../components/layout/Heading";
import Hero from "../components/layout/Hero";
import { useScreenSize } from "../hooks/useScreenSize";
import "../general.css";



const Home = () => {

    const screenSize = useScreenSize();
    const [headingFontSize, setHeadingFontSize] = useState(0);
    const [fontSize, setFontSize] = useState(0);
    const [questionFontSize, setQuestionFontSize] = useState(0);
    const [verticalSpace, setVerticalSpace] = useState(0);


    useEffect(() => {
        const setSizes = () => {
            if (screenSize === "default") {
                setHeadingFontSize(5.8);
                setFontSize(1.8);
                setQuestionFontSize(2.2);
                setVerticalSpace(4.8);
            } else if (screenSize === "xs") {
                setHeadingFontSize(6.4);
                setFontSize(2.2);
                setQuestionFontSize(2.6);
                setVerticalSpace(4.8);
            } else if (screenSize === "sm") {
                setHeadingFontSize(7.2);
                setFontSize(3.2);
                setQuestionFontSize(3.6);
                setVerticalSpace(4.8);
            } else if (screenSize === "md") {
                setHeadingFontSize(9.6);
                setFontSize(3.2);
                setQuestionFontSize(3.6);
                setVerticalSpace(4.8);
            } else if (screenSize === "lg") {
                setHeadingFontSize(15);
                setFontSize(3.2);
                setQuestionFontSize(3.6);
                setVerticalSpace(9.6);
            } else if (screenSize === "xl") {
                setHeadingFontSize(18);
                setFontSize(3.2);
                setQuestionFontSize(3.6);
                setVerticalSpace(9.6);
            } else if (screenSize === "xxl") {
                setHeadingFontSize(21);
                setFontSize(3.8);
                setQuestionFontSize(4.2);
                setVerticalSpace(9.6);
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
                <Heading
                    fontSize={headingFontSize}
                    title="ABOUT" />
                <About
                    fontSize={fontSize} />
            </section>
            <section id="faqs"
                style={{
                    marginBottom: `${verticalSpace}rem`,
                    paddingBottom: `${verticalSpace}rem`
                }}>
                <Heading 
                    fontSize={headingFontSize} 
                    title="FAQs" />
                <FAQ 
                    fontSize={fontSize} 
                    questionFontSize={questionFontSize} />
            </section>
        </main>
    );
};

export default Home;