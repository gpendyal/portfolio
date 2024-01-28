// import React, { useEffect, useState } from 'react';
import React from 'react';
import '../styles/ColorGrid.css'; // Import the CSS file for styling

import { gridClick } from '../utils/gridClick';

// import mines from '../utils/mines';


function ColorGrid() {

    let gridsize: number = 20;

    const gridRows = [];
    for (let i = 0; i < gridsize; i++) {
        const gridCols = [];
        for (let j = 0; j < gridsize; j++) {
            gridCols.push(
                    <div key={j} className="grid-cell" id={'cell_' + i + '_' + j} onClick={() => gridClick(i, j)}>
                        <a id={"a_" + i + '_' + j} href="www.google.com"></a>
                    </div>
                );
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
