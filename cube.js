class Cube
{
    constructor(x, y, color, velocityX, velocityY)
    {

      this.sprite = createSprite(x, y, 50, 50);       
      this.sprite.shapeColor = color;
      this.sprite.velocityX = velocityX;
      this.sprite.velocityY = velocityY;
      
    }
  }



 