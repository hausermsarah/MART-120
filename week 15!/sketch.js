// Player class
class Player {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.width = 40;
      this.height = 40;
      this.speed = 5;
    }
  
    display() {
      fill(255,182,193);
      rect(this.x, this.y, this.width, this.height);
    }
  
    update() {
  
      if (keyIsDown(LEFT_ARROW)) {
        this.x -= this.speed;
      }
      if (keyIsDown(RIGHT_ARROW)) {
        this.x += this.speed;
      }
      if (keyIsDown(UP_ARROW)) {
        this.y -= this.speed;
      }
      if (keyIsDown(DOWN_ARROW)) {
        this.y += this.speed;
      }
  
      this.x = constrain(this.x, 0, width - this.width);
      this.y = constrain(this.y, 0, height - this.height);
    }
  }
  
  // Obstacle class
  class Obstacle {
    constructor(x, y, width, height, speed) {
      this.x = x;
      this.y = y;
      this.width = 40
      this.height = 50
      this.speed = speed;
    }
  
    display() {
      fill(32,178,170);
      rect(this.x, this.y, this.width, this.height);
    }
  
    update() {
      this.y += this.speed;
      if (this.y > height) {
        this.y = -this.height;
      }
    }
  
    checkCollision(player) {
   
      if (
        this.x < player.x + player.width &&
        this.x + this.width > player.x &&
        this.y < player.y + player.height &&
        this.y + this.height > player.y
      ) {
        return true; // Collision detected
      }
      return false; // No collision
    }
  }
  
  let player;
  let obstacles = [];
  let gameover = false;
  
  function setup() {
    createCanvas(400, 400);
    player = new Player(width / 2 - 20, height - 60);
  
    // Create obstacles
    for (let i = 0; i < 5; i++) {
      let x = random(width - 30);
      let y = random(-height, -40);
      let speed = random(1, 5);
      obstacles.push(new Obstacle(x, y, width, height, speed));
    }
  }
  
  function draw() {
    background(150);
    fill(123,200,50);
    triangle(30,75,58,20,86,75);
    fill(	186,85,211);
    circle(350,350,50);
  textSize(35);
  text('Dodge the Rectangles!!', 10,30);
  fill(0, 102, 153);
  
    if (!gameover) {
  
      player.update();
      player.display();
  
      for (let obstacle of obstacles) {
        obstacle.update();
        obstacle.display();
  
      
        if (obstacle.checkCollision(player)) {
          gameover = true;
          break;
        }
      }
    } else {
  
      textSize(50);
      textAlign(CENTER);
      fill(220,20,60);
      text("Game Over", width / 2, height / 2);
    }
  }