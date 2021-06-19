class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
 this.gameState="pigpresent"
  }
display()
{
 
if((this.body.speed)<2.5)
{super.display();
}else
{
  if(this.gameState === "pigpresent"){
World.remove(world,this.body)  
score+=50
this.gameState="pigabsent"
  }
}
}
};


