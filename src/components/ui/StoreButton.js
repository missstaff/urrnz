import ReactGA from "react-ga";
import { NavLink } from "react-router-dom";
import classes from "./StoreButton.module.css";

const StoreButton = (props) => {

  const sendGoogleAnalyticsEvent = () => {
    ReactGA.event({
      category: "User",
      action: "User clicked the store button",
    });
  };
  
  return (
    <NavLink
      aria-label="Shop Button"
      className={classes.link}
      style={props.style}
      to={props.to}
      onClick={sendGoogleAnalyticsEvent}
      role="link"
      tabIndex={0}
    >
      <div className={classes.btn}>
        <p className={classes.title}>{props.title}</p>
      </div>
    </NavLink>
  );
};

export default StoreButton;
