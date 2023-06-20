import React, { useState } from 'react';

const ColorPicker = ({ colors }) => {
  const [isColorListVisible, setIsColorListVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorButtonClick = () => {
    setIsColorListVisible(!isColorListVisible); 
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setIsColorListVisible(false);
  };

  return (
    <div>
      <button onClick={handleColorButtonClick}>Pick a color</button>
      {isColorListVisible && (
        <ul>
          {colors.map((color) => (
            <li
              key={color}
              style={{
                display: 'inline-block',
                width: '20px',
                height: '20px',
                backgroundColor: color,
                marginRight: '5px',
                cursor: 'pointer',
              }}
              onClick={() => handleColorClick(color)}
            />
          ))}
        </ul>
      )}
      {selectedColor && <p>Selected color: {selectedColor}</p>}
    </div>
  );
};

export default ColorPicker;
