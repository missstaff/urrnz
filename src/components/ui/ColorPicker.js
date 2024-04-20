import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ReactGA from "react-ga";
import { setColorHandler } from "../../store/cart-actions";
import { COLORS, COLOR_CODE_TO_NAME } from "../../config/constants";
import classes from "./ColorPicker.module.css";

const ColorPicker = (props) => {
  const { cid } = props;
  const dispatch = useDispatch();

  const [selectedColor, setSelectedColor] = useState(COLORS[2]);

  const handleColorChange = (color) => {
    setSelectedColor(color);
    dispatch(setColorHandler(cid, color));
    ReactGA.event({
      category: "User",
      action: `User selected the color ${COLOR_CODE_TO_NAME[color]}`,
    });
  };

  useEffect(() => {
    const localStorageCart = JSON.parse(localStorage.getItem("cart"));
    if (localStorageCart) {
      const item = localStorageCart.items.find((item) => item.cid === cid);
      if (item) {
        setSelectedColor(item.color);
      }
    }
  }, [cid]);

  return (
    <>
      <p className={classes.text}>Select color</p>
      <div className={classes.grid}>
        {COLORS.map((color, i) => (
          <div
          aria-label="color picker"
            className={classes.image}
            key={color}
            onClick={() => handleColorChange(color)}
            style={{
              backgroundColor: color,
              outline: color === selectedColor ? "3px solid #777" : "none",
            }}
            tabIndex={i}
          />
        ))}
      </div>
      {/* <ShowIf AB4A47
        condition={selectedColor}
        render={() => {
          return (
            <p
            className={classes.selectedColor}
              style={{ color: selectedColor }}><span style={{color: "#777"}}>Color: </span>
              {COLOR_CODE_TO_NAME[selectedColor]}
            </p>
          );
        }}
      /> */}
    </>
  );
};

export default ColorPicker;
