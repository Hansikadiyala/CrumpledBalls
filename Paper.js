class Paper{
constructor(x,y,r){

var options={
isStatic:false,
restitution:0.3,
density:0.5,
friction:1.3
}


this.body=Bodies.circle(x, y,r,options);
      this.r=r

        World.add(world,this.body);   
        console.log(this.body);
}    
      display(){
        push();
        fill(255,0,0);
       ellipse(this.body.position.x,this.body.position.y,this.r,this.r) ;
       var angle = this.body.angle;
       translate(this.body.position.x, this.body.position.y);
       rotate(angle);
       imageMode(CENTER);
       console.log(this.body)
      pop();

}

}
