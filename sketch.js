var car,wall
var spead,weight

function setup() {
  createCanvas(800,400);
 car= createSprite(50, 200, 50, 50);
 wall=createSprite(700,200,60,170)
 spead=random(55,90)
 weight=random(400,1500)
 car.velocityX=spead;
 wall.shapeColor="green"

}

function draw() {

  background(0);
 
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0
    var diformation=0.5*weight*spead*spead/22509;
    if(diformation>180){
   car.shapeColor="red"

    }
    if(diformation<180&&diformation>100){
      car.shapeColor="yellow"
    }
    if(diformation<100){
      car.shapeColor="green"
    }

}
    
  console.log(car.x)
  
  drawSprites();
}