import Container from "./Container";
import { ABOUT_TEXT_P1, ABOUT_TEXT_P2, ABOUT_TEXT_P3 } from "../config/constants";
import classes from "./About.module.css";
import "../general.css"


const About = (props) => {

    const { fontSize } = props;

    return (
        <Container>
            <div className="container" >
            <p 
                className={classes.text}
                style={{fontSize: `${fontSize}rem`}}>
                {ABOUT_TEXT_P1}
            </p>
            <p 
                className={classes.text}
                style={{fontSize: `${fontSize}rem`}}>
                {ABOUT_TEXT_P2}
            </p>
            <p 
                className={classes.text}
                style={{fontSize: `${fontSize}rem`}}>
                {ABOUT_TEXT_P3}
            </p>
        </div>
        </Container>
    );
};

export default About;
