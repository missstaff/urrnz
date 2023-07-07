import { NavLink } from "react-router-dom";
import classes from "./StoreButton.module.css";


const StoreButton = (props) => {
    return (

        <NavLink
            to="/products/all"
            className={classes.link}
            style={props.style} >
            <div className={classes.btn}>
                <p>SHOP URRNZ</p>
            </div>
        </NavLink>
    );
};

export default StoreButton;
