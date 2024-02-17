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
      <section>
        <Heading id="about" title="ABOUT" />
        <About />
      </section>
      <section>
        <Heading id="faqs" title="FAQs" />
        <FAQ />
      </section>
    </main>
  );
};

export default Home;
