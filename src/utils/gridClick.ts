import { mines } from './mines';

export const gridClick = (row: number, col: number) => {
    const element = document.getElementById(`a_${row}_${col}`);
    const gridelement = document.getElementById(`cell_${row}_${col}`);

    if (element) {
        element.parentNode?.removeChild(element);
        if (gridelement){
            if([row, col] in mines){
            gridelement.style.backgroundColor = 'red';
            }
        }
    }
    
};
