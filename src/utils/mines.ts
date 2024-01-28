const mines: number[] = [];
const neighbors: number[] = [-21, -20, -19, -1, 1, 19, 20, 21];

for(let i = 0; i < 20; i++){
  for(let j = 0; j < 20; j++){
    mines.push(0);
  }
};

for(let i = 0; i < 20; i++){
  let x: number = Math.round(Math.random() * 400);

  mines[x] = -1;
  for(let j of neighbors){
    let y: number = x + j;
    if(y < 400 && y >= 0){
      mines[y] = mines[y] + 1;
    }
  }
};

export default mines;