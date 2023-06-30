import Logo from "./Logo";
import classes from './Footer.module.css';



const Footer = () => {
    return (
        <footer className={classes.footer} >
            <Logo />
        </footer>
    );
};

export default Footer;