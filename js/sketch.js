"using strict";

let map =
	[
		['&', '&', '&', '&', '&', '&', '&', '&', '&', '&', '&', '&', '&', '&', '&', '&', '&', '&', '&', '&', '&', '&', '&', '&', '&', '&', '&', '&', '&', '&', '&', '&'],
		['&', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '#', '.', '.', '.', '#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '&'],
		['&', '.', '.', '#', '.', '.', '.', '.', '.', '.', '.', '#', '.', '#', '.', '.', '.', '#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '&'],
		['&', '.', '.', '#', '.', '.', '.', '.', '.', '.', '.', '#', '.', '#', '.', '.', '.', '#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '&'],
		['&', '.', '.', '#', '.', '.', '.', '.', '.', '.', '.', '#', '.', '#', '.', '.', '.', '#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '&'],
		['&', '.', '.', '#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '#', '.', '.', '.', '#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '&'],
		['&', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '#', '.', '.', '.', '#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '&'],
		['&', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '#', '.', '.', '.', '#', '.', '.', '.', '.', '.', '.', '0', '.', '.', '.', '.', '.', '.', '&'],
		['&', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '#', '.', '.', '.', '#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '&'],
		['&', '.', '.', '#', '#', '#', '.', '.', '.', '.', '.', '.', '.', '#', '.', '.', '.', '#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '&'],
		['&', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '#', '.', '.', '.', '#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '&'],
		['&', '.', '.', '.', '.', '.', '.', '.', '.', '#', '.', '.', '#', '#', '.', '.', '.', '#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '&'],
		['&', '.', '.', '.', '.', '.', '#', '.', '#', '#', '.', '.', '#', '#', '.', '.', '.', '#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '&'],
		['&', '.', '.', '.', '.', '.', '#', '.', '.', '.', '.', '.', '#', '#', '.', '.', '.', '#', '#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '&'],
		['&', '#', '#', '#', '#', '#', '#', '#', '#', '#', '.', '.', '#', '.', '.', '.', '.', '.', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '.', '#', '&'],
		['&', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '&'],
		['&', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '0', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '&'],
		['&', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '&'],
		['&', '#', '.', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '.', '.', '.', '.', '.', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '&'],
		['&', '.', '.', '.', '.', '#', '.', '%', '%', '%', '%', '.', '#', '#', '.', '.', '.', '#', '#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '&'],
		['&', '.', '.', '.', '.', '#', '.', '.', '.', '.', '.', '.', '.', '#', '.', '.', '.', '#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '&'],
		['&', '.', '.', '.', '.', '#', '.', '.', '.', '.', '.', '.', '.', '#', '.', '.', '.', '#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '&'],
		['&', '.', '.', '.', '.', '#', '.', '.', '.', '.', '.', '.', '.', '#', '.', '.', '.', '#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '&'],
		['&', '.', '.', '.', '.', '#', '.', '.', '.', '.', '.', '.', '.', '#', '.', '.', '.', '#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '&'],
		['&', '.', '.', '.', '.', '#', '.', '.', '.', '.', '.', '.', '.', '#', '.', '.', '.', '#', '.', '.', '.', '.', '.', '.', '0', '.', '.', '.', '.', '.', '.', '&'],
		['&', '.', '.', '.', '.', '#', '.', '.', '.', '.', '.', '.', '.', '#', '.', '.', '.', '#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '&'],
		['&', '.', '.', '.', '.', '#', '.', '.', '.', '.', '.', '.', '.', '#', '.', '.', '.', '#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '&'],
		['&', '.', '.', '.', '.', '#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '&'],
		['&', '.', '.', '.', '.', '#', '.', '.', '.', '.', '.', '.', '.', '#', '.', '.', '.', '#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '&'],
		['&', '.', '.', '.', '.', '#', '.', '.', '.', '.', '.', '.', '.', '#', '.', '.', '.', '#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '&'],
		['&', '.', '.', '.', '.', '#', '.', '.', '.', '.', '.', '.', '.', '#', '.', '.', '.', '#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '&'],
		['&', '&', '&', '&', '&', '&', '&', '&', '&', '&', '&', '&', '&', '&', '&', '.', '&', '&', '&', '&', '&', '&', '&', '&', '&', '&', '&', '&', '&', '&', '&', '&']
	];

let mapWidth = map[0].length;
let mapHeight = map.length;
let tileSize = 12;

let player = {
	x: mapWidth / 2.0 + 1,
	y: mapHeight / 2.0,
	angle: 0.0
};
let fov = 3.14159 / 4;
let depth = 16;

let img1;
let img2;
let img3;
let img4;
let img5;

function preload() { // Runs once before startup
	img1 = loadImage("./images/texture1.jpg");
	img2 = loadImage("./images/texture2.jpg");
	img3 = loadImage("./images/pavel.png");
	img4 = loadImage("./images/happybabis.png");
	img5 = loadImage("./images/fontän.png");
}

function setup() { // Runs once at startup
	if(canvas.getContext) {
		createCanvas(window.innerWidth, window.innerHeight);
	} else {
		document.querySelector("#noSupport").classList.toggle("hide");
	}
	noStroke();
	//loadData();
	draw();
	checkUser();
}

function draw() { // Loop
	let cosAngle = Math.cos(player.angle);
	let sinAngle = Math.sin(player.angle);
	if(playGame) {
		background(0);
		Controls(cosAngle, sinAngle);
		RayCaster(cosAngle, sinAngle);
		miniMap();
	}
	//saveData();
}

function windowResized() { // Runs if the window gets resized
  	resizeCanvas(window.innerWidth, window.innerHeight);
}

function Controls(cosAngle, sinAngle) {
	let speed = 3.5 * (deltaTime / 1000);
	let turnSpeed = 2.5 * (deltaTime / 1000);
	let forwardX = 0;
	let forwardY = speed;
	let rightX = speed;
	let rightY = 0;
	let rotForwardX = cosAngle * forwardX - sinAngle * forwardY;
	let rotForwardY = sinAngle * forwardX + cosAngle * forwardY;
	// let rotBackwardX = -1 * (cosAngle * forwardX - sinAngle * forwardY);
	// let rotBackwardY = -1 * (sinAngle * forwardX + cosAngle * forwardY);
	let rotRightX = cosAngle * rightX - sinAngle * rightY;
	let rotRightY = sinAngle * rightX + cosAngle * rightY;
	// let rotLeftX = -1 * (cosAngle * rightX - sinAngle * rightY);
	// let rotLeftY = -1 * (sinAngle * rightX + cosAngle * rightY);
	let hitBoxRad = 0.4;
	let colForwardX = cosAngle * hitBoxRad;
	let colForwardY = sinAngle * hitBoxRad;
	let colRightX = sinAngle * hitBoxRad;
	let colRightY = cosAngle * hitBoxRad;

	// Controls
	if(keyIsDown(87)) {
		// if(map[Math.floor(player.y)][Math.floor(player.x + colForwardX)] == '.') {
        	player.x += rotForwardX;
    	// }
    	// if(map[Math.floor(player.y + colForwardY)][Math.floor(player.x)] == '.') {
        	player.y += rotForwardY;
    	// }
	}
	if(keyIsDown(65)) {
		// if(map[Math.floor(player.y)][Math.floor(player.x - colRightX)] == '.') {
			player.x -= rotRightX;
    	// }
    	// if(map[Math.floor(player.y - colRightY)][Math.floor(player.x)] == '.') {
			player.y -= rotRightY;
    	// }
	}
	if(keyIsDown(83)) {
		// if(map[Math.floor(player.y)][Math.floor(player.x - colForwardX)] == '.') {
			player.x -= rotForwardX;
    	// }
    	// if(map[Math.floor(player.y - colForwardY)][Math.floor(player.x)] == '.') {
			player.y -= rotForwardY;
    	// }
	}
	if(keyIsDown(68)) {
		// if(map[Math.floor(player.y)][Math.floor(player.x + colRightX)] == '.') {
			player.x += rotRightX;
    	// }
    	// if(map[Math.floor(player.y + colRightY)][Math.floor(player.x)] == '.') {
			player.y += rotRightY;
    	// }
	}
	if(keyIsDown(LEFT_ARROW)) {
		player.angle += turnSpeed;
	}
	if(keyIsDown(RIGHT_ARROW)) {
		player.angle -= turnSpeed;
	}

	// Collision detection
	// for(let i = 0; i < 8; i++) {
	// 	if(map[Math.floor(player.y)][Math.floor(player.x + hitBoxRad)] == '.') {
	// 		player.x -= hitBoxRad - (Math.floor(player.x + 1) - player.x);
	// 	}
	// }
}

function RayCaster(cosAngle, sinAngle) {
	let startX = -depth;
	let slutX = depth;
	let rayOrdning = 0;
	let deltaX = slutX - startX;
	let roteradRayY = 0;
	// let rayY = Math.floor(player.y) + 1;

	for(let x = startX; x < slutX; x += deltaX / window.innerWidth) {
		rayOrdning++;
		let rayLutning = x / depth;
		let y = 0.0;
		// let rotSlutpunktX = cosAngle * x - sinAngle * depth + player.x;
		// let rotSlutpunktY = sinAngle * x + cosAngle * depth + player.y;
		// let rayLutning = (rotSlutpunktY - player.y) / (rotSlutpunktX - player.x);

		while(y < depth) {
			let rayX = rayLutning * y;
			let rayY = y;
			let roteradRayX = cosAngle * rayX - sinAngle * rayY + player.x;
			let tempRayY = roteradRayY;
			roteradRayY = sinAngle * rayX + cosAngle * rayY + player.y;
			y += 0.02;

			if(roteradRayX >= 0 && roteradRayX < mapWidth && roteradRayY >= 0 && roteradRayY < mapHeight) {
				if(map[Math.floor(roteradRayY)][Math.floor(roteradRayX)] != '.') {
					let avståndPlayerVägg = y;
					let kollumnLängd = window.innerHeight / avståndPlayerVägg;
					let kollumnStartY = window.innerHeight / 2 - kollumnLängd / 2;
					let kollumnSlutY = kollumnStartY + kollumnLängd;

					// let c = [255, 255, 255];
					let img = img1;
					switch(map[Math.floor(roteradRayY)][Math.floor(roteradRayX)]) {
						// case '&': c = [161, 98, 56]; break;
						// case '%': c = [130, 130, 130]; break;
						// case '0': c = [72, 212, 205]; break;
						case '&': img = img2; break;
						case '%': img = img3; break;
						case '0': img = img5; break;
					}
					// c[0] /= (avståndPlayerVägg * 0.5 + 1);
					// c[1] /= (avståndPlayerVägg * 0.5 + 1);
					// c[2] /= (avståndPlayerVägg * 0.5 + 1);
					//fill(c[0], c[1], c[2]);
					//rect(rayOrdning, kollumnStartY, 1, kollumnLängd);
					let imgX;
					if(Math.floor(tempRayY) === Math.floor(roteradRayY))
						imgX = Math.round((roteradRayY - Math.floor(roteradRayY)) * img.width);
					else
						imgX = Math.round((roteradRayX - Math.floor(roteradRayX)) * img.width);
					image(img, rayOrdning, kollumnStartY, 1, kollumnLängd, imgX, 0, 1, img.width);

					// Sigmoid-funktion för shading: (2 * övreGräns) / (2^(-0.25 * avståndPlayerVägg) + 1) - övreGräns
					fill(0, (2 * 255) / (2 ** (-0.3 * avståndPlayerVägg) + 1) - 255);
					rect(rayOrdning, kollumnStartY, 1, kollumnLängd);
					miniMapRays(roteradRayX, roteradRayY);
					break;
				}
			}
		}
	}
	console.log("frame, " + player.x + " " + player.y + " " + Math.round(1 / (deltaTime / 1000)));
}

function miniMapRays(roteradRayX, roteradRayY) {
	stroke(150, 0, 0);
	strokeWeight(1);
	line(player.x * tileSize, player.y * tileSize, roteradRayX * tileSize, roteradRayY * tileSize);
	noStroke();
}

function miniMap() {
	noFill();
	strokeWeight(1);
	stroke(50, 50, 150);
	for(let i = 0; i < mapHeight; i++) {
		for(let j = 0; j < mapWidth; j++) {
			if(map[i][j] != '.')
				fill(100, 100, 200);
			rect(j * tileSize, i * tileSize, tileSize, tileSize);
			noFill();
		}
	}
	stroke(200, 0, 0);
	strokeWeight(10);
	point(player.x * tileSize, player.y * tileSize);
	noStroke();
}

function saveData() {
	window.addEventListener("beforeunload", () => {
		localStorage.setItem("player", JSON.stringify(player));
	});
}

function loadData() {
	player = JSON.parse(localStorage.getItem("player"));
}