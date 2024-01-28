import mines from '../utils/mines';

const neighbors: number[] = [-21, -20, -19, -1, 1, 19, 20, 21];

export const gridClick = (cel: number) => {
    const element = document.getElementById(`a_${cel}`);
    const gridelement = document.getElementById(`cell_${cel}`);

    if (element) {
        if (gridelement){
            if(mines[cel] === -1){
                gridelement.style.backgroundColor = 'red';
                alert("Loooooser!!!");
            }
            else if(mines[cel] === 0){
                element.parentNode?.removeChild(element);
                gridelement.style.backgroundColor = 'white';
                for(let i of neighbors){
                    gridClick(cel + i);
                }
            }
            else{
                element.parentNode?.removeChild(element);
                gridelement.style.backgroundColor = 'rgba(255,0,0,' + (4 + mines[cel])/8 +')';
                gridelement.innerText = mines[cel].toString();
            }
        }
    }
    
};

















// import mines from '../utils/mines';

// const neighbors: number[] = [-21, -20, -19, -1, 1, 19, 20, 21];

// export const gridClick = (cel: number) => {
//     const element = document.getElementById(`a_${cel}`);
//     const gridelement = document.getElementById(`cell_${cel}`);

//     function check(cel: number){
//         for(let i of neighbors){
//             let x: number = cel + i;
//             if(mines[x] === 0){
//                     let neighborElement = document.getElementById(`a_${x}`);
//                     let neighborGridelement = document.getElementById(`cell_${x}`);

//                     if (neighborElement) {
//                         // element.parentNode?.removeChild(element);
//                         if (neighborGridelement){
//                             if(mines[x] === 0){
//                                 neighborGridelement.parentNode?.removeChild(neighborGridelement);
//                                 neighborGridelement.style.backgroundColor = 'white';
//                                 check(x);
//                             }
//                             if(mines[x] != 0 && mines[x] != -1){
//                                 neighborGridelement.parentNode?.removeChild(neighborGridelement);
//                                 neighborGridelement.style.backgroundColor = 'white';
//                                 neighborGridelement.innerText = mines[cel].toString();
//                             }
//                         }
//                     }    
//             }
//         }
//     }

//     if (element) {
//         element.parentNode?.removeChild(element);
//         if (gridelement){
//             if(mines[cel] === -1){
//                 gridelement.style.backgroundColor = 'red';
//                 alert("Loooooser!!!");
//             }
//             else{
//                 gridelement.style.backgroundColor = 'white';
//                 gridelement.innerText = mines[cel].toString();
//                 check(cel);
//             }
//         }
//     }
    
// };
