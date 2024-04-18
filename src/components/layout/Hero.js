import { useEffect, useState } from "react";
import ReactGA from "react-ga";
import StoreButton from "../ui/StoreButton";
import classes from "./Hero.module.css";
import img from "../../assets/Combo-HD.png";

const Hero = () => {
  const [heroImage , setHeroImage] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect
  (() => {
    setHeroImage(img);
    ReactGA.pageview(window.location.pathname + window.location.search);
    ReactGA.event({
      category: "User",
      action: "Hero image loaded",
    });
  }, []);

  useEffect(() => {
    if(heroImage) {
      setLoading(false);
    }
  }, [heroImage]);
  if(!img) return (<div>Loading...</div>);
  return (
    <div
      className={classes.hero}
      style={{
        backgroundImage: `url(${img})`,
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
