let x = 100;
let y = 100;

function setup() {
  createCanvas(512, 512);
  fill(255, 0, 0);
}
function draw() {
  if (keyIsDown(LEFT_ARROW)) {
    x -= 10;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 10;
  }

  if (keyIsDown(UP_ARROW)) {
    y -= 10;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 10;
  }

  clear();
  circle(x, y, 30);
}
function borderCheck() {
  if (x + d / 2 >= width) {
    a = -speed;
    b = 0;
  }
  if (x - d / 2 <= 0) {
    a = speed;
    b = 0;
  }
  if (y + d / 2 >= height) {
    a = 0;
    b = -speed;
  }
  if (y - d / 2 < 0) {
    a = 0;
    b = speed;
  }
 }
 function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    b = speed;
    a = 0;
  }
  if (keyCode === UP_ARROW) {
    b = -speed;
    a = 0;
  }
  if (keyCode === LEFT_ARROW) {
    b = 0;
    a = -speed;
  }
  if (keyCode === RIGHT_ARROW) {
    b = 0;
    a = speed;
  }
 }