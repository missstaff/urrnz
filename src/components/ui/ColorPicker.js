import { useState } from "react";
import { useDispatch } from "react-redux";

import { setColorHandler } from "../../store/cart-actions";

import classes from "./ColorPicker.module.css";



const colors = [
  "#B80000", "#DB3E00", "#FCCB00", "#008B02",
  "#006B76", "#1273DE", "#004DCF", "#5300EB",
  "#EB9694", "#FAD0C3", "#FEF3BD", "#C1E1C5",
  "#BEDADC", "#C4DEF6", "#BED3F3", "#D4C4FB"
];



const ColorPicker = (props) => {

  const { cid } = props;
  const dispatch = useDispatch();
  const [selectedColor, setSelectedColor] = useState("");


  const handleColorChange = (color) => {
    setSelectedColor(color);
    dispatch(setColorHandler(cid, color));
  };


  return (
    <div>
      <p  className={classes.selectColor}>Select a color:</p>
      <div className={classes.grid}>
        {colors.map((color) => (
          <div
            key={color}
            style={{ backgroundColor: color }}
            className={classes.image}
            onClick={() => handleColorChange(color)}
          />
        ))}
      </div>
      {selectedColor && (
        <p className={classes.selectedColor}>
          Selected color: <span className={classes.selectedColor} style={{ color: selectedColor }}>{selectedColor}</span>
        </p>
      )}
    </div>
  );
};

export default ColorPicker;
