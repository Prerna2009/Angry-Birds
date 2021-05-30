
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var pig1, pig2
var log1, log2, log3, log4
var engine, world;
var ground;
var box1,box2,box3,box4, box5;
var bird
function setup() {
  createCanvas(1200,400);
 // createSprite(400, 200, 50, 50);

  engine = Engine.create();
    world = engine.world;

    

ground = new Ground(600,380,1200,20)
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70)
    pig1 = new Pig(810,350)
    log1 = new Log(810,260,300,PI/2)
    
    box3 = new Box(700,230,70,70);
    box4 = new Box(920,230,70,70);
    pig2 = new Pig(810,230);
    log2 = new Log(810,200,300,PI/2)
    box5 = new Box(810,180,70,70);
    log3 = new Log(780,140,120,PI/4)
    log4 = new Log(840,140,120,-PI/4)
    bird = new Bird(100,50)
}

function draw() {
  background(0);  
  Engine.update(engine);
 
ground.display();
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 pig2. display();
 log2.display();
 pig1.display();
 log1.display();
 log3.display();
 log4.display();
 box5.display();
 bird.display();
  drawSprites();
}