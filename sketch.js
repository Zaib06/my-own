var pc , fish1 , fish2 , fish3 , fish4;
var beachy;
var fishGroup;



function setup() {
  createCanvas(displayWidth,displayHeight);
  //creating pc sprites
  pc = createSprite(displayWidth/2,displayHeight/2,50,50);
  
  beachy = loadImage("sea background.png");
  fish1 = loadImage("1.png");
  fish1 = loadImage("2.png");
  fish1 = loadImage("3.png");
  fish1 = loadImage("4.png");

}

function draw() {  
  background(beachy);

  pc.y=mouseY;
  pc.x=mouseX;

  spwanFish();
  drawSprites();
  fishGroup = new Group();
}

function spwanFish(){
  if(frameCount % 30 === 0) {
   fish = createSprite(200,50,10,40);
    fish.velocityX=2

    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: fish.addImage(fish1);
              break;
      case 2: fish.addImage(fish2);
              break;
      case 3: fish.addImage(fish3);
              break;
      case 4: fish.addImage(fish4);
              break;
      
      default: break;
    }
    
  
    fishGroup.add(fish);
   fish.scale = 0.5;
   
}



