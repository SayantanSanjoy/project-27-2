class Bob{

constructor(x,y,radius){

var option={

isStatic:true,

'restitution':0.8,
'friction':1.0,
 'density':1.0

}

this.body=Bodies.circle(x,y,radius,option);

this.radius=radius

World.add(world,this.body)

}
display(){

push();

translate(this.body.position.x,this.body.position.y)
fill("pink")
ellipseMode(CENTER)
ellipse(0,0,this.radius,this.radius)
pop();
}









}