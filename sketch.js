var img1, img2, img3, img4, img5, img6, venusleft, venusright;
var face1, face2, face3, face4, face5, face6;
var i = 50;
var i2 = 775;
x = 225;
y = 180;

function preload(){
  img1 = loadImage("images/ColleenBalcony.png");
  img2 = loadImage("images/ColleenEating.png");
  img3 = loadImage("images/ColleenLeaning.png");
  img4 = loadImage("images/ColleenSmiling.png");
  img5 = loadImage("images/ColleenSquatting.png");
  img6 = loadImage("images/ColleenWalking.png");
  venusleft = loadImage("images/venusleft.png");
  venusright = loadImage('images/venusright.png');
  face1 = loadImage('images/face1.jpg');
  face2 = loadImage('images/face2.jpg');
  face3 = loadImage('images/face3.jpg');
  face4 = loadImage('images/face4.jpg');
  face5 = loadImage('images/face5.jpg');
  face6 = loadImage('images/face6.jpg');
}

function setup(){
  createCanvas(1000, 600);
  background(255, 235, 248);
}

function draw(){
  background(255, 235, 248, 5);

  image(img1, 150, 75, 225, 180);
  image(img2, 400, 75, 225, 180);
  image(img3, 650, 75, 225, 180);
  image(img4, 150, 275, 225, 180);
  image(img5, 400, 275, 225, 180);
  image(img6, 650, 275, 225, 180);
  fill(225, 119, 186);
  textSize(100);
  textFont("monospace")
  text("A", 50, 200);
  text("B", 475, 65);
  text("C", 900, 200);
  text("D", 50, 400);
  text("E", 475, 525);
  text("F", 900, 400);
  image(venusleft, i, 100, 201, 602);
  image(venusright, i2, 100, 201, 602);

  if(mouseIsPressed){
    i = i - 5;
    i2 = i2 + 5;
    fill(random(0, 255), random(0, 235), random(0, 248));
    textSize(32);
    textFont("monospace");
    text("XOXO", random(width), random(height));
  }

  if(keyIsPressed){
      if(key == "a"){
        image(face1, 150, 75, x, y);
        // x = x + 25;
        // y = y + 25;
        fill(random(0, 255), random(0, 235), random(0, 248));
        textSize(32);
        textFont("monospace");
        text("<3", random(width), random(height));
      }
  }

  if(keyIsPressed){
      if(key == "b"){
        image(face2, 400, 75, x, y);
        fill(random(0, 255), random(0, 235), random(0, 248));
        textSize(32);
        textFont("monospace");
        text("^.^", random(width), random(height));
      }
  }

  if(keyIsPressed){
      if(key == "c"){
        image(face3, 650, 75, x, y);
        fill(random(0, 255), random(0, 235), random(0, 248));
        textSize(32);
        textFont("monospace");
        text("yo", random(width), random(height));
      }
  }

  if(keyIsPressed){
      if(key == "d"){
        image(face4, 150, 275, x, y);
        fill(random(0, 255), random(0, 235), random(0, 248));
        textSize(32);
        textFont("monospace");
        text("luv it", random(width), random(height));
      }
  }

  if(keyIsPressed){
      if(key == "e"){
        image(face5, 400, 275, x, y);
        fill(random(0, 255), random(0, 235), random(0, 248));
        textSize(32);
        textFont("monospace");
        text("PEACE", random(width), random(height));
      }
  }

  if(keyIsPressed){
      if(key == "f"){
        image(face6, 650, 275, x, y);
        fill(random(0, 255), random(0, 235), random(0, 248));
        textSize(32);
        textFont("monospace");
        text("XOXO", random(width), random(height));
      }
  }
}
