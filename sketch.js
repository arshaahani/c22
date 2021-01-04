const engine=Matter.Engine
const world= Matter.World
const bodies= Matter.Bodies
var myworld,myengine;
function setup()
 {
  createCanvas(800,400);
  myengine=engine.create()
myworld=myengine.world;
var options={isStatic:true}
ground=bodies.rectangle(200,380,400,20,options)
world.add(myworld,ground)
var ball_options={restitution:1}
ball=bodies.circle(200,100,10,ball_options)
world.add(myworld,ball)
}

function draw() {
  background("cyan");  
 engine.update(myengine)
 rectMode(CENTER)
 rect(ground.position.x,ground.position.y,400,20)
 circle(ball.position.x,ball.position.y,20)
}
