class band{
constructor(bodyA,bodyB){
    var bands={
        bodyA:bodyA,
        bodyB:bodyB,
        stiffness:0.04,
        length:10
    }
    this.Band=Constraint.create(bands)
    World.add(world,this.Band);

}

display(){
var pointA=this.Band.bodyA.position
var pointB=this.Band.bodyB.position
line(pointA.x,pointA.y,pointB.x,pointB.y)

}
}