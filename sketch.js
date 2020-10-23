
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var tree;
var boy,boyIMG;
function preload()
 {
// 	boyIMG=loadImage("sprites/boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     ground = new Ground(50,height,1600,50);
	
	//  boy = createSprite(200,500,40,20);
	//  boy.addImage(boyIMG);
	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  
  ground.display();
  drawSprites();
 
}



