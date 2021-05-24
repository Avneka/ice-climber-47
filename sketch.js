var mountaineer, mountaineer1Image,mountaineer2Image
var ground;
var obstacles, obstaclesImage;
var wall1;
var wall2;
var staticSlideGroup;
var movingSlideGroup;
var backgroundImage;


function preload(){
obstaclesImage = loadImage("images/icicle.png")
mountaineer1Image = loadImage("images/iceClimber1.png")
mountaineer2Image = loadImage("images/iceClimber2.png")
backgroundImage = loadImage("images/bg.jpg")
}


function setup() {
  createCanvas(displayWidth,displayHeight*3);
 ground = createSprite(670, displayHeight*3-20 , displayWidth, 40);
 ground.shapeColor = "lightBlue"
 wall1 = createSprite(5,displayHeight*3-10, 5,displayHeight*10)
 wall2 = createSprite(displayWidth-20,displayHeight*3-10, 5,displayHeight*10)

 mountaineer = createSprite(displayWidth/2,displayHeight*3-100,40,40)
mountaineer.addImage(mountaineer1Image)
mountaineer.scale = 0.3;
mountaineer.debug = true;
mountaineer.setCollider("rectangle",0,0,40,100)
movingSlideGroup = new Group();
staticSlideGroup = new Group();
 for(var i= 100 ; i<displayHeight*3; i = i+200){
var randomWidth = Math.round(random(100,600))
var randomVel = Math.round(random(3,10))
var staticSlide = createSprite(10,i,randomWidth,20);
var staticRightSlide = createSprite(displayWidth-40,i,randomWidth,20)
var movingSlide = createSprite(120,i+100,100,20);

movingSlide.velocityX = randomVel
staticSlideGroup.add(staticSlide)
movingSlideGroup.add(movingSlide);

 }



}

function draw() {
  background(backgroundImage);  
  movingSlideGroup.bounceOff(wall1);
  movingSlideGroup.bounceOff(wall2);
  mountaineer.collide(ground);
  mountaineer.velocityY = 10 
  if(keyDown("space")){
mountaineer.velocityY = -10
  }

  
 for(var i= 0 ; i<movingSlideGroup.length; i = i++){
  if(mountaineer.isTouching(movingSlideGroup.get(i))){
    mountaineer.velocityY = 0
    movingSlideGroup.get(i).x = mountaineer.x
    }
  }
   drawSprites();
}