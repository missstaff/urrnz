import Container from "./Container";
import { ABOUT_TEXT_P1, ABOUT_TEXT_P2, ABOUT_TEXT_P3 } from "../config/constants";

import classes from "./About.module.css";


const About = () => {
    return (
        <Container>
            <div className={classes.container} >
                <p className={classes.text}>
                    {ABOUT_TEXT_P1}
                </p>
                <p className={classes.text}>
                    {ABOUT_TEXT_P2}
                </p>
                <p className={classes.text}>
                    {ABOUT_TEXT_P3}
                </p>
            </div>
        </Container>
    );
};

export default About;
