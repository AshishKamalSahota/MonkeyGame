var play=1;
var end=2;
var monkey,ground ,ground2, monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
//var bagroup, obstacleGroup;
var score;
var gamestate=1;
let banana2;
let obstacle2;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500, 300);
  obgroup=new Group();
  ob=createGroup();
  bgroup=new Group();
  bgroup=createGroup();
    monkey = createSprite(50,240,20,50);
  monkey.addAnimation("running", monkey_running);
 
  monkey.scale = 0.09;
  ground2 = createSprite(200,240,500,5);
  ground = createSprite(200,260,500,10);
 
  ground.x =ground.width /2;
    ground2.x =ground2.width /2;
ground2.visible = false;
 
  
  //create Obstacle and Cloud Groups
  obstaclesGroup = createGroup();
  cloudsGroup = createGroup();
  
  //console.log("Hello" + 5);
  
  monkey.setCollider("circle",0,0,120);
  //monkey.debug = true;
  score = 0;
 

  
}


function draw() {
  background(1000);
  if (gamestate===1){
     if(keyDown("space")&& monkey.y >=220) {
        monkey.velocityY = -15;
        
    }
    monkey.velocityY = monkey.velocityY + 0.8;
    if (frameCount % 80 === 0){
 banana2 = createSprite(550,140,20,20);
banana2.velocityX = -6;
      banana2.lifetime=100;
 banana2.addImage(bananaImage);
  banana2.scale=0.1;
    //banana2.debug = true;
      bgroup.setColliderEach("circle",0,0,180);
      bgroup.add(banana2);
      
 }
    if (bgroup.isTouching(monkey)){
        bgroup.destroyEach();
      score=score+1;
      }
    if (obgroup.isTouching(monkey)){
       gamestate=end;
      }
  if (frameCount % 90 === 0){
      obstacle2 = createSprite(550,240,20,20);
      obstacle2.velocityX = -6;
      obstacle2.addImage(obstaceImage);
      obstacle2.scale=0.1;
    //obstacle2.debug=true;
     obstacle2.setCollider("circle",0,0,140);
  obstacle2.lifetime=100;
    obgroup.add(obstacle2);
    }
  
    obstacle();
  banana();
  }
  
  drawSprites();
  if (gamestate===end){
    banana2.setvelocityX=0;
    obstacle2.setvelocityX=0;
    fill("red");
    textSize(20);
    text("game over",230,150);
    
  }
  text("score"+score,420,50);
  monkey.collide(ground2);
}

function obstacle(){
  
}
function banana(){

}