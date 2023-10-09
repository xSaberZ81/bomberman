const grid = 64;

const sizeStyle = 16; // taille de la tuile

const canvasWidth = 672
const canvasHeight = 480

const columns = Math.ceil(canvasWidth / sizeStyle)
const rows = Math.ceil(canvasHeight / sizeStyle);


const tileMap = []

function getRandomNumber(max){
    return Math.floor(Math.random()*max)
}

for (let k = 0;k <rows;k++) { //fait gaffe ici c'est rows avec un S ta variable du début
    const row =[]; //ça c'est pour gérer ligne par ligne 
    for (let j = 0 ; j<columns;j++){
      //et la dedans ta logique pour mettre tes tuiles 
      if((j==0)||(j==columns-1)||(k==0 && j<=columns-1)||(k== rows-1 && j <= columns -1)){
        //moi par exemple ça donne ça pour mettre le tour en block indestructible
      row.push(9) //9 c'est la valeur pour laquelle je donne ma tuile mur à toi de remplacer pour avoir un truc cohérent selon les tiennes  
    }else if ((k == 1 && j == 1) || (k == 2 && j == 1) || (k == 1 && j == 2)){
        row.push(1)
    }else if ((k == rows-2 && j == 1) || (k == rows-3 && j == 1) || (k == rows-2 && j == 2)){
        row.push(1)
    }else if ((k == 1 && j == columns-2) || (k == 2 && j == columns-2) || (k == 1 && j == columns-3)){
        row.push(1)
    }else if ((k == rows-2 && j == columns-3) || (k == rows-2 && j == columns-2) || (k == rows-3 && j == columns-2)){
        row.push(1)
    }else{
        row.push(getRandomNumber(3)) //X c'est ton nombre de tuiles différentes que tu veux faire apparaître
    }
  }
  tileMap.push(row)
  
  
}

console.log(tileMap)
const tileMapDiv = document.querySelector(".game-map")

for (let y = 0; y < tileMap.length; y++) {
    const tileRowDiv = document.createElement("div");
    tileRowDiv.classList.add("tile_row")

    for (let x = 0; x < tileMap[y].length; x++) {
        const tileDiv = document.createElement("div");
        tileDiv.classList.add("tile")
        
        const tileIndex = tileMap[y][x];
        if (tileIndex == 9) {
            tileDiv.classList.add("solid")
        } else if (tileIndex == 1) {
            tileDiv.classList.add("sol")
        } else if (tileIndex == 2) {
            tileDiv.classList.add("single_block")
        } else if (tileIndex == 0) {
            tileDiv.classList.add("incassable")
        }
        
        
        tileRowDiv.appendChild(tileDiv);
    }

    tileMapDiv.appendChild(tileRowDiv);
}

const player = {
    row: 1,
    col: 1,
    numBombs: 1,
    bombSize: 3,
    radius: grid * 0.35,
    render() {
        const x = (this.col + 0.5) * grid;
        const y = (this.row + 0.5) * grid;

        context.save();
        context.fillStyle = 'player-character1';
        context.beginPath();
        context.arc(x, y, this.radius, 0, 2 * Math.PI);
        context.fill();
    }
}