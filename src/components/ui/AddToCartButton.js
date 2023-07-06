import { NavLink } from "react-router-dom";
import classes from "./AddToCartButton.module.css";


const AddToCartButton = (props) => {
    return (
        <NavLink
            onClick={props.onClick}
            to="/cart"
            className={classes.button}
            exact="true">
            ADD TO CART
        </NavLink>
    );
};

export default AddToCartButton;