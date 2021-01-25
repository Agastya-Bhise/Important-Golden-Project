var mainCube;
var BG_IMG;
var bgSprite;
var whiteCubeGroup;
var edges;
//var randomx = random();
//var randomy = random();


function preload()
{
  BG_IMG = loadImage("images/BG.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);

  edges = createEdgeSprites();
  
  bgSprite = createSprite(width/2, height/2, width, height);
  bgSprite.addImage(BG_IMG)
  
  mainCube = new Cube(width/2, height/2, "red", 0, 0);

  
  mainCubeGroup = new Group();
  mainCubeGroup.add(mainCube.sprite);

  whiteCubeGroup = new Group();
  
  for(var i = 0;i <= 6;i = i + 1){
       whiteCube = new Cube(random(80, 200), random(100, 200), "white", random(-5,5), random(-5,5));
       whiteCubeGroup.add(whiteCube.sprite);
  }


}

function draw() {
  background(0);  
  

  console.log("mouseX", mouseX);
  console.log("mouseY", mouseY);

  camera.position.x = mainCube.sprite.x;
  camera.position.y = mainCube.sprite.y;

  if(keyDown("W"))
  { 
    mainCube.sprite.y = mainCube.sprite.y -10;
  }

  if(keyDown("A"))
  { 
    mainCube.sprite.x = mainCube.sprite.x -10;
  }

  if(keyDown("S"))
  { 
    mainCube.sprite.y = mainCube.sprite.y +10;
  }

  if(keyDown("D"))
  { 
    mainCube.sprite.x = mainCube.sprite.x +10;
  }
  
  whiteCubeGroup.bounce(edges, function (){
       whiteCubeGroup.setVelocityEach(random(-5, 5), random(-5, 5))
  });
  /*
  if(mainCubeGroup)
  {
    
  }*/
  

  drawSprites();
}

// We are planning to achieve one of the most important mechanic of this game,
// which is the cubes either chasing or running away depending on the size of the group.

