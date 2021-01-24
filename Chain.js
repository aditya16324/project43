class Chain{

    constructor(p,q){
     var options={
        bodyA:p,
        pointB:q,
        lenght:0
 
     }

   this.chain=Constraint.create(options)
   World.add(world,this.chain);

}
display(){

stroke ("white")
  line (this.chain.bodyA.position.x-30,this.chain.bodyA.position.y,this.chain.pointB.x,this.chain.pointB.y)
  

}

}