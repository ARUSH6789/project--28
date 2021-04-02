
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var boy , boyImage;

function preload()
{
	
	boyImage = loadImage("boy.png");	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;


	boy = createSprite(200,550,10,10);
	boy.addImage("bro", boyImage);
	boy.scale = 0.125;

	tree = new Tree(770,370);
	
	ground = new Ground(500,700);
	mango1 = new Mango(800,200);
	mango2 = new Mango(570,280);
	mango3 = new Mango(700,300);
	mango4 = new Mango(660,100);
	mango5 = new Mango(900,280);
	mango6 = new Mango(900,190);
	mango7 = new Mango(800,100);
	
	stone = new Stone(150,480);
	attach = new Launcher(stone.body,{x:150,y:480});

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("silver");


	detectCollision(stone,mango1);
	detectCollision(stone,mango2);
	detectCollision(stone,mango3);
	detectCollision(stone,mango4);
	detectCollision(stone,mango5);
	detectCollision(stone,mango6);
	detectCollision(stone,mango7);

	stroke("purple");
	textFont("orange");
	textSize(20);
	fill("grey");

	text('Press Space to get a second chance to play',50,50);



	drawSprites();

	tree.display();
	ground.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	

	stone.display();
	attach.display();

	
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX , y:mouseY});
}

function mouseReleased(){
	attach.fly();
}

function detectCollision(Lstone,Lmango){
	mangoBodyPosition = Lmango.body.position
	stoneBodyPosition = Lstone.body.position

	var distance = dist(stoneBodyPosition.x , stoneBodyPosition.y, mangoBodyPosition.x , mangoBodyPosition.y )
		if(distance<=Lmango.radius.r+Lstone.radius.r){
			Matter.Body.setStatic(Lmango.body,false);
		}
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body , {x:150,y:480})
		attach.Launch(stone.body);
	}
}





