let s;
let v;
let p;

function setup() {
  createCanvas(windowWidth, windowHeight);
  s = new Sistema();
  v = new Sistema();
  p = new Sistema();
}

function draw() {
  // Use the getColor method to get the background color
  background(s.getColor());
  s.update();
  s.display();
  p.update();
  p.display();
  v.update();
  v.display();
}
