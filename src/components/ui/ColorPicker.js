import { useState } from "react";
import { useDispatch } from "react-redux";

import { setColorHandler } from "../../store/cart-actions";
import { colors, colorCodeToName } from "../../config/constants";

import classes from "./ColorPicker.module.css";


const ColorPicker = (props) => {

  const { cid } = props;
  const dispatch = useDispatch();
  const [selectedColor, setSelectedColor] = useState(colors[2]);


  const handleColorChange = (color) => {
    setSelectedColor(color);
    dispatch(setColorHandler(cid, color));
  };


  return (
    <div>
      <p className={classes.selectColor}>Select a color:</p>
      <div className={classes.grid}>
        {colors.map((color) => (
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
            {colorCodeToName[selectedColor]}
          </span>
        </p>
      )}
    </div>
  );
};

export default ColorPicker;
