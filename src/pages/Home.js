import { useEffect, useState } from "react";
import ReactGA from "react-ga";
import About from "../components/About";
import FAQ from "../components/FAQ";
import Hero from "../components/layout/Hero";
import SEO from "../components/SEO";
import ShowIf from "../components/ShowIf";
import classes from "./Home.module.css";

const Home = () => {
  const [loading, setLoading] = useState(true);

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
        title="Urrnz Custom 3D Printed Keepsakes"
        description="Urrnz Custom 3D Printed Keepsakes homepage."
        name="Urrnz"
        type="website"
        imageUrl="../assets/logo192.png"
      />
      <section className={classes.section} id="home">
        <Hero loading={loading} setLoading={setLoading} />
      </section>
      <ShowIf
        condition={!loading}
        render={() => {
          return (
            <div className={classes.row}>
              <section>
                <About loading={loading} />
              </section>
              <div className={classes.divider}></div>
              <section>
                <FAQ loading={loading} />
              </section>
            </div>
          );
        }}
      />
    </main>
  );
};

export default Home;
