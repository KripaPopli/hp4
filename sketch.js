var hp1,hp1img;
var hp2,hp2img;
var cave1, cave2, caveimg;
var riddle1, riddle1img;
var riddle1Answer, riddle1Ansimg, riddle1Option, riddle1Opimg;
var riddle2, riddle2img;
var riddle2Answer, riddle2Ansimg, riddle2Option, riddle2Optimg;
var centaur1, centaur2, centaurimg;
var centaur5, centaur6;
var forest1, forest2, forestimg;
var river1, river2, riverimg;
var wizard1, wizard2, wizardimg;
var dem1, dem2, demimg;
var spell2, spell2img;
var forestRiddle, forestRidimg;
var riddle3Answer, riddle3Ansimg, riddle3Option, riddle3Optimg;
var wizardRiddle, wizardRidimg;
var riddle4Answer, riddle4Ansimg, riddle4Option, riddle4Optimg;
var riverRiddle, riverRidimg;
var riddle5Answer, riddle5Ansimg, riddle5Option, riddle5Optimg;
var centRiddle, centRidimg;
var riddle6Answer, riddle6Ansimg, riddle6Option, riddle6Optimg;
var demRiddle, demRidimg;
var ridd1e7Answer, riddle7Ansimg, riddle7Option, riddle7Optimg;
var ridd1e8Answer, riddle8Ansimg, riddle8Option, riddle8Optimg;
var ridd1e9Answer, riddle9Ansimg, riddle9Option, riddle9Optimg;
var ridd1e10Answer, riddle10Ansimg, riddle10Option, riddle10Optimg;
var ridd1e11Answer, riddle11Ansimg, riddle11Option, riddle11Optimg;
var ridd1e12Answer, riddle12Ansimg, riddle12Option, riddle12Optimg;
var ridd1e13Answer, riddle13Ansimg, riddle13Option, riddle13Optimg;
var ridd1e14Answer, riddle14Ansimg, riddle14Option, riddle14Optimg;
var gameState = 0;


function preload(){
  
  hp1img = loadImage("hp1.png");
  hp2img = loadImage("hp2.png");
  caveimg = loadImage("cave.png");
  centaurimg = loadImage("centaur.png");
  forestimg = loadImage("forest.png");
  riverimg = loadImage("river.png");
  wizardimg = loadImage("wizard.png");
  demimg = loadImage("dementor.png")
  riddle1img = loadImage("spell1.png");
  riddle2img = loadImage("centaur1.png");
  forestRidimg = loadImage("forest1.png");
  demRidimg = loadImage("forest1.png")
  riverRidimg = loadImage("river1.png");
  centRiddle = loadImage("centaur2.png")
  wizardRidimg = loadImage("wizard1.png");
  riddle1Ansimg =loadImage("spell1Answer.png");
  riddle2Ansimg = loadImage("rid2Ans.png");
  riddle3Ansimg = loadImage("rid3Ans.png");
  riddle4Ansimg = loadImage("rid4Ans.png");
  riddle5Ansimg = loadImage("rid5Ans.png");
  riddle6Ansimg = loadImage("rid6Ans.png");
  riddle7Ansimg = loadImage("rid7Ans.png");
  riddle1Optimg = loadImage("rid1Option.png");
  riddle2Optimg = loadImage("rid2Option.png");
  riddle3Optimg = loadImage("rid3Option.png");
  riddle4Optimg = loadImage("rid4Option.png");
  riddle5Optimg = loadImage("rid5Option.png");
  riddle6Optimg = loadImage("rid6Option.png");
  riddle7Optimg = loadImage("rid7Option.png");
}


function setup(){
  createCanvas (1000,1800);
  
   hp1 = createSprite(100,1600,20,20);
   hp1.addImage(hp1img);
   hp1.scale= 0.3
  
   hp2 = createSprite(500,1600,20,20);
   hp2.addImage(hp2img);
   hp2.scale= 0.3
  
   cave1 = createSprite(100, 1400, 20, 20);
   cave1.addImage(caveimg);
   cave1.scale = 0.4;
   cave1.setCollider("circle", 0,0,50);
  
   cave2 = createSprite(500, 1400, 20, 20);
   cave2.addImage(caveimg);
   cave2.scale = 0.4;
   cave2.setCollider("circle", 0,0,50);
  
   centaur1 = createSprite(100, 1200, 20, 20);
   centaur1.addImage(centaurimg);
   centaur1.scale = 0.4;
   centaur1.setCollider("circle", 0,0,50);
  
   centaur2 = createSprite(500, 1200, 20, 20);
   centaur2.addImage(centaurimg);
   centaur2.scale = 0.4;
   centaur2.setCollider("circle", 0,0,50);
  
   forest1 = createSprite(100, 1000, 20, 20);
   forest1.addImage(forestimg);
   forest1.scale = 0.15;
   forest1.setCollider("circle", 0,0,50);
  
   forest2 = createSprite(500, 1000, 20, 20);
   forest2.addImage(forestimg);
   forest2.scale = 0.15;
   forest2.setCollider("circle", 0,0,50);
  
  wizard1 = createSprite(100, 800, 20, 20);
  wizard1.addImage(wizardimg);
  wizard1.scale = 0.3;
  wizard1.setCollider("circle", 0, 0, 50);
  
  wizard2 = createSprite(500, 800, 20, 20);
  wizard2.addImage(wizardimg);
  wizard2.scale = 0.3;
  wizard2.setCollider("circle", 0, 0, 50);
  
  dem1 = createSprite(100, 600, 20, 20);
  dem1.addImage(demimg);
  dem1.scale = 0.5;
  dem1.setCollider("circle", 0, 0, 50);
  
  dem2 = createSprite(500, 600, 20, 20);
  dem2.addImage(demimg);
  dem2.scale = 0.5;
  dem2.setCollider("circle", 0, 0, 50);
  
  river1 = createSprite(100, 400, 20, 20);
  river1.addImage(riverimg);
  river1.scale = 0.5;
  river1.setCollider("circle", 0, 0, 50);
  
  river2 = createSprite(500, 400, 20, 20);
  river2.addImage(riverimg);
  river2.scale = 0.5;
  river2.setCollider("circle", 0, 0, 50);
  
  centaur5 = createSprite(100, 200, 20, 20);
  centaur5.addImage(centaurimg);
  centaur5.scale = 0.4;
  centaur5.setCollider("circle", 0, 0, 50);
  
  centaur6 = createSprite(500, 200, 20, 20);
  centaur6.addImage(centaurimg);
  centaur6.scale = 0.4;
  centaur6.setCollider("circle", 0, 0, 50);
  
}

function draw(){
  background("White");


   
  if(keyDown(UP_ARROW)){
    hp1.velocityY = -5;
  }
  
  if(keyDown(DOWN_ARROW)){
    hp2.velocityY = -5;
  }
    
  
  spawnCaves();
  spawnCentaur();
  spawnForest();
  spawnWizard();
  spawnRiver();
  spawnCent();
  spawnDem();
  spawnRiver()
  spawnCent();
  spawnCav();
  spawnCen();
  spawnFor();
  spawnWiz();
  spawnDementor();
  spawnRiv();
  spawnCenta();
  spawnCav();
  spawnCen();
  drawSprites();

}

function spawnCaves() {
  
  if(hp1.isTouching(cave1)){
    hp1.velocityY = 0;
    cave1.destroy();
   riddle1 = createSprite(200,1350,20,20);
   riddle1.addImage(riddle1img);
   riddle1.scale= 0.9;
   
    
   riddle1Answer = createSprite(50, 1350, 10, 10);
   riddle1Answer.addImage(riddle1Ansimg);
   riddle1Answer.scale = 0.7;
    
  riddle1Option = createSprite(300, 1380, 10, 10);
  riddle1Option.addImage(riddle1Optimg);
  riddle1Option.scale = 0.7;
  }

  if (gameState===0 && mousePressedOver(riddle1Answer)){
    riddle1.destroy();
    riddle1Answer.destroy();
    riddle1Option.destroy();
  }

  if(gameState === 1){
    hp1.destroy();
    text("you failed, kindly restart the game", 150, 1350);
  }
}

function spawnCentaur() {
  if(hp1.isTouching(centaur1)){
    hp1.velocityY = 0;
    centaur1.destroy();
   riddle2 = createSprite(200,1170,20,20);
   riddle2.addImage(riddle2img);
   riddle2.scale= 0.9;
    
   riddle2Answer = createSprite(200, 1210, 10, 10);
   riddle2Answer.addImage(riddle2Ansimg);
   riddle2Answer.scale = 0.7;
    
  riddle2Option = createSprite(300, 1230, 10, 10);
  riddle2Option.addImage(riddle2Optimg);
  riddle2Option.scale = 0.7;
  }
  if (mousePressedOver(riddle2Answer)) {
    riddle2.destroy();
    riddle2Answer.destroy();
    riddle2Option.destroy();
  }
}

function spawnForest() {
   if(hp1.isTouching(forest1)){
    hp1.velocityY = 0;
    forest1.destroy();
   forestRiddle = createSprite(200,900,20,20);
   forestRiddle.addImage(forestRidimg);
   forestRiddle.scale= 0.9;
     
   riddle3Answer = createSprite(300, 920, 10, 10);
   riddle3Answer.addImage(riddle3Ansimg);
   riddle3Answer.scale = 0.7;
     
  riddle3Option = createSprite(200, 920, 10, 10);
  riddle3Option.addImage(riddle3Optimg);
  riddle3Option.scale = 0.7;
   }
  if (mousePressedOver(riddle3Answer)) {
    forestRiddle.destroy();
    riddle3Answer.destroy();
    riddle3Option.destroy();
  }


}

function spawnWizard() {
   if(hp1.isTouching(wizard1)){
    hp1.velocityY = 0;
    wizard1.destroy();
   wizardRiddle = createSprite(200,540,20,20);
   wizardRiddle.addImage(wizardRidimg);
   wizardRiddle.scale= 0.9;
     
   riddle4Answer = createSprite(190, 560, 10, 10);
   riddle4Answer.addImage(riddle4Ansimg);
   riddle4Answer.scale = 0.7;
     
   riddle4Option = createSprite(330, 570, 10, 10);
   riddle4Option.addImage(riddle4Optimg);
   riddle4Option.scale = 0.7;
   }
   if (mousePressedOver(riddle4Answer)) {
    wizardRiddle.destroy();
    riddle4Answer.destroy();
    riddle4Option.destroy();

  }
}

function spawnDem() {
   if(hp1.isTouching(dem1)){
    hp1.velocityY = 0;
    dem1.destroy();
   demRiddle = createSprite(200,540,20,20);
   demRiddle.addImage(demRidimg);
   demRiddle.scale= 0.9;
     
   riddle5Answer = createSprite(190,560,10,10);
   riddle5Answer.addImage(riddle5Ansimg);
   riddle5Answer.scale = 0.7;
    
   riddle5Option = createSprite(330,570,10,10);
   riddle5Option.addImage(riddle5Optimg);
   riddle5Option.scale = 0.7;
   }
   if (mousePressedOver(riddle5Answer)) {
    demRiddle.destroy();
    riddle5Answer.destroy();
    riddle5Option.destroy();


  }
}

function spawnRiver() {
   if(hp1.isTouching(river1)){
    hp1.velocityY = 0;
    river1.destroy();
   riverRiddle = createSprite(200,900,20,20);
   riverRiddle.addImage(riverRidimg);
   riverRiddle.scale= 0.9;
     
   riddle6Answer = createSprite();
   riddle6Answer.addImage(riddle6Ansimg);
   riddle6Answer.scale = 0.5;
     
  riddle6Option = createSprite();
  riddle6Option.addImage(riddle6Optimg);
  riddle6Option.scale = 0.5;     

  if (mousePressedOver(riddle6Answer)) {
    riverRiddle.destroy();
    riddle6Answer.destroy();
    riddle6Option.destroy();


  }
  }
}

function spawnCent() {
   if(hp1.isTouching(centaur5)){
    hp1.velocityY = 0;
    centaur5.destroy();
   centRiddle = createSprite(200,900,20,20);
   centRiddle.addImage(centRidimg);
   centRiddle.scale= 0.9;
     
   riddle7Answer = createSprite();
   riddle7Answer.addImage(riddle7Ansimg);
   riddle7Answer.scale = 0.5;
     
  riddle7Option = createSprite();
  riddle7Option.addImage(riddle7Optimg);
  riddle7Option.scale = 0.5;

  if (mousePressedOver(riddle7Answer)) {
    centRiddle.destroy();
    riddle7Answer.destroy();
    riddle7Option.destroy();


  }
  }
}

function spawnCav() {
  
  if(hp2.isTouching(cave2)){
    hp2.velocityY = 0;
    cave2.destroy();
   riddle1 = createSprite(600,1350,20,20);
   riddle1.addImage(riddle1img);
   riddle1.scale= 0.9;
    
   riddle8Answer = createSprite(450,1350,10,10);
   riddle8Answer.addImage(riddle1Ansimg);
   riddle8Answer.scale = 0.7;
    
  riddle8Option = createSprite(700, 1380, 10, 10);
  riddle8Option.addImage(riddle1Optimg);
  riddle8Option.scale = 0.7;

  if (mousePressedOver(riddle8Answer)) {
    riverRiddle.destroy();
    riddle8Answer.destroy();
    riddle8Option.destroy();


  }
  }
}


function spawnCen() {
  if(hp2.isTouching(centaur2)){
    hp2.velocityY = 0;
    centaur2.destroy();
   spell2 = createSprite(600,1170,20,20);
   spell2.addImage(riddle2img);
   spell2.scale= 0.9;
    
   riddle9Answer = createSprite(600,1210,10,10);
   riddle9Answer.addImage(riddle2Ansimg);
   riddle9Answer.scale = 0.7;
    
  riddle9Option = createSprite(700,1230,10,10);
  riddle9Option.addImage(riddle2Optimg);
  riddle9Option.scale = 0.7;
  }
}

function spawnFor() {
   if(hp2.isTouching(forest2)){
    hp2.velocityY = 0;
    forest2.destroy();
   forestRiddle = createSprite(600,900,20,20);
   forestRiddle.addImage(forestRidimg);
   forestRiddle.scale= 0.9;
     
   riddle10Answer = createSprite(700,920,10,10);
   riddle10Answer.addImage(riddle3Ansimg);
   riddle10Answer.scale = 0.7;
     
  riddle10Option = createSprite(600,920,10,10);
  riddle10Option.addImage(riddle3Optimg);
  riddle10Option.scale = 0.7;
  }
}

function spawnWiz() {
   if(hp2.isTouching(wizard2)){
    hp2.velocityY = 0;
    wizard2.destroy();
   wizardRiddle = createSprite(600,540,20,20);
   wizardRiddle.addImage(wizardRidimg);
   wizardRiddle.scale= 0.9;
     
   riddle11Answer = createSprite(590,560,10,10);
   riddle11Answer.addImage(riddle4Ansimg);
   riddle11Answer.scale = 0.7;
     
  riddle11Option = createSprite(720,565,10,10);
  riddle11Option.addImage(riddle4Optimg);
  riddle11Option.scale = 0.7;
  }
}

function spawnDementor() {
   if(hp2.isTouching(dem2)){
    hp2.velocityY = 0;
    dem2.destroy();
   demRiddle = createSprite(600,900,20,20);
   demRiddle.addImage(demRidimg);
   demRiddle.scale= 0.9;
     
   riddle12Answer = createSprite();
   riddle12Answer.addImage(riddle5Ansimg);
   riddle12Answer.scale = 0.7;
     
  riddle12Option = createSprite();
  riddle12Option.addImage(riddle5Optimg);
  riddle12Option.scale = 0.7;
  }
}

function spawnRiv() {
   if(hp2.isTouching(river2)){
    hp2.velocityY = 0;
    river2.destroy();
   riverRiddle = createSprite(600,900,20,20);
   riverRiddle.addImage(riverRidimg);
   riverRiddle.scale= 0.9;
     
  riddle13Answer = createSprite();
  riddle13Answer.addImage(riddle6Ansimg);
  riddle13Answer.scale = 0.5;
     
  riddle13Option = createSprite();
  riddle13Option.addImage(riddle6Optimg);
  riddle13Option.scale = 0.5;
  }
}

function spawnCenta() {
  if(hp2.isTouching(centaur6)){
    hp2.velocityY = 0;
    centaur2.destroy();
   spell2 = createSprite(600,900,20,20);
   spell2.addImage(spell2img);
   spell2.scale= 0.9;
    
   riddle14Answer = createSprite();
   riddle14Answer.addImage(riddle7Ansimg);
   riddle14Answer.scale = 0.7;
    
  riddle14Option = createSprite();
  riddle14Option.addImage(riddle7Optimg);
  riddle14Option.scale = 0.7;
  }
}
