import { useEffect, useState } from "react";
import LoadingMessage from "../LoadingMessage";
import ShowIf from "../ShowIf";
import StoreButton from "../ui/StoreButton";
import classes from "./Hero.module.css";
import img from "../../assets/Combo-HD.png";
const Hero = ({ loading, setLoading }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (img) {
      setImage(img);
      setLoading(false);
    }
  }, [img]);

  return (
    <>
      <ShowIf
        condition={loading}
        render={() => {
          return (
            <div className={classes.absoluteCenter}>
              <LoadingMessage />
            </div>
          );
        }}
      />
      <section className={classes.section}>
        <div
          aria-label="Hero Image"
          className={classes.hero}
          role="img"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <div className={classes.content}>
            {!loading && (
              <div className={classes.titleContainer}>
                <h1 role="heading" className={classes.title}>
                  URRNZ<span> CUSTOM KEEPSAKES</span>
                </h1>
                <StoreButton buttonClass={classes.storeBtn} to="/products/All" title="SHOP URRNZ" />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
