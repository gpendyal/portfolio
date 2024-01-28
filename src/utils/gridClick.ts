import mines from '../utils/mines';

export const gridClick = (row: number, col: number) => {
    const element = document.getElementById(`a_${row}_${col}`);
    const gridelement = document.getElementById(`cell_${row}_${col}`);

    if (element) {
        element.parentNode?.removeChild(element);
        if (gridelement){
            if(mines.some(([mineRow, mineCol]) => mineRow === row && mineCol === col)){
                gridelement.style.backgroundColor = 'red';
            }
            else{
                gridelement.style.backgroundColor = 'white';
            }
        }
    }
    
};
