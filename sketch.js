
var bg, bgImage
var bird,birdFlying
var ghost, ghostRunning
var person, personWalking

function preload(){
 bgImage = loadImage("background.jpeg");
 birdFlying = loadAnimation("birdFlying1.png", "birdFlying2.png", "birdFlying3.png");
 ghostRunning = loadAnimation("GhostBusterRunning1.png", "GhostBusterRunning2.png", 
 "GhostBusterRunning3.png", "GhostBusterRunning4.png", "GhostBusterRunning5.png",
  "GhostBusterRunning6.png", "GhostBusterRunning7.png", "GhostBusterRunning8.png")
  personWalking = ("PersonWalking1.png", "PersonWalking2.png", "PersonWalking3.png", 
  "PersonWalking4.png") 
}

function setup(){
  createCanvas(600,200)
  
bg = createSprite(300, 100, 600, 200);
bg.addImage("bg", bgImage);
bg.scale = 1.5;
bg.velocityX = -3;

person = createSprite(50, 180, 10,10);
person.addAnimation("walking", personWalking);

ground = createSprite(300, 180, 600, 2);
 ground.visible = false;
}

function draw(){
  background("white");
 
  if(bg.x<0){
    bg.x = bg.width/3;
  }
  ground.collide(person)
  birds()
drawSprites()
}

function birds(){
  if(frameCount%80===0){
    bird = createSprite(600, 180, 2,2)
    bird.addImage("Flying", birdFlying)
    bird.velocityX = -3;
  }
}