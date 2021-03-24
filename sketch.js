var car,carImg;
var PLAY=1;
var END=0;
var START=3;
var gameState=PLAY;
var distance=0
var input,form,title,buttun,car1,car,rty,shield,slider,hypeDocument,nameName,over;
var score=0
var SELECTOR=2
var sheildTime=5
var coin=0
var GARAGE=4
var INS=5
var playerCount=0;
var pcount=0
var Lap=0
var scoreK=0
var playerRealcount=0
var CountDown=10
var CARSELECTOR=6
var carS1,carS2,carS3,carS4,playerCar1;
var FIRSTBG=9
var PLAYERCAR1=7
var BUGATTIGAME=8
var outHit=0
var shieldHit=0
var Gear;
var Nu="nuetral"
var g1=1
var g2=2
var g3=3
var g4=4
var g5=5
var g6=6
var background1
function preload(){
carImg=loadImage("Formula.png")
bg=loadImage("track.jpg")
carIm31=loadImage("car5.png")
carIm3=loadImage("car1.png")
song=loadSound("sonicastronomia.mp3")
spec=loadSound("spectre.mp3")
alo=loadSound("alone.mp3")
dar=loadSound("dark.mp3")
Over=loadImage("over.png")
overSnd=loadSound("over.wav")
sh=loadImage("shield11.png")
fad=loadSound("fade.mp3")
carS1image=loadImage("formula=carSelec.png")
carS2image=loadImage("carS2imag.png")
onmy=loadSound("onMyWay.mp3")
car1Player=loadImage("car1-player.png")
BugattSE=loadImage("bugattiSelect.png")
bugattImg=loadImage("bugatti.png")
first=loadImage("carBg.png")
bgmp=loadSound("mp3forBG.mp3")
lo=loadImage("loader.png")
}
function setup(){
  let di=displayDensity();
  pixelDensity(di)
  createCanvas(900, 500);
  database = firebase.database();
  gameState=FIRSTBG
  Gear=Nu

  
  background1 = createSprite(600,250,1000,1000);
  background1.addImage(bg);
  background1.scale = 1
  background1.velocityX+-5
  


 car= createSprite(100,150,20,20)
 car.addImage(carImg); 
 car.scale=0.6



 carS1=createSprite(350,200,50,50)
 carS1.addImage(carS1image);
 carS1.scale=0.6
 carS1.visible=false;
 carS2=createSprite(100,200,50,50)
 carS2.addImage(carS2image);
 carS2.scale=0.7
 carS2.visible=false;
 over=createSprite(200,200,50,50)
 over.addImage(Over);
 over.scale=0.9
 over.visible=false
 playerCar1= createSprite(100,150,20,20)
 playerCar1.addImage(car1Player)
 playerCar1.scale=0.7
 playerCar1.visible=false
  BugattiSele= createSprite(700,210,20,20)
  BugattiSele.addImage(BugattSE);
  BugattiSele.scale=0.7
  BugattiSele.visible=false;

  BugattiPla= createSprite(100,150,20,20)
  BugattiPla.addImage(bugattImg)
  BugattiPla.scale=0.7
  BugattiPla.visible=false;

 console.log(gameState)
 
  missileGr=new Group();
  invaderGr=new Group();
  invader1GR=new Group();
  shieldGR=new Group();
  

    input=createInput("Name","text")
    input.size(150,30)
    buttun=createButton("OK")
    buttun.size(50,30)
   input.position(330,160)
   buttun.position(450,200)
  
   buttun.mousePressed(()=>{
       
      
      
       
       pcount+=1
    if(input.value()==="Name"){
      gameState=START

    }
   
       
      playerCount+=1
       player.updateCount();
       player.getName();
       player.updateName();
       gameState=INS
   })



  
}
function draw(){
  if(frameCount-1===0){
    bgmp.play()
    }
  player=new Player()
  form=new Form()
  



  if(gameState===FIRSTBG){
    background(first);
 
    car.visible=false;
    background1.visible=false;

    
    textSize(40)
    fill("white")
    text('Welcome To Street Racer Game',120,50)
    textSize(30)
    text('Loading.........Please Wait',150,400)

  
  
  }
  else{
    background(bg)
  }
  if(gameState!==START){
    input.position(+1500,+1500);
    buttun.position(+1500,+1500);
  }else{
  

    
  }


 

 


if(frameCount-300===0){
  gameState=START;
}



 
  if(gameState===END){

    
    over.visible=true
    background1.velocityX=0;
    dar.stop();
    song.stop();
    alo.stop();
    spec.stop()
 
    fad.stop();
    onmy.stop();
    reset();
    car.setCollider("rectangle",0,1000,-5,-5);

    car.visible=false
    BugattiPla.visible=false;
    clear();
    playerCar1.visible=false;

    textSize(30)
    fill("white")
    
    spec.stop();
    alo.stop();
    
  

    
  }
  else{
    over.visible=false
  }

  if(car.isTouching(shieldGR)){
    shield.x=car.x
    shield.y=car.y
    shield.scale=0.2
    sprite=createSprite(80,50,100,30)
    sprite.visible=false;
  
    text("You are with shield. shield CountDown:"+sheildTime,sprite.x+100,sprite.y);

    if(car.isTouching(invaderGr)){
      invaderGr.destroyEach();
    }
  }

  if(playerCar1.isTouching(shieldGR)){
    shield.x=playerCar1.x
    shield.y=playerCar1.y
    shield.scale=0.2
    var sprite=createSprite(80,50,100,30)
    sprite.visible=false;
  
    text("You are with shield. shield CountDown:"+sheildTime,sprite.x+100,sprite.y);

    if(playerCar1.isTouching(invaderGr)){
      invaderGr.destroyEach();
    }
  }
  
  



  if(keyDown("up")){
    car.velocityY=-6
  
  }
  if (keyWentUp("up")) {
    car.velocityY=0
  }
  if(keyDown("down")){
    car.velocityY=6
  
  }
  if (keyWentUp("down")) {
    car.velocityY=0
  }
  
  if (background1.x <-2000){
    background1.x=background1.width/2
    Lap+=1
  }
  

  if(gameState===3){
 
    car.visible=false
    playerCar1.visible=false;
    background1.visible=false
}


//player.getName();






 

  
  



  drawSprites();
  fill("white")
textSize(20)

if(gameState!==START&&gameState!==SELECTOR&&gameState!==END&&gameState!==GARAGE&&gameState!==INS&&gameState!==FIRSTBG){
  gara=createSprite(850,100,100,50);
  gara.visible=false;
  noStroke();
  text("(Shop)",gara.x-20,gara.y)
  if(mousePressedOver(gara)){
    gameState=GARAGE
  }
}
scoreS=createSprite(50,50,50,50)
scoreS.visible=false;
if(gameState!==START&&gameState!==INS&&gameState!==SELECTOR){
  

}
if(gameState!==START&&gameState!==INS&&gameState!==FIRSTBG){
fill("white")
stroke("blue")
strokeWeight(4)


text("Coin :"+coin,700,50);
text("Lap: "+Lap,800,50)

  
  text("Score:"+score+"m",scoreS.x,50);
  text(background1.velocityX+"kmh",1,100)


}
else{
  if(gameState!==FIRSTBG){
  fill("black")
stroke("black")
strokeWeight(2)

text("Score:"+score+"m",scoreS.x,50);
text("Coin :"+coin,700,50);
text("Lap: "+Lap,800,50)
text(background1.velocityX+"kmh",1,100)
  }
}
if(gameState===PLAY){
  bgmp.stop();
  if(keyDown("right")){
    if(frameCount%10===0){
      background1.velocityX+=-2
    }
  }else{
    if(frameCount%15===0){
    background1.velocityX+=2
    }
    if(background1.velocityX>1||background1.velocityX===0){
      background1.velocityX=0;
    }}
  invaderGr.collide(invaderGr);
  invaderGr.collide(invaderGr);
  car.y=World.mouseY
  updateDistance();
  if(keyWentDown("g")){
    gameState=GARAGE
  }
  if(background1.velocityX<-5||background1.velocityX>10){
    if(frameCount%25===0){
    score+=100
    }
  }
  if(background1.velocityX<-10||background1.velocityX>15){
    if(frameCount%25===0){
    score+=150
    }
  }
  if(background1.velocityX<-15||background1.velocityX>20){
    if(frameCount%25===0){
    score+=200
    }
  }
  if(background1.velocityX<-20||background1.velocityX>25){
    if(frameCount%25===0){
    score+=250
    }
  }

  if(background1.velocityX<-25||background1.velocityX>30){
    if(frameCount%25===0){
    score+=300
    }
  }
  if(background1.velocityX<-30||background1.velocityX>35){
    if(frameCount%25===0){
    score+=350
    }
  }
  if(background1.velocityX<-35||background1.velocityX>40){
    if(frameCount%25===0){
    score+=400
    }
  }
  if(background1.velocityX<-40||background1.velocityX>45){
    if(frameCount%25===0){
    score+=450
    }
  }

  if(background1.velocityX<-45||background1.velocityX>50){
    if(frameCount%25===0){
    score+=500
    }
  }
  if(background1.velocityX<-50||background1.velocityX>55){
    if(frameCount%25===0){
    score+=550
    }
  }
  if(background1.velocityX<-55||background1.velocityX>60){
    if(frameCount%25===0){
    score+=600
    }
  }
  if(background1.velocityX<-60||background1.velocityX>65){
    if(frameCount%25===0){
    score+=650
    }
  }

  if(background1.velocityX<-65||background1.velocityX>70){
    if(frameCount%25===0){
    score+=700
    }
  }
  if(background1.velocityX<-70||background1.velocityX>75){
    if(frameCount%25===0){
    score+=750
    }
  }
  if(background1.velocityX<-75||background1.velocityX>80){
    if(frameCount%25===0){
    score+=800
    }
  }
  if(background1.velocityX<-80||background1.velocityX>85){
    if(frameCount%25===0){
    score+=850
    }
  }

  if(background1.velocityX>1||background1.velocityX===0){
    background1.velocityX=0;
  }
  if(car.isTouching(shieldGR)){
    shield.y=car.y
    shield.collide(car)
    text("Shield Cooldown:"+sheildTime,scoreS.x+350,50);
    if(frameCount%50===0){
    sheildTime-=1
    }
    if(sheildTime===0){
      shield.x=-2000
      sheildTime=5
    }
    if(car.isTouching(invaderGr)){
    
      

     shieldHit+=1


      invaderGr.destroyEach();
      
    }
  
   

  }
  else{
    shieldGR.scale=0.1;
    shieldGR.setVelocityXEach=-15;
    if(car.isTouching(invaderGr)){
    gameState=END
    outHit+=1
    overSnd.play();
    }
  }
  
  
  if(frameCount%150===0){
    spawnObstacles();
    spawnObstacles1();
  }
  if(frameCount%200===0){
    spawnShield();
    
  }

if(background1.velocityX===-1||background1.velocityX<-1){
  Gear=1
}
if(background1.velocityX===-100||background1.velocityX<-100){
  Gear=2
}
if(background1.velocityX===-200||background1.velocityX<-140){
  Gear=3
}
if(background1.velocityX===-280||background1.velocityX<-160){
  Gear=4
}
if(background1.velocityX===-340||background1.velocityX<-340){
  Gear=5
}
if(background1.velocityX===-400||background1.velocityX<-400){
  Gear=6
}

text("Gear:"+Gear,770,150);
  car.setCollider("rectangle",0,0,250,90);
  car.visible=true
  background1.visible=true
  if(sheildTime===0){
    shield.x=-2000
    sheildTime=5
  
  }
  

  if(background1.velocityX===-400||background1.velocityX<-400){
    if(frameCount%3===0){
      
      textSize(100)
      fill("red")
      text("Over Speed",350,220)

    }
    textSize(40)
    if(frameCount%25===0){
      CountDown-=1
    }
    if(frameCount%1===0){
      fill("red")
    }
    else{
      fill("white")
    }
    text("Car Over Heat Blasting in:"+CountDown,100,400)

    if(CountDown===0){
      gameState=END
    }
  }
  if(background1.velocityX===-398||background1.velocityX>-400){
    CountDown=10

  }

  
  
  updateDistance();
  if(frameCount%150===0){
  coin+=20
  
  
  
  }

  invaderGr.setVelocityXEach(+-5);
  }
 
  if(keyDown("left")){
    if(frameCount%5===0){
      background1.velocityX=background1.velocityX+5;
      }
      if(background1.velocityX===0||background1.velocityX>0){
        background1.velocityX=0
      }
    
  }

  if(frameCount%150===0){
   
  }


  
 
  
 
 
  
if(gameState===GARAGE){
  car.visible=false;
  invaderGr.setVelocityXEach(0)
  background1.velocityX=0
  sheildValueIncreaser=createSprite(100,450,300,100);
  sheildValueIncreaser.visible=false
  noStroke();
  fill("white")
  text("shield Cooldown +5",sheildValueIncreaser.x-50,sheildValueIncreaser.y);
  
  if(frameCount%5===0){
  if(mousePressedOver(sheildValueIncreaser)){
    
     if(coin===100||coin>100){
       sheildTime+=5;
       coin=coin-100
       fill("white")
       
     }
      else{
       if(frameCount%1===0){
        textSize(30)
        fill("red")
        text("You need 100 Coins",250,450)
        text("Not enough money",250,400)
        
       
       }
     
     
    }
  }


}

if(coin===100||coin>100){
  fill("white")
  noStroke();
  text("costs 100 coins",70,470)
}else{
    fill("red")
    noStroke();
    text("costs 100 coins",70,470)
  
}
  
  continues=createSprite(850,400,300,100)
 continues.visible=false;
 fill("white")
 stroke( "blue")
 strokeWeight(4)
 textSize(30)
  text("Continue>>",continues.x-130,continues.y);
  if(mousePressedOver(continues)){
    car.visible=true;
    invaderGr.setVelocityXEach(-6)
    background1.velocityX=-10;
    sheildValueIncreaser.y=1500
    continues.y=1500
    gameState=PLAY
  }
  if(car.isTouching(shieldGR)){
    sheildTime=sheildTime;
  }
}


if(gameState===START){
  background(bg)
  how = createSprite(350,350,200,50);
  how.visible=false;
  input.position(330,160)
  buttun.position(450,200)
  
  if(mousePressedOver(how)){
    gameState=INS;

  }


}

if(gameState===INS){
  fill("white")
  stroke("blue")
  strokeWeight(4)
  input.hide();
  buttun.hide();
  input.hide();
  buttun.hide();
  input.hide();
  buttun.hide();
  fill("red");
  noStroke();
  textSize(30)
  text("Press right arrow to accelerate car.Control The car using Mouse. Dont Touch Other Cars.",50,150)
  text("Dont Touch Other Cars.",50,200)
  text("Press 'G' to buy extra shield time.",50,250);
  text("Be careful when you are with shield.",50,300);
  text("Don't move the car up and down too fast.",50,350)
  next=createSprite(400,450,250,100);
  next.visible=false
  fill("black")
  stroke("black")
  strokeWeight(2)

  text("CONTINUE>>",next.x-100,next.y)  
  input.hide();
  buttun.hide();
  input.hide();
  buttun.hide();
  var name12=input.value();
  if(mousePressedOver(next)){
    gameState=SELECTOR;
  }
  input.hide();
  buttun.hide();
}
if(gameState===CARSELECTOR){
  carS2.visible=true;
  carS1.visible=true;
  BugattiSele.visible=true;
  fill("blue")
  stroke("white")
  strokeWeight(4)
  textSize(30)
  text("Select The Car You Need",150,100)
  textSize(25)
  text("Formula",carS1.x-50,carS1.y+130)
  text("Chevelet",carS2.x-50,carS2.y+110);
  text("Bugatti Veyron",BugattiSele.x-70,BugattiSele.y+130);
  textSize(20)
  text("Speed:400",carS1.x-50,carS1.y+160)
  text("Speed:600",BugattiSele.x-50,BugattiSele.y+170)
  input.hide();
buttun.hide();

  text("Speed:200",carS2.x-50,carS2.y+140)
  text("costs:Free",carS2.x-50,carS2.y+180)
  carS1.visible=true;
  carS2.visible=true;
  if(mousePressedOver(carS2)){
    car.addImage(car1Player);



    gameState=PLAY
  }
  if(mousePressedOver(carS1)){
    if(coin===1000||coin>1000){
   
    gameState=PLAY
    }else{
      textSize(30)
      fill("red")
      text("Not Enough Money",400,250)
    }


  }

  if(coin===2000||coin>2000){
   fill("blue")
   stroke("white")
   text("costs:1000",carS1.x-50,carS1.y+210)
 
  }else{
    textSize(30)
    fill("red")
    text("costs:1000",carS1.x-50,carS1.y+210)
  }

  if(mousePressedOver(BugattiSele)){
    if(coin===2000||coin>2000){
   
    gameState=BUGATTIGAME
    }else{
      textSize(30)
      fill("red")
      text("Not Enough Money",400,250)
    }


  }

  if(coin===2000||coin<2000){
    textSize(30)
    fill("red")
   text("costs:2000",BugattiSele.x-50,BugattiSele.y+210)
 
  }else{
   
    
    fill("blue")
    stroke("white")
    text("costs:2000",BugattiSele.x-50,BugattiSele+210)
  }

  input.hide();
  buttun.hide();



}else{
   carS1.visible=false;
   carS2.visible=false;
  BugattiSele.visible=false;
  
    
  

}

if(gameState===SELECTOR){
  
bgmp.stop();
  music1=createSprite(150,300,230,40);
  music1.shapeColor="white";
  music2=createSprite(350,300,200,40);
  music2.shapeColor="white";
  music3=createSprite(150,350,200,40);
  darks=createSprite(200,400,200,40);
  fa=createSprite(600,300,200,50);

  on=createSprite(800,400,200,50);
  nomusic=createSprite(325,355,200,40)
  music3.shapeColor="white";
  darks.shapeColor="white";
  car.visible=false;
  music1.visible=false;
  music2.visible=false;
  music3.visible=false;
  nomusic.visible=false;
  darks.visible=false;
  fa.visible=false;

  on.visible=false;
  textSize(40)
  input.hide();
buttun.hide();



 


  textSize(30)
  fill("white")
  noStroke();
  text("(ASTRONOMIA)",music1.x-110,music1.y+10);
  text("(FADED)",fa.x-40,fa.y);
 
  text("(SPECTRE)",music2.x-60,music2.y+10);
  text("(ALONE)",music3.x-50,music3.y+10);
  text("(NONE)",nomusic.x-10,nomusic.y+5)
  text("(DARKSIDE)",darks.x-75,darks.y+5)
  text("(ON MY WAY)",on.x-100,on.y)
  stroke("white");
  textSize(30)
  stroke("white")
  strokeWeight(2)
  text("Press which music you need",100,100);

  if(frameCount%1===0){
  if(mousePressedOver(music1)){
    
    song.play();
    
    gameState=CARSELECTOR;
    
  }
}

if(frameCount%1===0){
  if(mousePressedOver(on)){
    
    onmy.play();
    
    gameState=CARSELECTOR;
    
  }
}

if(frameCount%1===0){
  if(mousePressedOver(fa)){
    
    fad.play();
   
    gameState=CARSELECTOR;
    
  }
}


if(frameCount%1===0){
  if(mousePressedOver(music2)){
    
    spec.play();
    
    gameState=CARSELECTOR;
  
  }
}


if(frameCount%1===0){
  if(mousePressedOver(music3)){
    
    alo.play();
   
    gameState=CARSELECTOR;
  
  }
}
if(frameCount%1===0){
  if(mousePressedOver(darks)){
    
    dar.play();
   
    gameState=CARSELECTOR;
  
  }
}

if(frameCount%1===0){
  if(mousePressedOver(nomusic)){
    gameState=CARSELECTOR;
  
  }
}
 


}

if(gameState===INS){
  fill("white")
  stroke("blue")
  strokeWeight(4)
  input.hide();
  buttun.hide();
  fill("red");
  noStroke();
  textSize(30)
  text("Press right arrow to accelerate car.Control The car using Mouse. Dont Touch Other Cars.",50,150)
  text("Dont Touch Other Cars.",50,200)
  text("Press 'G' to buy extra shield time.",50,250);
  text("Be careful when you are with shield.",50,300);
  text("Don't move the car up and down too fast.",50,350)
  next=createSprite(400,450,250,100);
  next.visible=false
  fill("black")
  stroke("black")
  strokeWeight(2)

  text("CONTINUE>>",next.x-100,next.y)  
  input.hide();
  buttun.hide();
  var name12=input.value();
  if(mousePressedOver(next)){
    gameState=SELECTOR;
  }
}

if(gameState===PLAYERCAR1){
  bgmp.stop();

  if(keyDown("right")){
    if(frameCount%10===0){
      background1.velocityX+=-2
    }
  }else{
    if(frameCount%15===0){
    background1.velocityX+=2
    }
    if(background1.velocityX>1||background1.velocityX===0){
      background1.velocityX=0;
    }

  }
  invaderGr.collide(invaderGr);
  invaderGr.collide(invaderGr);
  playerCar1.y=World.mouseY
  updateDistance();
  if(keyWentDown("g")){
    gameState=GARAGE
  }
  if(background1.velocityX<-5||background1.velocityX>10){
    if(frameCount%25===0){
    score+=100
    }
  }
  if(background1.velocityX<-10||background1.velocityX>15){
    if(frameCount%25===0){
    score+=150
    }
  }
  if(background1.velocityX<-15||background1.velocityX>20){
    if(frameCount%25===0){
    score+=200
    }
  }
  if(background1.velocityX<-20||background1.velocityX>25){
    if(frameCount%25===0){
    score+=250
    }
  }

  if(background1.velocityX<-25||background1.velocityX>30){
    if(frameCount%25===0){
    score+=300
    }
  }
  if(background1.velocityX<-30||background1.velocityX>35){
    if(frameCount%25===0){
    score+=350
    }
  }
  if(background1.velocityX<-35||background1.velocityX>40){
    if(frameCount%25===0){
    score+=400
    }
  }
  if(background1.velocityX<-40||background1.velocityX>45){
    if(frameCount%25===0){
    score+=450
    }
  }

  if(background1.velocityX<-45||background1.velocityX>50){
    if(frameCount%25===0){
    score+=500
    }
  }
  if(background1.velocityX<-50||background1.velocityX>55){
    if(frameCount%25===0){
    score+=550
    }
  }
  if(background1.velocityX<-55||background1.velocityX>60){
    if(frameCount%25===0){
    score+=600
    }
  }
  if(background1.velocityX<-60||background1.velocityX>65){
    if(frameCount%25===0){
    score+=650
    }
  }

  if(background1.velocityX<-65||background1.velocityX>70){
    if(frameCount%25===0){
    score+=700
    }
  }
  if(background1.velocityX<-70||background1.velocityX>75){
    if(frameCount%25===0){
    score+=750
    }
  }
  if(background1.velocityX<-75||background1.velocityX>80){
    if(frameCount%25===0){
    score+=800
    }
  }
  if(background1.velocityX<-80||background1.velocityX>85){
    if(frameCount%25===0){
    score+=850
    }
  }


  if(playerCar1.isTouching(shieldGR)){
    shield.y=playerCar1.y
    shield.collide(playerCar1)
    text("Shield Cooldown:"+sheildTime,scoreS.x+350,50);
    if(frameCount%50===0){
    sheildTime-=1
    }
    if(sheildTime===0){
      shield.x=-2000
      debugger
      sheildTime=5
    }
    if(playerCar1.isTouching(invaderGr)){
    
      
  shieldHit+=1



      invaderGr.destroyEach();
      
    }
  
   

  }
  else{
    shieldGR.scale=0.1;
    shieldGR.setVelocityXEach=-15;
    if(playerCar1.isTouching(invaderGr)){
    gameState=END
    outHit+=1
    overSnd.play();
    }
  }
  
  
  if(frameCount%150===0){
    spawnObstacles();
    spawnObstacles1();
  }
  if(frameCount%200===0){
    spawnShield();
    
  }
  if(background1.velocityX===-0){
    Gear=Nu
  }

  if(background1.velocityX===-1||background1.velocityX<-1){
    Gear=1
  }
  if(background1.velocityX===-30||background1.velocityX<-60){
    Gear=2
  }
  if(background1.velocityX===-70||background1.velocityX<-80){
    Gear=3
  }
  if(background1.velocityX===-140||background1.velocityX<-140){
    Gear=4
  }
  if(background1.velocityX===-200||background1.velocityX<-200){
    Gear=5
  }

  text("Gear:"+Gear,770,150);
  playerCar1.setCollider("rectangle",0,0,250,90);
  playerCar1.visible=true
  background1.visible=true
  if(sheildTime===0){
    shield.x=playerCar1.x-2000
    sheildTime=5
  
  }
  

  if(background1.velocityX===-200||background1.velocityX>-200){
    background1.velocityX=-199
    if(frameCount%3===0){
      
      textSize(100)
      fill("red")
      text("Over Speed",350,220)

    }
    textSize(40)
    if(frameCount%25===0){
      CountDown-=1
    }
    if(frameCount%1===0){
      fill("red")
    }
    else{
      fill("white")
    }
    text("Car Over Heat Blasting in:"+CountDown,100,400)

    if(CountDown===0){
      gameState=END
    }
  }
  if(background1.velocityX===-198||background1.velocityX<-200){
    CountDown=10

  }
  
  


  
  
  updateDistance();
  if(frameCount%150===0){
  coin+=20
  
  
  
  }

  invaderGr.setVelocityXEach(+-5);
  }
 
  if(keyDown("left")){
    if(frameCount%5===0){
      background1.velocityX=background1.velocityX+6;
      }
      if(background1.velocityX===0||background1.velocityX>0){
        background1.velocityX=0
      }
    
  }
  if(keyWentUp("right")){
    
    
  }
  
  if(frameCount%150===0){
   
  }
  if(gameState===BUGATTIGAME){
    bgmp.stop();

    if(keyDown("right")){
      if(frameCount%10===0){
        background1.velocityX+=-2
      }
    }else{
      if(frameCount%15===0){
      background1.velocityX+=2
      }
      if(background1.velocityX>1||background1.velocityX===0){
        background1.velocityX=0;
      }
  
    }
    invaderGr.collide(invaderGr);
    invaderGr.collide(invaderGr);
    BugattiPla.y=World.mouseY
    updateDistance();
    if(keyWentDown("g")){
      gameState=GARAGE
    }
    if(background1.velocityX<-5||background1.velocityX>10){
      if(frameCount%25===0){
      score+=100
      }
    }
    if(background1.velocityX<-10||background1.velocityX>15){
      if(frameCount%25===0){
      score+=150
      }
    }
    if(background1.velocityX<-15||background1.velocityX>20){
      if(frameCount%25===0){
      score+=200
      }
    }
    if(background1.velocityX<-20||background1.velocityX>25){
      if(frameCount%25===0){
      score+=250
      }
    }
  
    if(background1.velocityX<-25||background1.velocityX>30){
      if(frameCount%25===0){
      score+=300
      }
    }
    if(background1.velocityX<-30||background1.velocityX>35){
      if(frameCount%25===0){
      score+=350
      }
    }
    if(background1.velocityX<-35||background1.velocityX>40){
      if(frameCount%25===0){
      score+=400
      }
    }
    if(background1.velocityX<-40||background1.velocityX>45){
      if(frameCount%25===0){
      score+=450
      }
    }
  
    if(background1.velocityX<-45||background1.velocityX>50){
      if(frameCount%25===0){
      score+=500
      }
    }
    if(background1.velocityX<-50||background1.velocityX>55){
      if(frameCount%25===0){
      score+=550
      }
    }
    if(background1.velocityX<-55||background1.velocityX>60){
      if(frameCount%25===0){
      score+=600
      }
    }
    if(background1.velocityX<-60||background1.velocityX>65){
      if(frameCount%25===0){
      score+=650
      }
    }
  
    if(background1.velocityX<-65||background1.velocityX>70){
      if(frameCount%25===0){
      score+=700
      }
    }
    if(background1.velocityX<-70||background1.velocityX>75){
      if(frameCount%25===0){
      score+=750
      }
    }
    if(background1.velocityX<-75||background1.velocityX>80){
      if(frameCount%25===0){
      score+=800
      }
    }
    if(background1.velocityX<-80||background1.velocityX>85){
      if(frameCount%25===0){
      score+=850
      }
    }
  
  
    if(BugattiPla.isTouching(shieldGR)){
      shield.y=BugattiPla.y
      
      text("Shield Cooldown:"+sheildTime,scoreS.x+350,50);
      if(frameCount%50===0){
      sheildTime-=1
      }
      if(sheildTime===0){
        shield.x=-2000
        debugger
        sheildTime=5
      }
      if(BugattiPla.isTouching(invaderGr)){
      
        
  
  
  
        shieldHit+=1
        invaderGr.destroyEach();
        
      }
    
     
  
    }
    else{
      shieldGR.scale=0.1;
      shieldGR.setVelocityXEach=-15;
      if(BugattiPla.isTouching(invaderGr)){
      gameState=END
      outHit+=1
      overSnd.play();
      }
    }
    
    
    if(frameCount%150===0){
      spawnObstacles();
      spawnObstacles1();
    }
    if(frameCount%200===0){
      spawnShield();
      
    }
  
    if(background1.velocityX===-1||background1.velocityX<-1){
      Gear=1
    }
    if(background1.velocityX===-60||background1.velocityX<-60){
      Gear=2
    }
    if(background1.velocityX===-80||background1.velocityX<-80){
      Gear=3
    }
    if(background1.velocityX===-140||background1.velocityX<-140){
      Gear=4
    }
    if(background1.velocityX===-200||background1.velocityX<-200){
      Gear=5
    }
    if(background1.velocityX===-250||background1.velocityX<-250){
      Gear=6
    }
    if(background1.velocityX===-300||background1.velocityX<-300){
      Gear=7
    }
    if(background1.velocityX===-400||background1.velocityX<-400){
      Gear=8
    }
  
    text("Gear:"+Gear,770,150);
    BugattiPla.setCollider("rectangle",0,0,250,90);
    BugattiPla.visible=true
    background1.visible=true
    if(sheildTime===0){
      shield.x=playerCar1.x-2000
      sheildTime=5
    
    }
    
  
    if(background1.velocityX===-600||background1.velocityX<-600){
      if(frameCount%3===0){
        
        textSize(100)
        fill("red")
        text("Over Speed",350,220)
  
      }
      textSize(40)
      if(frameCount%25===0){
        CountDown-=1
      }
      if(frameCount%1===0){
        fill("red")
      }
      else{
        fill("white")
      }
      text("Car Over Heat Blasting in:"+CountDown,100,400)
  
      if(CountDown===0){
        gameState=END
      }
    }
    if(background1.velocityX===600||background1.velocityX>-600){
      CountDown=10
  
    }
    
    
  
  
    
    
    updateDistance();
    if(frameCount%150===0){
    coin+=20
    
    
    
    }
  
    invaderGr.setVelocityXEach(+-5);

  }
  else{

    BugattiPla.visible=false;
  }


  
 
  
  

  
}  
function spawnObstacles(){
  
    car1 = createSprite(700,Math.round(random(50,450)));
    car1.velocityX = -6
    car1.scale=0.5
    
    car1.addImage(carIm3)
    invaderGr.add(car1)   
    car1.setCollider("rectangle",0,0,car1.width+100,car1.height-8);
    if(frameCount%25===0){
      car1.velocityX+=-3
    }

      
   
    
    
  }
  function spawnObstacles1(){
  
    car2 = createSprite(700,Math.round(random(50,450)));
    car2.velocityX = -6
    car2.scale=0.5
    
    car2.setCollider("rectangle",0,0,car2.width+200,car2.height+35);
    car2.addImage(carIm31)
    invaderGr.add(car2)
    car2.collide(invaderGr);
    if(frameCount%2===0){
      car2.velocityX+=-10
    }


      
   
    
    
  }
  function spawnShield(){
  
    shield=createSprite(+2500,Math.round(random(50,450)));
    shield.velocityX = -10
    shield.scale=0.1
    shield.addImage(sh)
    shieldGR.add(shield)
    invaderGr.collide(invaderGr);



      
   
    
    
  }
 function text(){
   text("NEXT>>",200,100)

  }
  function reset(){
    if(keyDown("space")||keyDown("r")){
      gameState=SELECTOR
      score=000
      car.scale=0.6
      sheildTime=5

    }
  }
  function updateCoin(){
    var contestantIndex = "player"+pcount;
   
    
    database.ref(contestantIndex).set({
      
     
      
      
    });1
}
function updateDistance(){
  var contestantIndex = "player"+" "+input.value();
  let name=coin;
  database.ref(contestantIndex).set({
    Coin:name,
    distance:score,
    Lap:Lap,
    HittedVehiclesWithSheild:shieldHit,
    HittedVehiclesAndOut:outHit
    
    
  });
  
}

