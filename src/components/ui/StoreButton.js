import { NavLink } from "react-router-dom";
import classes from "./StoreButton.module.css";

const StoreButton = (props) => {
  return (
    <NavLink
      aria-label="Store button"
      className={classes.link}
      style={props.style}
      to={props.to}
    >
      <div className={classes.btn}>
        <p className={classes.title}>{props.title}</p>
      </div>
    </NavLink>
  );
};

export default StoreButton;
