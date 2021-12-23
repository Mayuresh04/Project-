
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var rod_img , bc_img , cannonball_img;
var road;
var score;

function preload(){
  road_img = loadImage("road.png");
  bc_img   = loadImage("b_car.png");
  cannonball_img = loadImage("cannonball.png");
}


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  road = createSprite(350,350,20,20);
  road.addImg(road_img);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  drawSprites();
}

