class Box{

constructor(x,y){

 var options = {
  
    isStatic:true,
    restitution:0.1,
    friction:1,
    density:2

  

 }
this.x=x;
this.y=y;
this.visibility=225
this.body = Bodies.rectangle(this.x,this.y,20,40);
World.add(world,this.body);


}
display(){
   var angle = this.body.angle;
   var pos= this.body.position;
    if(this.body.speed<10){
      
     
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,20, 40);
      pop();
              }
              else{
                World.remove(world,this.body);
                push();
                this.visibilty = this.visiblity-5;

                pop();
              }
            }

}