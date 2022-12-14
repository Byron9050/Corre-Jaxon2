var Barco
var Fondo
var barco2
var fondo2
function preload(){
Barco = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
Fondo = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);

  
  fondo2 = createSprite(200, 200)
  fondo2.addImage(Fondo);
  fondo2.scale = 0.5

  barco2 = createSprite(200, 200)
  barco2.addAnimation("Ship",Barco);
  barco2.scale = 0.3;

}

function draw() {
  background("blue");
 drawSprites();
}