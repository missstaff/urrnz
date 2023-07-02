import { NavLink } from "react-router-dom";
import classes from "./AddToCartButton.module.css";


const AddToCartButton = (props) => {
    const { exact, to, title } = props;
    return (
        <NavLink
            to={to}
            className={classes.button}
            exact={exact}>
            {title}
        </NavLink>
    );
};

export default AddToCartButton;