class Ground{
    constructor(x,y){ //properties
        var options = {
            friction:1.0,
            isStatic: true

        }
        this.body = Bodies.rectangle(x,y,1000,25,options);
        this.width = 1000;
        this.height = 25;
        World.add(world,this.body);
    }

    //functions
    display(){
        //nickname
        var pos = this.body.position;
        

        push();
        angleMode(RADIANS);
        translate(pos.x,pos.y);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop()
    }
}