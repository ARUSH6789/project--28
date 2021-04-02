class Mango{
    constructor(x,y){ //properties
        var options = {
            
            isStatic : true,
            friction : 1.0,
            restitution:0.5
            
        }

        this.body = Bodies.circle(x,y,50,options);
        this.radius = 50;
        this.image = loadImage("mango.png")

        World.add(world,this.body);
    }

    //functions
    display(){
        //nickname
      
        var pos = this.body.position;
        

        push();
        angleMode(RADIANS);
        translate(pos.x,pos.y);
        imageMode(CENTER);
        //fill("saffron")
        image(this.image,0,0,this.radius*1.3,this.radius*1.3);
        pop();
    }
}