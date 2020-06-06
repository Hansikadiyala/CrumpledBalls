var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paperObject;
var bin1;
var bin2;
var bin3;

function preload(){

	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);
	paperObject = new Paper(200,200,50);

	bin1 = new Dustbin(600,450,160,20);
	bin2 = new Dustbin(670,405,20,110);
	bin3 = new Dustbin(520,405,20,110);

	ground = new Ground(width/2,475,800,30);

}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
paperObject.display();
bin1.display();
bin2.display();
bin3.display();
ground.display();

drawSprites();
 
}

function keyPressed(){

if(keyCode===UP_ARROW){

Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})

}


}
































