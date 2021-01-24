const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint
var engine, world;
var x=0;

function setup(){

    var canvas = createCanvas(1500,600);
    engine = Engine.create();
    world = engine.world;
    

    
    //ground = new Ground(750,height,1500,20)

    box1 = new Box(300,300,70,70);
    builiding1 = new Builiding(300,100,100,200)
    builiding2 = new Builiding(500,200,125,225)
    builiding3 = new Builiding(700,300,150,250)
    builiding4 = new Builiding(900,400,175,275)
    builiding5 = new Builiding(1100,500,195,295)
    builiding6 = new Builiding(30,150,195,295)
    builiding7 = new Builiding(90,550,195,295)
   
}

function draw(){
    background(0);
    Engine.update(engine);
  
    box1.display();
    builiding1.display();
    builiding2.display();
    builiding3.display();
    builiding4.display();
    builiding5.display();
    builiding6.display();
    builiding7.display();




    if(keyDown(LEFT_ARROW)&&x===0 ){
      x=1
      chain1= new Chain(box1.body,{x:100,y:100})
      
}
if(x===1){
  chain1.display();
}

if(keyDown(LEFT_ARROW)&&x===1 ){
  x=2
  chain2= new Chain(box1.body,{x:300,y:100})
  
}
if(x===2){
chain2.display();

}





  //ground.display();
  console.log("working")
    
}



    
  
