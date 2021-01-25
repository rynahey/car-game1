var car,wall;
var speed,weight;
function setup() {
  createCanvas(1000,500); 

  car=createSprite(50,200,30,30);
  car.shapeColor=("red");
  car.velocityX=5;

 wall=createSprite(800, 200, 60,height/2);
 wall.shapeColor=("yellow");

 speed=random(55,90);
 weight=random(400,1500);
}

function draw() {
  background("lightBlue");

if(wall.x-car.x<(car.width+wall.width)/2){
  car.velocityX=0;
  var deformation=0.5*weight*speed*speed/22500;
  if(deformation>180){
    car.shapeColor="black";
  }
  if(deformation<180&&deformation>100){
    car.shapeColor="pink";
  }
  if(deformation<100){
    car.shapeColor="green";
  }
}
  drawSprites();
}

