var bullet,wall,speed,weight,thickness


function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83)
  bullet=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,60,height/2)
  wall.shapeColor="brown"
  bullet.velocityX=speed;
}

function draw() {
  background("black"); 
  if(wall.x-bullet.x<wall.width/2+bullet.width/2) 
  {
    bullet.velocityX=0
    d=0.5*weight*speed*speed/thickness*thickness*thickness;
    if(d<10)
    {
      bullet.shapeColor="green"
    }
    
    if(d>10)
    {
      bullet.shapeColor="red"
    }
  }
  drawSprites();
}