
var monkey , monkey_running;
var ground, groundImage;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score = 0;

function preload(){
  
  
  monkey_running =  loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 500);
  
  monkey = createSprite(100, 400, 50, 50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(300, 435, 1200, 10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  
  foodGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw() {
  background("green");
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score : "+ score, 500, 50);
  
  var survivalTime = 0;
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time : "+ survivalTime, 100, 50);
  
  food();
  obstacles();
  
  if(ground.x < 0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")&& monkey.y >= 100){
    monkey.velocityY = -15;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  drawSprites();

}

function food(){
  if(frameCount % 80 === 0){  
  banana = createSprite(1200, 300, 50 ,50);
  banana.y = Math.round(random(120, 200));
  banana.velocityX = -8;
  banana.lifetime = 200;
  banana.addImage(bananaImage);
  banana.scale = 0.1;
    
  foodGroup.add(banana);

  }
  
}

function obstacles(){
  if(frameCount % 300 === 0){
  obstacle = createSprite(1200, 395, 50, 50);
  obstacle.velocityX = -10;
  obstacle.lifetime = 150;
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.2;
    
  obstacleGroup.add(obstacle);
  
  }
  

}






