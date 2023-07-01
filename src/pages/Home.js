import React, { useEffect, useState } from "react";
import About from "../components/About";
import FAQ from "../components/FAQ";
import Heading from "../components/layout/Heading";
import Hero from "../components/layout/Hero";
import { useScreenSize } from "../hooks/useScreenSize";
import "../general.css";



const Home = () => {

    const screenSize = useScreenSize();
    const [fontSize, setFontSize] = useState(0);
    const [questionFontSize, setQuestionFontSize] = useState(0);
    const [verticalSpace, setVerticalSpace] = useState(0);


    useEffect(() => {
        const setSizes = () => {
            if (screenSize === "default") {
                setFontSize(1.8);
                setQuestionFontSize(2.2);
                setVerticalSpace(4.8);
            } else if (screenSize === "xs") {
                setFontSize(2.2);
                setQuestionFontSize(2.6);
                setVerticalSpace(4.8);
            } else if (screenSize === "sm") {
                setFontSize(3.2);
                setQuestionFontSize(3.6);
                setVerticalSpace(4.8);
            } else if (screenSize === "md") {
                setFontSize(3.2);
                setQuestionFontSize(3.6);
                setVerticalSpace(4.8);
            } else if (screenSize === "lg") {
                setFontSize(3.2);
                setQuestionFontSize(3.6);
                setVerticalSpace(9.6);
            } else if (screenSize === "xl") {
                setFontSize(3.2);
                setQuestionFontSize(3.6);
                setVerticalSpace(9.6);
            } else if (screenSize === "xxl") {
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
                    title="FAQs" />
                <FAQ 
                    fontSize={fontSize} 
                    questionFontSize={questionFontSize} />
            </section>
        </main>
    );
};

export default Home;