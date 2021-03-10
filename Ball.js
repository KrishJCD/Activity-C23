class Ball
{
    constructor(x,y,width,height)
    {
        var options={
            restitution:1.7
        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(wor,this.body);
        console.log(width);
        console.log(height);
    }
    display()
    {
        var pos=this.body.position;
        rect(pos.x,pos.y,this.width,this.height);
    }
}