
var fixedRect,movingRect

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(255,255,255);  
 movingRect.x= World.mouseX
 movingRect.y=World.mouseY
 console.log(movingRect.x-fixedRect.x)

 if (movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2){
   movingRect.shapeColor="red"
   fixedRect.shapeColor="red"
 }
 else{
   movingRect.shapeColor="green"
   fixedRect.shapeColor="green"
 }

 drawSprites()
}