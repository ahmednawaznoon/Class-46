var cue, cueBall, poolTable;
var ball1, ball2, ball3, ball4, ball5, ball6, ball7, ball8, ball9, ball10, ball11, ball12, ball13, ball14, ball15
var edges;
var gameState = "play";
var balls = []


function setup() {
    createCanvas(800, 400);
    
    cue = createSprite(200, 200, 350, 5);
    cueBall = createSprite(200, 200, 20, 20);
    ball1 = createSprite(600, 200, 20, 20);
    ball2 = createSprite(622, 189, 20, 20);
    ball3 = createSprite(622, 211, 20, 20);
    ball4 = createSprite(644, 178, 20, 20);
    ball5 = createSprite(644, 200, 20, 20);
    ball6 = createSprite(644, 222, 20, 20);
    ball7 = createSprite(666, 167, 20, 20);
    ball8 = createSprite(666, 189, 20, 20);
    ball9 = createSprite(666, 211, 20, 20);
    ball10 = createSprite(666, 233, 20, 20);
    ball11 = createSprite(688, 156, 20, 20);
    ball12 = createSprite(688, 178, 20, 20);
    ball13 = createSprite(688, 200, 20, 20);
    ball14 = createSprite(688, 222, 20, 20);
    ball15 = createSprite(688, 244, 20, 20);

    edges = createEdgeSprites();

    

    balls = [ball1, ball2, ball3, ball4, ball5, ball6, ball7, ball8, ball9, ball10, ball11, ball12, ball13, ball14, ball15]

}

function draw() {
    cueBall.bounceOff(edges)
    
    background("white");
    cue.x = mouseX;
    cue.y = mouseY;
    if (gameState === "play") {
        cue.pointTo(cueBall.x, cueBall.y);
    } 
    //console.log("Cue direction-->"+cue.x + " " + cue.y);
    
    if (cue.isTouching(cueBall)) {
      cueBall.setSpeedAndDirection(30);
      gameState = "end";
    }

    cueBall.pointTo(400-cue.x, 400-cue.y);
   // console.log(balls)

    for (var i = 0; i < balls.length; i++) {
      for (var j = i + 1; j < balls.length; j++) {
        balls[i].bounce(balls[j]);
        balls[i].bounceOff(edges);
        cueBall.bounce(balls[i])
      }
    }

    for (var i = 0; i < balls.length; i++) {
      if (balls[i].velocityX != 0 || balls[i].velocityY != 0) {
        if (balls[i].velocityX > 0)
             balls[i].velocityX-=90;
        if (balls[i].velocityX < 0)
             balls[i].velocityX+=90;
        if (balls[i].velocityY > 0)
             balls[i].velocityY-=90;
        if (balls[i].velocityY < 0)
             balls[i].velocityY+=90;

      }
    }

    console.log(balls[0].velocityX)
  
  drawSprites();


  }