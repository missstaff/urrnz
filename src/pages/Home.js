import About from "../components/About";
import FAQ from "../components/FAQ";
import Heading from "../components/layout/Heading";
import Hero from "../components/layout/Hero";

import classes from "./Home.module.css";
import "../general.css";


const Home = () => {
    return (
        <main className={`grid`}>
            <section id="home">
                <Hero />
            </section>
            <section id="about">
                <Heading
                    title="ABOUT" />
                <About />
            </section>
            <section id="faqs"
                className={classes.faqsMarginBottom}>
                <Heading
                    title="FAQs" />
                <FAQ />
            </section>
        </main>
    );
};

export default Home;