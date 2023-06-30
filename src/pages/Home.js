import React from "react";
import Hero from "../components/layout/Hero";
import "../general.css";


const Home = () => {
    return (
        <main className={`grid`}>
            <section>
                <Hero />
            </section>
            <section>
                <h2 id="about">About</h2>
            </section>
            <section>
                <h3 id="faqs">FAQs</h3>
            </section>
        </main>
    );
};

export default Home;