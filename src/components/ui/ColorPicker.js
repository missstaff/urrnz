import { useState } from 'react';

const colors = [
  '#B80000', '#DB3E00', '#FCCB00', '#008B02',
  '#006B76', '#1273DE', '#004DCF', '#5300EB',
  '#EB9694', '#FAD0C3', '#FEF3BD', '#C1E1C5',
  '#BEDADC', '#C4DEF6', '#BED3F3', '#D4C4FB'
];

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState('');

  const handleColorChange = (color) => {
    setSelectedColor(color);
    // You can perform additional actions here when a color is selected
  };

  return (
    <div>
      <h3>Select a color:</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: '5px' }}>
        {colors.map((color) => (
          <div
            key={color}
            style={{
              backgroundColor: color,
              width: '50px',
              height: '50px',
              cursor: 'pointer',
            }}
            onClick={() => handleColorChange(color)}
          />
        ))}
      </div>
      {selectedColor && (
        <p>
          Selected color: <span style={{ color: selectedColor, fontWeight: "bold" }}>{selectedColor}</span>
        </p>
      )}
    </div>
  );
};

export default ColorPicker;