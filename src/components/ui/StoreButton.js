import { NavLink } from "react-router-dom";
import classes from "./StoreButton.module.css";

const StoreButton = (props) => {
    return (
        <div className={classes.btn}>
            <NavLink 
                to="/products" 
                className={classes.link}
                style={props.style}>
                <p>SHOP NOW</p>
            </NavLink>
        </div>
    );
};

export default StoreButton;
