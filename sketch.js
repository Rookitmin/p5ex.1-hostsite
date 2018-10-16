function setup() {
	createCanvas(400, 400);
	background("blue");
}
var player = {
	xPosition = 200
	yPosition = 200
	grav = -0.01
	change = 10
	colorHelmet = [100, 100, 255]
	colorBody = [255, 0, 0]
	costume = 1
};

var drawPlayer = function (x, y) {
	fill(player.colorBody);
	rect(x, y + player.costume, 20, 20);
	fill(player.colorHelmet);
	rect(x, player.y + player.costume + 2, 5, 15);
	fill(player.colorBody);
	rect(x + 5, y + player.costume + 20, 10, 5 + player.costume);
	rect(x, y + 25, 20, 30);
}

var ground = function (y) {
	colorMode(RGB, 255);
	noStroke();
	fill(0, 255, 0);
	rect(0, y, 400, 15);
	fill(65, 60, 45);
	rect(0, y + 15, 400, 100000);
}

function draw() {
	background("blue");
	ground(300);
	if (player.y < 255) {
		player.y += player.change;
		player.change += player.grav;
		drawPlayer(player.x, player.y);
	} 
	else if (keyCode = 38) {
		player.y -= 10;
		player.change = 10;
		player.grav = -0.01;
		drawPlayer(player.x, player.y);
		player.y -= 10;
		player.change = 10;
		player.grav = -0.01;
		drawPlayer(player.x, player.y);
	}
	else {
		player.y = 305;
		player.grav = 0;
		drawPlayer(player.x, player.y);
	}
}
