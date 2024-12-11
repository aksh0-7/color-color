import React, { useState } from 'react';
import './App.css';

function App() {
  const [bgColor, setBgColor] = useState('white');

  const colors = [
    { name: 'Red', code: '#FF0000' },
    { name: 'Yellow', code: '#FFD700' },
    { name: 'Black', code: '#000000' },
    { name: 'Purple', code: '#800080' },
    { name: 'Green', code: '#008000' },
    { name: 'Blue', code: '#0000FF' },
    { name: 'Default', code: 'white' },
  ];

  return (
    <div className="app-container" style={{ backgroundColor: bgColor }}>
      {/* <h1 className="title">Background Color Changer</h1> */}
      <div className="button-container">
        {colors.map((color) => (
          <button
            key={color.name}
            className="color-button"
            style={{ backgroundColor: color.code, color: color.name === 'Black' ? 'white' : 'black' }}
            onClick={() => setBgColor(color.code)}
          >
            {color.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
