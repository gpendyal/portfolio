const mines: [number, number][] = []; 
for(let i = 0; i < 10; i++){
  mines.push([Math.round(Math.random() * 20), Math.round(Math.random() * 20)]);
}

console.log(mines);

export default mines;