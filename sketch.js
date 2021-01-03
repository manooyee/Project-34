const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
    createCanvas(1000, 700);
    
    engine = Engine.create();
    world = engine.world;

    bobObject1 = new Pendulum(279,500,40);
	bobObject2 = new Pendulum(359,500,40);
	bobObject3 = new Pendulum(439,500,40);
	bobObject4 = new Pendulum(519,500,40);
    bobObject5 = new Pendulum(599,500,40);
    
    sling1 = new Sling(bobObject1.body,{x:279, y:100});
	sling2 = new Sling(bobObject2.body,{x:359, y:100});
	sling3 = new Sling(bobObject3.body,{x:439, y:100});
	sling4 = new Sling(bobObject4.body,{x:519, y:100});
    sling5 = new Sling(bobObject5.body,{x:599, y:100});
    
    Engine.run(engine);
  
}


function draw() {
    rectMode(CENTER);
    background("pink");
    
    bobObject1.display();
    bobObject2.display();
    bobObject3.display();
    bobObject4.display();
    bobObject5.display();
  
  
    sling1.display();
    sling2.display();
    sling3.display();
    sling4.display();
    sling5.display();
  
    drawSprites();
   
  }

  function mouseDragged(){
    Matter.Body.setPosition(bobObject1.body, {x: mouseX , y: mouseY});
}