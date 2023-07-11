import { NavLink } from "react-router-dom";
import classes from "./StoreButton.module.css";


const StoreButton = (props) => {
    return (
        <NavLink
            to={props.to}
            className={classes.link}
            style={props.style} >
            <div className={classes.btn}>
                <p>{props.title}</p>
            </div>
        </NavLink>
    );
};

export default StoreButton;
