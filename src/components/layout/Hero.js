import StoreButton from "../ui/StoreButton";
import classes from "./Hero.module.css";
import urnsPng from "../../assets/Combo-HD.png";
import ReactGA from "react-ga";
import { useEffect } from "react";
// import urnsWebp from "../../assets/urns.webp";

const Hero = () => {
  useEffect
  (() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    ReactGA.event({
      category: "User",
      action: "Hero image loaded",
    });
  }, []);
  return (
    <div
      className={classes.hero}
      style={{
        backgroundImage: `url(${urnsPng})`,
      }}
    >
      <div className={classes.content}>
        <h1 className={classes.title}>URRNZ CUSTOM KEEPSAKES</h1>
        <div className={classes.btnContainer}>
          <StoreButton to="/products/All" title="SHOP NOW" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
