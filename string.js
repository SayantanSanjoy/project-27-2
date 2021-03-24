class String{

constructor(bodyA,bodyB){

var options={
    bodyA:bodyA,
    bodyB:bodyB,
    
    stiffness:0.04,
    length:10,   

}

this.string=Constraint.create(options);

World.add(world,this.string)
}
display(){

var posA=this.string.bodyA.position;
var posB=this.string.bodyB.position;
strokeWeight(2)
line(posA.x,posA.y,posB.x,posB.y)

}







}