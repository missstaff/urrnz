import { NavLink } from "react-router-dom";
import ReactGA from "react-ga";
import classes from "./AddToCartButton.module.css";

const AddToCartButton = (props) => {
  const sendEventToGoogleAnalytics = () => {
    ReactGA.event({
      category: "User",
      action: `User add ${props.product.name} to the cart`,
    });
  };
  return (
    <NavLink
      className={[`${classes.button}`]}
      exact="true"
      onClick={() => {
        props.onClick();
        sendEventToGoogleAnalytics();
      }}
      style={props.style}
      to="/cart"
      role="button"
      tabIndex={0}
    >
      ADD TO CART
    </NavLink>
  );
};

export default AddToCartButton;
