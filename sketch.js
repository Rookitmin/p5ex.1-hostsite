function setup() {
  createCanvas(400, 400);
}
var xSpeed1=0.1;
var xSpeed2=0; 
var x = 200;
function draw() {
  background(220);
	fill(0,0,0);
	ellipse(mouseX - 5,mouseY - 5,10,10);
	ellipse(x,200,5,5);
	xSpeed2 += xSpeed1;
	x += xSpeed2;
	if (x > 250) {
		xSpeed1 = -0.1;
	}
	if (x < 150) {
		xSpeed1 = 0.1;
	}
}
