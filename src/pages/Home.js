import About from "../components/About";
import FAQ from "../components/FAQ";
import Heading from "../components/layout/Heading";
import Hero from "../components/layout/Hero";

import classes from "./Home.module.css";


const Home = () => {
    return (
        <main className={`grid`}>
            <section id="home">
                <Hero />
            </section>
            <section
                id="about">
                <Heading
                    title="ABOUT"
                    style={{marginTop: 0}} />
                <About />
            </section>
            <section
                className={`${classes.faqsMarginBottom}`}
                id="faqs">
                <Heading
                    title="FAQs" 
                    style={{marginTop: 0}}/>
                <FAQ />
            </section>
        </main>
    );
};

export default Home;