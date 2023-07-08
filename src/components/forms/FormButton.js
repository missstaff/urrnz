import { NavLink } from "react-router-dom";
import classes from "./FormButton.module.css";


const FormButton = (props) => {
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

export default FormButton;