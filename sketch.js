let x = 0;
let y = 0;
let xpos;
let ypos;

let mode = 1;

let background = document.getElementById('background');


function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');
  }
  
  function draw() {

    if (mode == 1) {
      displayTrees();
    }

      if ((xpos>650 && xpos<750) && (ypos>100 && ypos<150)){
        background.style.display='block';
        trees.style.display='none';
      }

      // if ((xpos<50) && (ypos<50)){

      //   //hide bear again
      //   background.style.display='none';

      //   //change scene to the next to the next one by adding 1
      //   mode = 2;
      // }

      //changing of scenes
      // if (mode == 2){
      //   displayTrees();
      //   background(0);
      //   background.style.display='none';
      // }
    //}
    // console.log("cat is at: " + xpos + ", " + ypos);
  }
  
  function windowResized() {
    // resize the canvas when the screen is resized.
    resizeCanvas(windowWidth, windowHeight);
}

function displayTrees() {
  removeElements();
  let trees = createImg("images/face3.png");
   trees.size(118.8,220.2);
   trees.id('trees');

  xpos = 500+x;
  ypos = 500+y;

  trees.position(xpos, ypos);

  if (keyIsPressed){
    if(keyCode == UP_ARROW){

      y-=2;
      
    } 
    
    if(keyCode == RIGHT_ARROW) {
      x+=2;
    }

    if(keyCode == DOWN_ARROW) {

      y+=2;
    }

    if(keyCode == LEFT_ARROW) {

      x-=2;
    }
  }
}