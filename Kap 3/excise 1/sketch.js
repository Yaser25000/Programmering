function setup() { 
  createCanvas(600, 400);
} 

function draw() { 
  background(600);
  fill(255,0,0);
  noStroke();
  if (mouseX < width/3) {
    ellipse(100, 0, width/3, height);
  }
  else if (mouseX <= width*2/3) {
    ellipse(width/3, 0, width/3, height);
  }
  else {
    rect(width*2/3, 0, width/3, height);
  }
}
