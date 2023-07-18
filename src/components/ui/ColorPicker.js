import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

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
    <div>
      <p className={classes.selectColor}>Select a color:</p>
      <div className={classes.grid}>
        {COLORS.map((color) => (
          <div
            className={classes.image}
            key={color}
            onClick={() => handleColorChange(color)}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      {selectedColor && (
        <p className={classes.selectedColor}>
          Selected color:
          <span
            className={classes.selectedColor}
            style={{ color: selectedColor }}>
            {COLOR_CODE_TO_NAME[selectedColor]}
          </span>
        </p>
      )}
    </div>
  );
};

export default ColorPicker;
