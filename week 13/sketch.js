var playerX, playerY;
var enemyX, enemyY;
var score;

function setup() {
  createCanvas(400, 400);
  playerX = width / 2;
  playerY = height - 50;
  enemyX = random(width);
  enemyY = 0;
  score = 0;
}

function draw() {
  background(0);
  movePlayer();
  moveEnemy();
  checkCollision();
  drawPlayer();
  drawEnemy();
  drawScore();
}

function movePlayer() {
  if (keyIsDown(LEFT_ARROW)) {
    playerX -= 5;
  } else if (keyIsDown(RIGHT_ARROW)) {
    playerX += 5;
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
  let d = dist(playerX, playerY, enemyX, enemyY);
  if (d < 30) {
    score -= 1;
    enemyX = random(width);
    enemyY = 0;
  }
}

function drawPlayer() {
  fill(123, 123, 0);
  rect(playerX, playerY, 50, 50);
}

function drawEnemy() {
  fill(255, 123, 123);
  circle(enemyX, enemyY, 30);
}

function drawScore() {
  textSize(20);
  textAlign(RIGHT);
  text(score, width - 20, 30);
}