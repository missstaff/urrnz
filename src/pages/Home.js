import { useEffect } from "react";
import About from "../components/About";
import FAQ from "../components/FAQ";
import Heading from "../components/layout/Heading";
import Hero from "../components/layout/Hero";
import SEO from '../components/SEO';
import ReactGA from "react-ga";
import classes from "./Home.module.css";

const Home = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    ReactGA.event({
      category: "User",
      action: "User visited the homepage",
    });
  }, []);
  return (
    <main>
      <SEO
        title='Urrnz Custom 3D Printed Keepsakes'
        description='Urrnz Custom 3D Printed Keepsakes homepage.'
        name='Urrnz.'
        type='website'
        imageUrl='../assets/logo192.png'
      />
      <section id="home">
        <Hero />
      </section>
      <div className={classes.row}>
        <section>
          <Heading id="about" title="ABOUT" />
          <About />
        </section>
        <div
          className={classes.divider}
        ></div>
        <section>
          <Heading id="faqs" title="FAQs" />
          <FAQ />
        </section>
      </div>
    </main>
  );
};

export default Home;
