import React, { useState } from 'react';

function ColorBoxApp() {
    const [color, setColor] = useState('');
    const [size, setSize] = useState({ width: '100', height: '100' });
    const [boxes, setBoxes] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (color.trim() !== '') {
            const newBox = {
                color,
                width: size.width,
                height: size.height,
            };

            setBoxes([...boxes, newBox]);
            setColor('');
            setSize({ width: '100', height: '100' }); 
            }
        };

    return (
        <div>
            <h1>Color Box App</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Color:
                    <input
                        type="text"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                    />
                </label>
                <label>
                    Width:
                    <input
                        type="number"
                        value={size.width}
                        onChange={(e) => setSize({ ...size, width: e.target.value })}
                    />
                </label>
                <label>
                    Height:
                    <input
                        type="number"
                        value={size.height}
                        onChange={(e) => setSize({ ...size, height: e.target.value })}
                    />
                </label>
                <button type="submit">Add Box</button>
            </form>
            <div className="box-container">
                {boxes.map((box, index) => (
                <div
                    key={index}
                    className="color-box"
                    style={{ 
                        backgroundColor: box.color,
                        width: `${box.width}px`,
                        height: `${box.height}px`,
                    }}
                > 
                </div>
            ))}
            </div>
        </div>
    );
}

export default ColorBoxApp;
