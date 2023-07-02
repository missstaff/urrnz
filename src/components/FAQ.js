import Container from "./Container";
import classes from "./FAQ.module.css";
import "../general.css";


const FAQ = (props) => {

    const { fontSize, questionFontSize } = props;

    return (
        <Container>
            <div className="container">

                <h3
                    className={classes.question}
                    style={{ fontSize: `${questionFontSize}rem` }}>
                    How long does it take to receive my custom urn?
                </h3>
                <p
                    className={classes.answer}
                    style={{ fontSize: `${fontSize}rem` }}>
                    Our custom urns are made to order, so it typically takes 2-3 weeks for us to create and ship your urn.
                </p>

                <h3
                    className={classes.question}
                    style={{ fontSize: `${questionFontSize}rem` }}>
                    Can I customize the shape and size of my urn?
                </h3>
                <p
                    className={classes.answer}
                    style={{ fontSize: `${fontSize}rem` }}>
                    Yes! We offer a variety of shapes and sizes to choose from, and we can also create completely custom designs upon request.
                </p>

                <h3
                    className={classes.question}
                    style={{ fontSize: `${questionFontSize}rem` }}>
                    What materials do you use to create your urns?
                </h3>
                <p
                    className={classes.answer}
                    style={{ fontSize: `${fontSize}rem` }}>
                    We use a variety of high-quality materials, including PLA, ABS, and PETG, to create our urns using 3D printing technology.
                </p>

                <h3
                    className={classes.question}
                    style={{ fontSize: `${questionFontSize}rem` }}>
                    Can I include personalization on my urn?
                </h3>
                <p
                    className={classes.answer}
                    style={{ fontSize: `${fontSize}rem` }}>
                    Absolutely! We offer a variety of personalization options, including answer, symbols, and images, to create a truly unique and personalized urn for your loved one.
                </p>

                <h3
                    className={classes.question}
                    style={{ fontSize: `${questionFontSize}rem` }}>
                    How do I know that my urn will be secure and durable?
                </h3>
                <p
                    className={classes.answer}
                    style={{ fontSize: `${fontSize}rem` }}>
                    We take great care to ensure that our urns are secure and durable, and we perform rigorous testing to ensure that they can remain on display for many, many years to come.
                </p>

                <h3
                    className={classes.question}
                    style={{ fontSize: `${questionFontSize}rem` }}>
                    What is your return policy?
                </h3>
                <p
                    className={classes.answer}
                    style={{ fontSize: `${fontSize}rem` }}>
                    We want you to be completely satisfied with your purchase, so we offer a 100% satisfaction guarantee. If for any reason you are not satisfied with your urn, please
                    contact us and we will do everything we can to make it right.
                </p>
            </div>
        </Container>
    );
};

export default FAQ;