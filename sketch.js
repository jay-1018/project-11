path=ceateSprite(200,200);
path.addImage(pathImg);
path.velocityY=4;
path.scale=1.2;
function preload(){
  //pre-load images
}

function setup(){
  createCanvas(400,400);
  //create sprites here
}

function draw() {
  background(0);

  if(Path.y > 400){
    Path.y = height/2;
  }
}
