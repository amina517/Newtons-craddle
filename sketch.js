
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roofObject;
var bobObject1, bob2, bob3, bob4, bob5;
var rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400, 100, 600, 80);
	rope1 = new Sling(bobObject1.body, roof.Body, -bobDiameter*2, 0 )

	bobObject1 = new Bobby(180, 500, 100, 50);
	bob2 = new Bobby(290, 500, 100, 50);
	bob3 = new Bobby(400, 500, 100, 50);
	bob4 = new Bobby(510, 500, 100, 50);
	bob5 = new Bobby(620, 500, 100, 50);
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("LightSlateGrey");
  
  drawSprites();
  roof.display();
  rope1.display();
  bobObject1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
}



