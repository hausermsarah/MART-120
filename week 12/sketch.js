var meteorx = 80;
var meteory = 80;
var meteorxmovement= 80;
var meteorymovement= 30;

var blockX = 100; 
var blockY = 100; 
var blockSize = 50; 

var wincon1 = true||false
var wincon2 = true||false

function setup()
{
createCanvas(1900,400);
 
}

function draw()
 {
   
//background and border
    background(255);
    rect(1890,0,10,400)
    rect(0,0,10,400)
    rect (0,390,1820,10);
    rect(0,0,1920,10);
    fill(120,123,4);
 
    //Meteor Shower

fill(220,98,163)
circle(meteorx, meteory, 60);
meteorxmovement = (floor(random()*20)+1);
meteorymovement = (floor(random()*10)+1) ;
meteorx += meteorxmovement;
meteory += meteorymovement;
if(meteorx > 1900)
{meteorx = 0;}
if(meteorx < 0)
{meteorx = 0;}
if(meteory > 400)
{meteory = 0; }
if(meteory < 0)
{meteory = 400;}

{
  //the block
  rect(blockX, blockY, blockSize, blockSize);
  
  // I used outside sources and was able to find a way to make the block follow my mouse! I thought it looked cool!
  blockX = mouseX - blockSize / 2;
  blockY = mouseY - blockSize / 2;
}
  function mousePressed() {
  isTrackingMouse = !isTrackingMouse;
}
   //exit sign
  
text("Exit", 1750,370)
textSize(36)

   //Win Conditions
if(blockX >= 1820  && blockX <= 1900) wincon1 = true  
else {wincon1 = false};
if (blockY >= 380 && blockY <=600) wincon2 = true
else {wincon2 = false};

if (wincon1 == true && wincon2 == true)
{text("You win! great job! ", 1600,200)}

if(wincon1 == false || wincon2 == false)
{console.log ("Make it to the Exit!!");}
else 
{ if (wincon1 == true && wincon2 == true)
    {console.log ("Nice! You Won!")} }
}
