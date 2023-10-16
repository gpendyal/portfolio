import React from 'react';
import './App.css';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  const cursorStyle = {
    position: 'absolute',
    cursor: 'none', // Hide the default cursor
  };

  const cursorSize = {
    width: '48px', // Increase the width
    height: '48px', // Increase the height
  };

  const updateCursorPosition = (e) => {
    const cursor = document.getElementById('customCursor');
    cursor.style.left = `${e.clientX - 24}px`;  // Adjust these values accordingly
    cursor.style.top = `${e.clientY - 24}px`;  // Adjust these values accordingly
  };

  window.addEventListener('mousemove', updateCursorPosition);

  return (
    <div className="App">
      <div id="customCursor" style={cursorStyle}>
        <FontAwesomeIcon icon={faPlane} style={cursorSize} />
      </div>

      <head>
        <title>
          Gopi Chand Pendyala
        </title>
      </head>
      
      <body>

      </body>
    </div>
  );
}

export default App;
