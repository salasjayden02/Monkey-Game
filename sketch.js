var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png");

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  FoodGroup = new Group();
  
  obstacleGroup = new Group();
  


}



function setup() {
  createCanvas(300, 300);



  monkey = createSprite(80, 264.4, 20, 20);
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale = 0.1;
  ground = createSprite(400, 300, 900, 10)
  ground.shapeColor = "grey";
  ground.debug = false;
  ground.velocityX = -4;

  score=0;
  
  drawSprites();
}


function draw() {
  background("white");

  ground.x = monkey.velocityY + 0.8;

  score = score + Math.round(frameRate() / 61);
  stroke("black");
  text("Survival Time:"+score,115,140);
  textSize(10);
  
  monkey.collide(ground);

  if (keyDown("space") && monkey.y >= 240) {
    monkey.velocityY = -12;
  }

  monkey.velocityY = monkey.velocityY + 0.8;

  obstacles();
  food();
  drawSprites();
}

function food() {
  if (frameCount%80===0) {
banana=createSprite(400, 250, 20, 20);
banana.addImage(bananaImage);
banana.y=Math.round(random(220, 170))
banana.velocityX=-4;
banana.scale=0.1;
banana.setCollider("rectangle",0,0,banana.width,280);
banana.debug=true;
banana.lifetime=120;
FoodGroup.add(banana);
  }


}

function obstacles() {
  if (frameCount%300===0) {
obstacle=createSprite(400, 280, 20, 20);
obstacle.addImage("obstacleImage",obstacleImage);
obstacle.velocityX=-4;
obstacle.scale=0.1;
obstacle.debug=true;
obstacle.lifetime=120;
obstacleGroup.add(obstacle);
  }


}



















