import { NavLink } from "react-router-dom";
import classes from "./StoreButton.module.css";
import ReactGA from "react-ga";
const StoreButton = (props) => {

  const sendGoogleAnalyticsEvent = () => {
    ReactGA.event({
      category: "User",
      action: "User clicked the store button",
    });
  };
  
  return (
    <NavLink
      aria-label="Store button"
      className={classes.link}
      style={props.style}
      to={props.to}
      onClick={sendGoogleAnalyticsEvent}
    >
      <div className={classes.btn}>
        <p className={classes.title}>{props.title}</p>
      </div>
    </NavLink>
  );
};

export default StoreButton;
