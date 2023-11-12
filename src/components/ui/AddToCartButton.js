import { NavLink } from "react-router-dom";
import classes from "./AddToCartButton.module.css";


const AddToCartButton = (props) => {
    return (
        <NavLink
            className={[`${classes.button}`]}
            exact="true"
            onClick={props.onClick}
            style={props.style}
            to="/cart">
            ADD TO CART
        </NavLink>
    );
};

export default AddToCartButton;