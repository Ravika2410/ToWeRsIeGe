class box{
    constructor(x,y,w,h)
    {
        this.color=color(random(0,255),random(0,255),random(0,255));
        var property={
        restitution:0,
        };
        this.width=30;
        this.height=45;
        this.body=Matter.Bodies.rectangle(x,y,this.width,this.height,property);
        Matter.World.add(myWorld,this.body);
    }
display()
{
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    rectMode(CENTER);
    fill(this.color);
    rect(0,0,this.width,this.height);
    pop();
}
}