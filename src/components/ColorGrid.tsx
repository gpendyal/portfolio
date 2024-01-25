import React from 'react';
import '../styles/ColorGrid.css'; // Import the CSS file for styling

function ColorGrid() {
    let gridsize: number = 10;

    const gridRows = [];
    for (let i = 0; i < gridsize; i++) {
        const gridCols = [];
        for (let j = 0; j < gridsize; j++) {
            gridCols.push(<div key={j} className="grid-cell">{i}{j}</div>);
        }
        gridRows.push(<div key={i} className="grid-row">{gridCols}</div>);
    }

    return (
        <div className="color-grid">
            {gridRows}
        </div>
    );
}

export default ColorGrid;
