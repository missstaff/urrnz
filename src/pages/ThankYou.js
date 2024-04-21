import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Heading from "../components/layout/Heading";
import classes from "./ThankYou.module.css";

/**
 * Renders the ThankYou component.
 * This component displays a thank you message and redirects to the home page after a delay.
 */
const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const id = setTimeout(() => {
      navigate("/");
    }, 1500);

    return () => {
      clearTimeout(id);
    };
  }, []);

  return (
    <div className={classes.wrapper}>
      <Heading title="THANK YOU" />
      <div className={classes.container}>
        <p className={classes.text}>Your order has been placed!</p>
      </div>
    </div>
  );
};

export default ThankYou;
