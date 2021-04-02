class Tree{
    constructor(x,y){ //properties
        var options = {
            friction:1.0,
            isStatic: true

        }
        this.image = loadImage("tree.png");
        this.body = Bodies.rectangle(x,y,1000,25,options);
        this.width = 700;
        this.height = 700;
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
        image(this.image,0,0,this.width,this.height);
        pop()
    }
}