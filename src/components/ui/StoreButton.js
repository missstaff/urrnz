import { NavLink } from "react-router-dom";
import classes from "./StoreButton.module.css";


const StoreButton = (props) => {
    return (

        <NavLink
            to="/products"
            className={classes.link}
            style={props.style} >
            <div className={classes.btn}>
                <p>SHOP NOW</p>
            </div>
        </NavLink>
    );
};

export default StoreButton;
