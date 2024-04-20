import ReactGA from "react-ga";
import { NavLink } from "react-router-dom";
import classes from "./StoreButton.module.css";



/**
 * Represents a button component used for store navigation.
 *
 * @component
 * @param {Object} props - The properties for the StoreButton component.
 * @param {string} props.style - The inline style for the button.
 * @param {string} props.to - The URL to navigate to when the button is clicked.
 * @param {string} props.title - The title of the button.
 * @returns {JSX.Element} The rendered StoreButton component.
 */
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
      className={`${classes.link}`}
      style={props.style}
      to={props.to}
      onClick={sendGoogleAnalyticsEvent}
      role="link"
      tabIndex={0}
    >
      <div className={`${classes.link} ${props.buttonClass}`}>
        <p className={classes.title}>{props.title}</p>
      </div>
    </NavLink>
  );
};

export default StoreButton;
