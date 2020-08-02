var object
var moving
var square
function setup() {
  createCanvas(800,400);
  object=createSprite(400, 200, 50, 50);
 
  square= createSprite(400,300,40,40);
    moving=createSprite(780,90,20,90);

}

function draw() {
  background(0,0,255);  
  drawSprites();

  moving.y=World.mouseY;
  moving.x=World.mouseX;

  if(collide(moving,square)){
  moving.shapeColor= "green"
  square.shapeColor= "green"
  }
else {
  moving.shapeColor= "black"
  square.shapeColor= "black"
}
  
  
}

function collide(object1, object2){
  if(object1.x-object2.x < object1.width/2+object2.width/2
    && object2.x - object1.x < object1.width/2+object2.width/2
    && object1.y - object2.y < object1.height/2+object2.height/2
    && object2.y - object1.y < object1.height/2+object2.height/2){
return true
  } 

  else {
 return false
  }

}
