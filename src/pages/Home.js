import About from "../components/About";
import FAQ from "../components/FAQ";
import Heading from "../components/layout/Heading";
import Hero from "../components/layout/Hero";


const Home = () => {
    return (
        <main>
            <section id="home">
                <Hero />
            </section>
            <section
                id="about">
                <Heading
                    style={{ marginTop: "4.8rem", marginBottom: "4.8rem" }}
                    title="ABOUT" />
                <About />
            </section>
            <section
                id="faqs">
                <Heading
                    style={{ marginTop: "4.8rem", marginBottom: "4.8rem" }}
                    title="FAQs" />
                <FAQ />
            </section>
        </main>
    );
};

export default Home;