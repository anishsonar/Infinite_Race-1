var path, obstacle1, obstacle2, obstacle3, gameOver, bird1, grass1, grass2, grass3, grass4, bird2, invisibleGround1, invisibleGround2; 
var pathImg,mainRacerImg1,mainRacerImg1, obstacle1Img, obstacle2Img, obstacle3Img, gameOverImg, bird1Img, grass1Img, grass2Img, grass3Img, grass4Img, bird2Img, invisibleGroundImg, invisibleGroundImg2;
var cycleBell, bird1Sound, bird2Sound;

var END =0; 
var PLAY =1;
var gameState = PLAY;
var select_Sprites1,select_Sprites2;
var distance=0;

function preload(){
  pathImg = loadImage("Path Green.jpg");
  mainRacerImg1 = loadAnimation("mainPlayer1.png","mainPlayer2.png");
  mainRacerImg2= loadAnimation("mainPlayer3.png");
      
obstacle1Img = loadImage("obstacle1.png");
obstacle2Img = loadImage("obstacle2.png");
obstacle3Img = loadImage("obstacle3.jpeg");
gameOverImg = loadImage("gameover.png");
//cycleBell = loadSound("sound/bell.mp3");
  
bird1Img = loadAnimation("Bird1.png","Bird2.png", "Bird3.png");
  
grass1Img = loadImage("grass1.jpeg");
grass2Img = loadImage("grass2.jpeg"); 
grass3Img = loadImage("grass3.jpeg");  
grass4Img = loadImage("grass4.jpeg");
  
bird2Img = loadImage("bird2.png");

bird1Sound = loadSound("birdSound.wav");
bird2Sound = loadSound("bird2Sound.wav")
}

function setup(){
  
createCanvas(windowWidth,windowHeight);
  
// Moving background
path=createSprite(width/2,height/2,width*2,height);
path.addImage(pathImg);


//creating boy running
mainCyclist  = createSprite(180,height/2+60,20,20);
mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
mainCyclist.scale=0.07;
mainCyclist.setCollider("rectangle",0,0,40,40);
gameOver = createSprite(width/2,height/2,20,20);
gameOver.addImage(gameOverImg);
  
  obstacle1G = new Group();
  obstacle2G = new Group();
  obstacle3G = new Group();
  bird1G = new Group();
  grass1G = new Group();
  grass2G = new Group();
  grass3G = new Group();
  grass4G = new Group();
  bird2G = new Group();
}

function draw() {
  background(0);
  drawSprites();
  
  textSize(20);
  fill(255);
  text("Distance: "+ distance,width-200,30);
  
  if(gameState===PLAY){
   gameOver.visible = false;
   
   edges= createEdgeSprites();
   mainCyclist.collide(edges);
   mainCyclist.setCollider("rectangle",0,0,400,400);
  //code to reset the background
    
    if(keyDown("UP_ARROW")){
    mainCyclist.y = mainCyclist.y - (5+distance/100);
    }
       
    invisibleGround2 = createSprite(20,height - 250,width,15) ;
    mainCyclist.collide(invisibleGround2);
   
    if(keyDown("DOWN_ARROW")){
      mainCyclist.y = mainCyclist.y +          (5+distance/100); 
    }
  invisibleGround1 = createSprite(20,height - 80,width,15) ;
    mainCyclist.collide(invisibleGround1); 
    invisibleGround1.visible = false;
   invisibleGround2.visible = false;
  if(path.x < -1.24*width ){
    path.x = width;
  }
  frameRate(50) ;
distance=distance + Math.round  (getFrameRate()/40);
path.velocityX = -(6+2*distance/150);
  
  
    if (frameCount % 100 == 0){
  select_Sprites1 = Math.round(random(1,5)) ;
  select_Sprites2 = Math.round(random(1,5)) ;
     createObstacle1();
     createObstacle2();
     createObstacle3();
      createBird1();
      createGrass1();
      createGrass2();
      createGrass3();
      createGrass4();
      createBird2();
    }

    
 //  if(keyDown("SPACE")){
 //    cycleBell.play() ;  
 //  }    
    
    if (obstacle1G.isTouching(mainCyclist)) {
      mainCyclist.addAnimation("SahilRunning",mainRacerImg2);
        obstacle1G.destroyEach();
        obstacle2G.destroyEach();
        obstacle3G.destroyEach();
        bird1G.destroyEach();
        bird2G.destroyEach();
        grass1G.destroyEach();
        grass2G.destroyEach();
        grass3G.destroyEach();
        grass4G.destroyEach();
        gameState = END;
    }
      
      if (obstacle2G.isTouching(mainCyclist)) {
         mainCyclist.addAnimation("SahilRunning",mainRacerImg2);
        obstacle1G.destroyEach();
        obstacle2G.destroyEach();
        obstacle3G.destroyEach();
        bird1G.destroyEach();
        bird2G.destroyEach();
        grass1G.destroyEach();
        grass2G.destroyEach();
        grass3G.destroyEach();
        grass4G.destroyEach();
        gameState = END;
    }
      
    if (obstacle3G.isTouching(mainCyclist)) {
       mainCyclist.addAnimation("SahilRunning",mainRacerImg2);  
      obstacle1G.destroyEach();
        obstacle2G.destroyEach();
        obstacle3G.destroyEach();
      bird1G.destroyEach();
        bird2G.destroyEach();
        grass1G.destroyEach();
        grass2G.destroyEach();
        grass3G.destroyEach();
        grass4G.destroyEach();
        gameState = END;
    }
 }
  
   if(gameState === END){
    path.velocityX = 0;
     gameOver.visible = true;
   }    
  
  if(keyDown("space")){
     RESET() ;  
  } 
  
}

function createObstacle1(){
  if(select_Sprites1 == 1){
 obstacle1 = createSprite (width-5,height*2/3-random(50,-50),20,20);
 obstacle1.addImage(obstacle1Img) ;
 obstacle1.scale = random (0.1, 0.12) ;
 obstacle1.velocityX = -(6+2*distance/150);
 obstacle1.setLifetime = 100;
 obstacle1.setCollider("rectangle",0,0,obstacle1.width,obstacle1.height);
 obstacle1G.add(obstacle1);
  }
}

function createObstacle2(){
  if(select_Sprites1 == 2){
 obstacle2 = createSprite (width-5, height*2/3-random(50,-50),20,20);
 obstacle2.addImage(obstacle2Img) ;
 obstacle2.scale = random (0.15, 0.2) ;
 obstacle2.velocityX = -(6+2*distance/150);
 obstacle2.setLifetime = 100;
 obstacle2.setCollider("rectangle",0,0,obstacle2.width,obstacle2.height);
 obstacle2G.add(obstacle2);
  }
}
function createObstacle3(){
  if(select_Sprites1 == 3){
 obstacle3 = createSprite (width-5,  height*2/3-random(50,-50),20,20);
 obstacle3.addImage(obstacle3Img) ;
 obstacle3.scale = random (0.3, 0.4) ;
 obstacle3.velocityX = -(6+2*distance/150);
 obstacle3.setLifetime = 100;
 obstacle3.setCollider("rectangle",0,0,obstacle3.width,obstacle3.height);
 obstacle3G.add(obstacle3);
  }
}

function createBird1(){
  if(select_Sprites1 == 4){
 bird1 = createSprite (width-5,  height/2-random(150,200),20,20);
 bird1.addAnimation("bird1",bird1Img) ;
 bird1.scale = 1 ;
 bird1.velocityX = -(6+2*distance/100);
 bird1.setLifetime = 100;
 bird2Sound.play();
 bird1G.add(bird1);
  }
}

function createGrass1(){
  if(select_Sprites2 == 1){
 grass1 = createSprite (width-5,  height/2-40,20,20);
 grass1.addImage(grass1Img) ;
 grass1.scale = 0.4 ;
 grass1.velocityX = -(6+2*distance/150);
 grass1.setLifetime = 100;
 grass1G.add(grass1);
    

  }
}

function createGrass2(){
  if(select_Sprites2 == 2){
 grass2 = createSprite (width-5,  height/2-40,20,20);
 grass2.addImage(grass2Img) ;
 grass2.scale = 0.4;
 grass2.velocityX = -(6+2*distance/150);
 grass2.setLifetime = 100;
 grass2G.add(grass2);
  }
}
    
function createGrass3(){
  if(select_Sprites2 == 3){
 grass3 = createSprite (width-5,  height/2-40,20,20);
 grass3.addImage(grass3Img) ;
 grass3.scale = 0.4;
 grass3.velocityX = -(6+2*distance/150);
 grass3.setLifetime = 100;
 grass3G.add(grass3);
 
  }
}
function createGrass4(){
  if(select_Sprites2 == 4){
 grass4 = createSprite (width-5,  height/2-40,20,20);
 grass4.addImage(grass4Img) ;
 grass4.scale = 0.4;
 grass4.velocityX = -(6+2*distance/150);
 grass4.setLifetime = 100;
 grass4G.add(grass4);
    

  }
}

function createBird2(){
  if(select_Sprites2 == 5){
 bird2 = createSprite (0,  height/2-random(150,200),20,20);
 bird2.addImage(bird2Img) ;
 bird2.scale = 0.15 ;
 bird2.velocityX = (6+2*distance/500);
 bird2.setLifetime = 100;
 bird1Sound.play();
 bird2G.add(bird2);
  }
}
function RESET(){
 gameState = PLAY; 
 gameOver.visible = false;
 mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
 distance=0;
}
