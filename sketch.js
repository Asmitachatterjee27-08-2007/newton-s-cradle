
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobObject1= new Bob(250,400);
	bobObject2= new Bob(300,400);
	bobObject3=new Bob(350,400);
	bobObject4 = new Bob(400,400);
	bobObject5= new Bob(450,400);

	roof1 = new Roof(400,200,500,30);

	rope1 = new Rope(bobObject1.body,roof1.body,-200,0);
	rope2 = new Rope(bobObject2.body,roof1.body,-200,0);
	rope3 = new Rope(bobObject3.body,roof1.body,-200,0);
	rope4 = new Rope(bobObject4.body,roof1.body,-200,0);
	rope5 = new Rope(bobObject5.body,roof1.body,-200,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof1.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-12,y:12});
	}
}

