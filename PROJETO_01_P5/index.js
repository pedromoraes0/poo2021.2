const NL = 7;
const NC = 9;
const LADO = 50;
let snake_x = 2;
let snake_y = 0;
let snake_vx = 0;
let snake_vy = 0;
let snake_color;
let cell_color;
let timer = 0;

let food_x = 0;
let food_y = 0;
let food_color;
let food_count = 0;


function setup() {
  createCanvas(NC * LADO, NL * LADO);
  frameRate(30);
  snake_color = color("white");
  cell_color = color("pink");
  food_color = color("grey");
  food_generate();
}

function food_generate() {
  food_x = parseInt(random(0, NC));
  food_y = parseInt(random(0, NL));
  
}

function draw_cell(x, y, color) {
  noStroke();
  fill(color);
  square(x * LADO + 1, y * LADO + 1, LADO -1);
  

}

function draw_mat() {
  fill(155);
  for(let c = 0; c < NC; c++)
    for(let l = 0; l < NL; l++)
        draw_cell(c, l, cell_color);
}

function snake_loop() {
  if(snake_x == NC)
    snake_x = 0;
  
  if(snake_y == NL)
    snake_y = 0;
  
  if(snake_x == -1)
    snake_x = NC -1
  
  if(snake_y == -1)
    snake_y = NL -1
  
}

function snake_walke() {
  if(frameCount - timer > 10) {
    timer = frameCount;
    snake_x += snake_vx;
    snake_y += snake_vy;
  }
}

function draw() {
  snake_walke();
  snake_loop();
  
  
  if(snake_x == food_x && snake_y == food_y) {
    food_generate();
    food_count += 1;
  }
  
  
  background(255);
  draw_mat();
  draw_cell(food_x, food_y, food_color);
  draw_cell(snake_x, snake_y, snake_color);
  square(snake_x * LADO, snake_y * LADO, LADO);
  
  fill(255);
  textSize(20);
  text(food_count, 9, 33);
}

function keyPressed() {
  if(keyCode === LEFT_ARROW){
    snake_vx = -1;
    snake_vy = 0;
  }else if(keyCode === RIGHT_ARROW) {
    snake_vx = 1;
    snake_vy = 0;
  }else if(keyCode === UP_ARROW) {
    snake_vx = 0
    snake_vy = -1;
}else if(keyCode === DOWN_ARROW) {
    snake_vx = 0;
    snake_vy = 1;
  }
}
