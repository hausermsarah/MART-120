function setup() {
    createCanvas(520, 520);
  }
  
  function draw() {
    background(255);
  
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
  
  
  
  
  
  
  
  
  
  
  
  }