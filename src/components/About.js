import Container from "./Container";
import { ABOUT_TEXT } from "../config/constants";

import classes from "./About.module.css";


const About = () => {
    return (
        <Container>
            <div className={classes.container} >
                {ABOUT_TEXT.map((text, index) => {
                    return (
                        <p key={index} className={classes.text}>
                            {text}
                        </p>
                    );
                })}
            </div>
        </Container>
    );
};

export default About;
