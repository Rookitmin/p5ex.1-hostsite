function setup() {
  createCanvas(1600, 400);
}
var xSpeed1=0.1;
var xSpeed2=0; 
var x = 800;
fill(0,0,0);
function draw() {
  background(220);
	ellipse(mouseX - 5,mouseY - 5,10,10);
	ellipse(x,200,5,5);
	xSpeed2 += xSpeed1;
	x += xSpeed2;
	if (x > 1450) {
		xSpeed1 = -0.1;
		fill(mouseX,mouseY,x);
	}
	if (x < 150) {
		xSpeed1 = 0.1;
		fill(mouseY,mouseX,x);
	}
}
