var fixedRect, movingRect;
var car,wall;

function setup() {
  createCanvas(1200,800);
  

  car = createSprite(100,200,50,50);
  car.shapeColor="blue"
  car.velocityX=4

  wall = createSprite(1000,200,50,120)
  wall.shapeColor="pink";
  
}



function draw() {
  background(0,0,0);  
  

  if(isTouching(car,wall)){
    car.shapeColor="red"
  }

  bounceoff(car,wall)

  drawSprites();
}

