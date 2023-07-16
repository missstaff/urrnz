import StoreButton from "../ui/StoreButton";
import classes from "./Hero.module.css";
import urnsPng from "../../assets/urns.png";
import urnsWebp from "../../assets/urns.webp";
import "../../general.css";

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
        <StoreButton to="/products/all" title="SHOP NOW" />
      </div>
    </div>
  );
};

export default Hero;
