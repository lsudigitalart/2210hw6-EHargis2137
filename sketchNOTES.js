var img;
var i = 32;

function preload(){
  img = loadImage("images/breakfast.jpg"); //green = string
}

function setup(){
  createCanvas(640, 480);
}

function draw(){
  //background(255);
  fill(random (0,255), random(0, 255), 0);
  if(mouseIsPressed){ //image appears when mouse is held down
    textSize(i);
    textFont("monospace");
    text("hungry", mouseY, height/2);
  }

  if(keyIsPressed){ //without "if(keyIsPressed)", the last letter will repeat forever
    text(key, random(width), random(height)); //Display last key pressed
  } else{
    background(255, 255, 255, 10);
  }

  image(img, i, 0, mouseX, mouseY); //mouse scales the image
  i = i + 0.1; //makes image translate
}
