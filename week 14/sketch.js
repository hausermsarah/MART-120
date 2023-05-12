var spears = []; 
var blockX = 200; 
var blockY = 200;
var enemyX, enemyY;
var enemy2X, Enemy2Y;
var score;
var exitX = 0; 
var exitY = 0; 
var exitSize = 50; 
var exitWidth = 40;
var exitHeight = 40;
var blocks = [];

function setup() {
  createCanvas(400, 400); 
    enemyX = random(width);
  enemyY = 0;
  score = 0;
}

function draw() {
  background(50);
  stroke(0);
  strokeWeight(2);
  
   noFill();
  rect(0, 0, 400, 400);
  moveEnemy();
  checkCollision();
  drawEnemy();
  drawScore();
  
fill(123, 255, 123);
rect(blockX, blockY, 30, 30);
  
fill(123, 123, 200);
rect(exitX, exitY, exitWidth, exitHeight);
  
  textSize(30); // set the text size
  fill(100, 200, 123); // set the fill color
  text("get to the purple box", 300, 300);
  
   textSize(20); // set the text size
  fill(100, 200, 123); // set the fill color
  text("avoid the balls!", 300, 350);
  
    // Check for collision with the exit
  if (blockX > exitX && blockX < exitX + exitSize &&
      blockY > exitY && blockY < exitY + exitSize) {
    textSize(32);
    text("You Win!", width/2 - 50, height/2);
    
    
  }
  
  if (frameCount % 60 === 0) { 
    generateSpear();
  }
  for (let i = 0; i < spears.length; i++) {
    let spear = spears[i];
    spear.update(); 
    if (spear.y > height) {
      spears.splice(i, 1); 
    }
    spear.display();
  }
}
class Spear {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.width = 20; 
    this.height = 60; 
  }

  update() {
    this.y += this.speed; 
  }

  display() {
    fill(88, 149, 156); 
    rect(this.x, this.y, this.width, this.height);
  }
}
function generateSpear() {
  let x = random(width); 
  let y = 0; 
  let speed = random(1, 5); 
  let spear = new Spear(x, y, speed);
  spears.push(spear);

}

function keyPressed() {
  if (key === 'w' || key === 'W') {
    // move the block up
    blockY -= 10;
  } else if (key === 's' || key === 'S') {
    // move the block down
    blockY += 10;
  } else if (key === 'a' || key === 'A') {
    // move the block left
    blockX -= 10;
  } else if (key === 'd' || key === 'D') {
    // move the block right
    blockX += 10;
  }
}


function moveEnemy() {
  enemyY += 3;
  if (enemyY > height) {
    enemyX = random(width);
    enemyY = 0;
  }
}

function checkCollision() {
  let d = dist(blockX, blockY, enemyX, enemyY);
  if (d < 30) {
    score -= 1;
    enemyX = random(width);
    enemyY = 0;
  }
}


function drawEnemy() {
  fill(255, 123, 123);
  circle(enemyX, enemyY, 30);
}

function drawScore() {
  textSize(20);
  textAlign(RIGHT);
  text(score, width - 20, 30);

    for (let block of blocks) {
    fill(100,100,200);
    rect(block.x, block.y, block.size, block.size);
  }
}

function mouseClicked() {
  // Store the position of the mouse click and create a new block
  let block = {
    x: mouseX,
    y: mouseY,
    size: 50
  };
  blocks.push(block);
}
 