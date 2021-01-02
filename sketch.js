var monkey , monkey_running
var ground;
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("monkey",monkey_running)
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10)
  ground.velocityX=-4;
  console.log(ground.x)
  
  bananaGroup=createGroup();
  obstacleGroup=createGroup();
}


function draw() {
 background("white")
  stroke("white")
  textSize(20)
  fill("white")
  text("Score"+score,350,50)
  
  stroke("black")
  textSize(15)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("SurvivalTime"+survivalTime,270,30)
  
  food();
  obstacle();
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space")&&monkey.y>310){
    monkey.velocityY=-8;
  }
  
  monkey.velocityY=monkey.velocityY+0.2;
   monkey.collide(ground)
  
drawSprites();
}
function food(){
   if(frameCount%85===0){
     var banana=createSprite(300,130,20,20);
     banana.scale=0.1;
     banana.y=Math.round(random(120,200))
     banana.addImage(bananaImage)
     banana.velocityX=-5;
     banana.lifetime=60
     bananaGroup.add(banana);
   }
}
function obstacle(){
   if(frameCount%300===0){
     var obstacle=createSprite(350,300,20,20);
     obstacle.scale=0.1;
     obstacle.addImage(obstacleImage)
     obstacle.velocityX=-5;
     obstacle.lifetime=60
     obstacleGroup.add(obstacle);}
}