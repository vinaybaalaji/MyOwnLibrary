var fixedRect,movingRect;


function setup() {
  createCanvas(800,400);
 fixedRect = createSprite(100, 100, 50, 80);
// fixedRect.velocityY=2;
 movingRect=createSprite(100,300,50,50);
 //movingRect.velocityY=-2;
 fixedRect.debug="true";
 movingRect.debug="true";
}

function draw() {
  background(0); 
 // bounceOff(movingRect,fixedRect);
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor="blue";
    fixedRect.shapeColor="blue";
  }
  else{
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  
  drawSprites()
}
