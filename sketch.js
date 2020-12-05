var player1,player1img;
var player2,player2img;
var timer;
var asteroidsR,asteroidsL;
var asteroidsRimg,asteroidsLimg;
var position
function preload()
{
player1img = loadImage("images/rocket1.png")
player2img = loadImage("images/rocket2.png")
asteroidsLimg = loadImage("images/meteors2.png")
asteroidsRimg = loadImage("images/meteors.png")
}

function setup() {
	createCanvas(800,800)
player1 = createSprite(200,720,50,50);
player2 = createSprite(600,720,50,50);
timer = createSprite(400,650,10,350)
player1.addImage(player1img)
player2.addImage(player2img)
player1.scale = 0.3
player2.scale = 0.3

  
}


function draw() {
  rectMode(CENTER);
  background(0);
if(keyDown("W")){
  player1.velocityY=-4
}
if(keyDown("U")){
  player2.velocityY=-4
}
if(keyDown("S")){
  player1.velocityY=2
}
if(keyDown("J")){
  player2.velocityY=2
}
timer.velocityY = 0.3

/*if(timer.y===980){
game over
}*/

position = Math.round(random(1,2))
if(position === 1){
  if(frameCount % 60 === 0){
  asteroidsR = createSprite(810,random(20,500),200,400)
  asteroidsR.addImage(asteroidsRimg)
  asteroidsR.scale = 0.3
  asteroidsR.velocityX = random(-1,-8);
  }
}
if(position === 2){
if(frameCount % 60 === 0){
asteroidsL = createSprite(-10,random(20,500),200,400)
asteroidsL.addImage(asteroidsLimg)
asteroidsL.scale = 0.3
asteroidsL.velocityX = random(1,8);
}}


  fill("white")
  text("Press W to move First player and U to move Second player",240,60)
  text("Press S to move First player backwards and J to move Second player backwards",240,90)
  drawSprites();
}



