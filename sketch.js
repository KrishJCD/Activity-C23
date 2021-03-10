const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var eng,wor;
var ball1,ground;

function setup() {
  //Creating and Relating Engine with World.
  createCanvas(800,400);
  eng=Engine.create();
  wor=eng.world;
  ball1=new Ball(20,20,10,10);

  ground=new Ground(400,500,520,20);


}

function draw() {
  background(0);  
  Engine.update(eng);
  ground.displayGround();
  ball1.display();
  drawSprites();
}