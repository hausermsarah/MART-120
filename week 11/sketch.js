var circleX = 100;
var circleY = 100;
var circleDirection = 5;

var circle2X = 100;
var circle2Y = 400;
var circle2Direction = 1;

var circle3X = 100;
var circle3Y = 400;
var circle3Direction = 4;

var squareX = 200;
var squareY = 185;
var squareDirection = 3;

var size = 22;
var count = 0;
var sizeDirection = 5;

let x = 0;
let y = 0;
let xspeed = 5;
let yspeed = 1;

function setup() {
    createCanvas(520, 520);
  }
  
  function draw() 
    {background('rgba(158,252,158,0.25)');
  
    // background circle 
    fill (255, 153, 202);
    circle(circleX,circleY,175);
     circleX+=circleDirection;
    if(circleX >= 418 || circleX <= 82)
    {
        circleDirection *= -1;
    }
    
    // background circle 
    fill (255, 153, 202);
    circle(circle2X,circle2Y,175);
     circle2X+=circle2Direction;
    if(circle2X >= 520 || circle2X <= 0)
    {
        circle2Direction *= -1;
    }
      // background circle 
    fill (210, 150, 210);
    circle(circle3X,circle3Y,100);
     circle3Y+=circle3Direction;
    if(circle3Y <= 0 || circle3Y >= 520)
    {
        circle3Direction *= -1;
}
      
  rect(x, y, 50, 50);
  
  // Update the position of the rectangle
  x += xspeed;
  y += yspeed;
  
  // Bounce the rectangle off the edges of the canvas
  if (x < 0 || x > width - 50) {
    xspeed = -xspeed;
  }
  if (y < 0 || y > height - 50) {
    yspeed = -yspeed;
  }


    //Hair
    noStroke()
    fill(102, 51, 0);
    arc(260, 300, 300, 500, QUARTER_PI + HALF_PI, QUARTER_PI, OPEN);
  
    //Face 
    noStroke()
    fill(247, 221, 212);
    ellipse(260, 255, 200, 260);
  
    //Ears
    arc(150, 265, 40, 60, 0, PI + HALF_PI, PI + HALF_PI, OPEN);
    arc(370, 265, 40, 60, 0, PI + PI + HALF_PI, OPEN)
  
    
    //Eyebrows
    stroke(21, 19, 19);
    strokeWeight(5);
    noFill();
    arc(210, 235, 45, 15, PI, TWO_PI, OPEN);
    arc(310, 235, 45, 15, PI, TWO_PI, OPEN);
  
  
    //Eyes
    strokeWeight(1)
    fill(32, 19, 19);
    ellipse(210, 260, 28, 25);
    ellipse(310, 260, 28, 25);
  
    //Eyeballs
    noStroke()
    fill(255)
    ellipse(207, 252, 8, 8);
    ellipse(306, 252, 8, 8);
  
    //Nose
    fill(255, 102, 102 )
    triangle(260, 270, 270, 300, 250, 300);
  
    //Mouth
    fill(255, 102, 102);
    arc(260, 325, 49, 35, 0, PI);
  
    //Hoodie
    rectMode(CENTER)
    fill(255, 153, 202)
    rect(260, 470, 205, 150, 20);
    fill(255, 204, 229)
    fill(255)
    ellipse(300, 432, 15, 15);
    ellipse(220, 432, 15, 15);
    rect(300, 460, 8, 65, 20);
    rect(220, 460, 8, 65, 20);
  
  
    //Neck
    fill(247, 221, 212)
    rect(260, 380, 50, 55, 20);
     
      // square
    fill(210, 150, 210);
    rect(200,squareY,100,150);
    squareY += squareDirection;
    if(squareY <= 0 || squareY >= 450 )
    {
        squareDirection *= -1;

}
  //name
     fill(0);
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }

    text("Sarah Hauser",200,500 );

    }