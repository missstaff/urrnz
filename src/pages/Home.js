import About from "../components/About";
import FAQ from "../components/FAQ";
import Footer from "../components/layout/Footer";
import Heading from "../components/layout/Heading";
import Hero from "../components/layout/Hero";
import SEO from '../components/SEO';

const Home = () => {
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
