import Logo from "./Logo";
import classes from "./Footer.module.css";


const Footer = () => {
    return (
        <footer className={classes.footer} >
            <Logo />
            <p className={classes.text}>All Rights Reserved © 2023</p>
        </footer>
    );
};

export default Footer;