import Container from "../components/Container";
import Heading from "../components/layout/Heading";
import classes from "./LandingPage.module.css";

const LandingPage = () => {
    const size = window.innerWidth
    const margin = size < 1000 ? "20rem" : "25rem";
  return (
    <main>
      <Heading title="Urrnz" style={{ marginTop: margin }} />
      <Container style={{ flexDirection: "column", alignItems: "center" }}>
        <div className={classes.textContainer}>
          <h2 className={classes.heading}>Custom 3D Printed Urns for a Lasting Tribute</h2>
          <p className={classes.text}>
            At Urrnz, we understand the importance of commemorating a life
            well-lived. Our specialized service offers funeral homes the
            opportunity to provide families with unique and personalized 3D
            printed urns, creating a lasting tribute to their loved ones.
          </p>
          <h3 className={classes.sectionHeading}>Personalized Memorials for Every Individual</h3>
          <p className={classes.text}>
            Each of our urns is custom-designed to reflect the unique personality
            and memories of the departed. With a variety of styles, sizes, and
            customizable features available, funeral homes can offer families a
            truly personalized memorial that honors their loved one's life
            story.
          </p>
          <h3 className={classes.sectionHeading}>Quality Craftsmanship and Attention to Detail</h3>
          <p className={classes.text}>
            We pride ourselves on delivering high-quality urns that not only
            serve as a beautiful tribute but also stand the test of time. Our
            advanced 3D printing technology ensures precise detailing and
            durable construction, allowing families to cherish their memorial
            for generations to come.
          </p>
          <h3 className={classes.sectionHeading}>Seamless Integration for Funeral Homes</h3>
          <p className={classes.text}>
            Understanding the needs of funeral professionals, we offer a
            streamlined ordering process and dedicated support to assist you
            every step of the way. From customization to delivery, our team is
            committed to providing exceptional service that exceeds your
            expectations.
          </p>
          <h3 className={classes.sectionHeading}>Partner with Us to Provide Exceptional Service</h3>
          <p className={classes.text}>
            Join us in offering families a unique and meaningful way to honor
            their loved ones. Partner with Urrnz today and provide a
            personalized memorial solution that celebrates life's journey.
          </p>
        </div>
      </Container>
    </main>
  );
};

export default LandingPage;
