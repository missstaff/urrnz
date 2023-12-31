import StoreButton from "../ui/StoreButton";
import classes from "./Hero.module.css";
import urnsPng from "../../assets/urns.png";
import urnsWebp from "../../assets/urns.webp";


const Hero = () => {
  return (
    <div
      className={classes.hero}
      style={{
        backgroundImage: `url(${urnsWebp}), url(${urnsPng})`,
      }}
    >
      <div className={classes.content}>
        <h1 className={classes.title}>URRNZ CUSTOM KEEPSAKES</h1>
        <div className={classes.btnContainer}><StoreButton to="/products/All" title="SHOP NOW" /></div>
      </div>
    </div>
  );
};

export default Hero;
