class Entity {
    
  // atributos
  x: number;
  y: number;
  step: number;
  image: p5.Image;

  // parâmentros
  constructor(x: number, y: number, step: number, image: p5.Image) {
      this.x = x;
      this.y = y;
      this.step = step;
      this.image = image;

  }

  // métodos
  draw(): void {
      image(this.image, this.x * this.step, this.y * this.step, this.step, this.step);

  }

}

class Board {

  // atributos
  nc: number;
  nl: number;
  step: number;
  background: p5.Image;
  

  constructor(nc: number, nl: number, step: number, background: p5.Image){
    this.nc = nc;
    this.nl = nl;
    this.step = step;
    this.background = background;

  }

  draw(): void{
      image(this.background, 0, 0, this.nc * this.step, this.nl * this.step);
      for (let x = 0; x < this.nc; x++) {
        for (let y = 0; y < this.nl; y++) {
          noFill();
          stroke(0);
          strokeWeight(2);
          rect(x * this.step, y * this.step, this.step, this.step);
          
        }

      }

  }

}

let x: number = 2;
let y: number = 2;
let step: number = 1;

let malandra_img: p5.Image;
let yuke_img: p5.Image;
let board_img: p5.Imadge;


let malandra: Entity;
let yuke: Entity;
let board: Board;

function yuke_loop() {
  if(yuke.x == board.nc){
    yuke.x = 0;
}
  if(yuke.y == board.nl){
    yuke.y = 0;
}
  if(yuke.x == -1){
    yuke.x = board.nc -1;
}
  if(yuke.y == -1){
    yuke.y = board.nl -1;
}

}

function loadImg(path: string): p5.Image {
  return loadImage(
    path,
    () => console.log("loading " + path + " ok"),
    () => console.log("loading " + path + " error")

  );

}

function preload() {
  malandra_img = loadImg('../sketch/malandra.png');
  yuke_img = loadImg('../sketch/yuke.png');
  board_img = loadImg('../sketch/deserto.jpg');
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
      malandra.x--;
  } else if (keyCode === RIGHT_ARROW) {
      malandra.x++;
  } else if (keyCode === UP_ARROW) {
      malandra.y--;
  } else if (keyCode === DOWN_ARROW){
      malandra.y++;
  }

  if (keyCode === "A".charCodeAt(0)) {
      yuke.x--;
  } else if (keyCode === "D".charCodeAt(0)) {
      yuke.x++;
  } else if (keyCode === "W".charCodeAt(0)) {
      yuke.y--;
  } else if (keyCode === "S".charCodeAt(0)) {
      yuke.y++;

}

}

function setup() {
  let size = 100;

  malandra = new Entity(2, 2, size, malandra_img);
  yuke = new Entity(1, 1, size, yuke_img);
  board = new Board(5, 6, size, board_img);
  createCanvas(board.nc * size, board.nl * size);

}

function draw() {
  yuke_loop();
  board.draw();
  malandra.draw();
  yuke.draw();
  image(malandra_img, x * step, y * step, step, step);

}