import { NavLink } from "react-router-dom";
import classes from "./StoreButton.module.css";


const StoreButton = (props) => {
    return (
        <NavLink
            to={props.to}
            className={classes.link}
            aria-label="Store button"
            style={props.style} >
            <div className={classes.btn}>
                <p className={classes.title}>{props.title}</p>
            </div>
        </NavLink>
    );
};

export default StoreButton;
