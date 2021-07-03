var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);  
  //background("white");
}



function draw() {
  //background(r,g,b);
  if(keyIsDown(RIGHT_ARROW)){
    background("red")
  }
  if(keyIsDown(LEFT_ARROW)){
    background("blue")
  }
  //drawSprites();
}

