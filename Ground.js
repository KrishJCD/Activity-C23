class Ground
{
    constructor(xPOS,yPOS,width1,height1)
    {
        var ground_options={
            isStatic:true
        }
        this.ground=Bodies.rectangle(xPOS,yPOS,width1,height1,ground_options);
        World.add(wor,this.ground);
        console.log(width1);
        console.log(height1);
    }
    displayGround()
    {
        var grnd=this.ground.position;
        rect(grnd.x,grnd.y,this.width1,this.height1);
    }
}