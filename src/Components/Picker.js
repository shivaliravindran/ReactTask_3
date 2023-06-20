import React, { useState } from 'react';

const Picker = ({ colors }) => {
  const [visible, setVisible] = useState(false);
  const [select, setSelect] = useState(null);

const pickacolor = () => {
    setVisible(!visible);
};

const clickcolor = (color) => {
    setSelect(color);
    setVisible(false);
};


    return(
        <div>
            <button onClick={pickacolor}>Pick a color</button>
            {visible && (
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
                    onClick={() => clickcolor(color)}
                    />
                ))}
                </ul>
            )}
            {select && <p>Selected color: {select}</p>}
        </div>
    );
};

export default Picker;