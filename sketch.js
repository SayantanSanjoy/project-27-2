
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

	//Create the Bodies Here.
    log=new Bar(250,150,50,40);
	log1=new Bar(300,150,50,40);
	log2=new Bar(350,150,50,40);
	log3=new Bar(400,150,50,40);
	log4=new Bar(450,150,50,40);
    ball1=new Bob(250,450,50)
	ball2=new Bob(300,450,50)
	ball3=new Bob(350,450,50)
	ball4=new Bob(400,450,50)
	ball5=new Bob(450,450,50)

    chain1=new String(log.body,ball1.body)
	chain2=new String(log1.body,ball2.body)
	chain3=new String(log2.body,ball3.body)
	chain4=new String(log3.body,ball4.body)
	chain5=new String(log4.body,ball5.body)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  drawSprites();
  
  log.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  log1.display();
  log2.display();
  log3.display();
  log4.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

}



