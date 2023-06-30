import React from "react";
import Heading from "../components/layout/Heading";
import Hero from "../components/layout/Hero";
import "../general.css";


const Home = () => {
    return (
        <main className={`grid`}>
            <section id="home">
                <Hero />
            </section>
            <section id="about">
                <Heading title="ABOUT" />
            </section>
            <section id="faqs">
                <Heading title="FAQs" />
            </section>
        </main>
    );
};

export default Home;