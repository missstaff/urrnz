import { NavLink } from "react-router-dom";
import classes from "./FormButton.module.css";


const FormButton = (props) => {
    
    return (
        <NavLink
            onClick={props.disabled ? undefined : props.onClick}
            style={{cursor: props.disabled ? "not-allowed" : "pointer"}}
            to={props.to}
            className={classes.button}
            exact="true">
            {props.title}
        </NavLink>
    );
};

export default FormButton;