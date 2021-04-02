class Stone{
    constructor(x,y){ //properties
        var options = {
            
            isStatic : false,
            friction : 0.5,
            density : 1,
            restitution:0,

            
        }

        this.body = Bodies.circle(x,y,30,options);
        this.radius = 50;
        this.image = loadImage("stone.png")

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
        pop()
    }
}