const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, enemy1,enemy2;
var backgroundImg,platform;
var player, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    enemy1 = new Enemy(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    enemy2 = new Enemy(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    player = new Player(100,100);

    
    slingShot = new Slingshot(player.body,{x:200,y:150});
}

function draw(){
    background(255);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    enemy1.display();
    log1.display();
    box3.display();
    box4.display();
    enemy2.display();
    log3.display();
    box5.display();
    log4.display();
    log5.display();
    player.display();
    platform.display();
    slingShot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(player.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingShot.fly()
}