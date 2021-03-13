"using strict";

const map =
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

const mapWidth = map[0].length;
const mapHeight = map.length;
const tileSize = 12;

let playerX = mapWidth / 2 + 1;
let playerY = mapHeight / 2;
let playerAngle = 0;
const depth = 20;

let img1;
let img2;
let img3;
let img4;

function preload() { // Runs once before startup
	img1 = loadImage("./images/texture1.jpg");
	img2 = loadImage("./images/texture2.jpg");
	img3 = loadImage("./images/pavel.png");
	img4 = loadImage("./images/fontän.png");
}

function setup() { // Runs once at startup
	if(canvas.getContext) { // Check if canvas is supported by browser
		createCanvas(window.innerWidth, window.innerHeight);
	} else {
		document.querySelector("#noSupport").classList.toggle("hide");
	}
	noStroke();
	loadData();
	draw();
	checkUser();
}

function draw() { // Loop
	let cosAngle = Math.cos(playerAngle);
	let sinAngle = Math.sin(playerAngle);
	if(playGame) {
		floorCeiling();
		controls(cosAngle, sinAngle);
		rayCaster(cosAngle, sinAngle);
		miniMap();
	}
	saveData();
}

function windowResized() { // Runs if the window gets resized
  	resizeCanvas(window.innerWidth, window.innerHeight);
}

function controls(cosAngle, sinAngle) {
	let speed = 3.5 * (deltaTime / 1000);
	let turnSpeed = 2.5 * (deltaTime / 1000);
	let rotForwardX = -sinAngle * speed;
	let rotForwardY = cosAngle * speed;
	let rotRightX = cosAngle * speed;
	let rotRightY = sinAngle * speed;

	// Controls
	if(keyIsDown(87)) {
		playerX += rotForwardX;
		playerY += rotForwardY;
	}
	if(keyIsDown(65)) {
		playerX -= rotRightX;
		playerY -= rotRightY;
	}
	if(keyIsDown(83)) {
		playerX -= rotForwardX;
		playerY -= rotForwardY;
	}
	if(keyIsDown(68)) {
		playerX += rotRightX;
		playerY += rotRightY;
	}
	if(keyIsDown(LEFT_ARROW)) {
		playerAngle += turnSpeed;
	}
	if(keyIsDown(RIGHT_ARROW)) {
		playerAngle -= turnSpeed;
	}
}

function rayCaster(cosAngle, sinAngle) { // DDA algorithm
	let startX = -depth;
	let slutX = depth;
	let deltaX = slutX - startX;
	let rayOrdning = 0;
	
	for(let x = startX; x < slutX; x += deltaX / window.innerWidth) {
		let depthHyp = Math.sqrt(depth ** 2 + x ** 2);
		rayOrdning++;
		let rotSlutpunktX = cosAngle * x - sinAngle * depth;
		let rotSlutpunktY = sinAngle * x + cosAngle * depth;
		let rayLutningX = rotSlutpunktX / rotSlutpunktY;
		let rayLutningY = rotSlutpunktY / rotSlutpunktX;
		let rayDirX = rotSlutpunktX / Math.abs(rotSlutpunktX);
		let rayDirY = rotSlutpunktY / Math.abs(rotSlutpunktY);
		rotSlutpunktX += playerX;
		rotSlutpunktY += playerY;
		let rayX = playerX;
		let rayY = playerY;
		let diffX = 0;
		let diffY = 0;
		let floorRayX = Math.floor(playerX);
		let floorRayY = Math.floor(playerY);
		
		for(let stepCount = 0; stepCount < depth; stepCount++) {
			// Check ray direction
			if(rayDirX === 1) {
				diffX = Math.floor(rayX) + rayDirX - rayX;
			} else {
				diffX = Math.ceil(rayX) + rayDirX - rayX;
			}
			if(rayDirY === 1) {
				diffY = Math.floor(rayY) + rayDirY - rayY;
			} else {
				diffY = Math.ceil(rayY) + rayDirY - rayY;
			}
			
			if(diffY ** 2 + (diffY * rayLutningX) ** 2 < diffX ** 2 + (diffX * rayLutningY) ** 2) {
				rayY += diffY;
				rayX += diffY * rayLutningX;
				floorRayY += rayDirY;
			} else {
				rayX += diffX;
				rayY += diffX * rayLutningY;
				floorRayX += rayDirX;
			}
			
			if(floorRayX >= 0 && floorRayX < mapWidth && floorRayY >= 0 && floorRayY < mapHeight) {
				if(map[floorRayY][floorRayX] != '.') {
					let rayLength = Math.sqrt((rayX - playerX) ** 2 + (rayY - playerY) ** 2);
					let avståndPlayerVägg = rayLength / depthHyp * depth;
					let kollumnLängd = window.innerHeight / avståndPlayerVägg;
					let kollumnStartY = window.innerHeight / 2 - kollumnLängd / 2;

					// Texture choice
					let img = img1;
					switch(map[floorRayY][floorRayX]) {
						case '&': img = img2; break;
						case '%': img = img3; break;
						case '0': img = img4; break;
					}

					// Finding what part of the image to render
					let imgX;
					if(Math.floor(rayX) === rayX)
						imgX = Math.round((rayY - Math.floor(rayY)) * img.width);
					else imgX = Math.round((rayX - Math.floor(rayX)) * img.width);

					// Render
					image(img, rayOrdning, kollumnStartY, 1, kollumnLängd, imgX, 0, 1, img.width);

					// Sigmoid-function for shading: (2 * övreGräns) / (2^(-k * avståndPlayerVägg) + 1) - övreGräns
					fill(0, (2 * 255) / (2 ** (-0.4 * avståndPlayerVägg) + 1) - 255);
					rect(rayOrdning, kollumnStartY, 1, kollumnLängd);
					
					miniMapRays(rayX, rayY);
					break;
				}
			}
		}
	}
}

function floorCeiling() {
	for(let i = 0; i < window.innerHeight; i++) {
		fill(Math.abs(i / 5 - window.innerHeight / 10));
		rect(0, i, window.innerWidth, 1);
	}
}

function miniMapRays(rayX, rayY) {
	stroke(150, 0, 0);
	strokeWeight(1);
	line(playerX * tileSize, playerY * tileSize, rayX * tileSize, rayY * tileSize);
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
	point(playerX * tileSize, playerY * tileSize);
	noStroke();
}

function saveData() {
	window.addEventListener("beforeunload", () => {
		localStorage.setItem("PLAYERX", JSON.stringify(playerX));
		localStorage.setItem("PLAYERY", JSON.stringify(playerY));
		localStorage.setItem("PLAYERANGLE", JSON.stringify(playerAngle));
	});
}

function loadData() {
	playerX = JSON.parse(localStorage.getItem("PLAYERX"));
	playerY = JSON.parse(localStorage.getItem("PLAYERY"));
	playerAngle = JSON.parse(localStorage.getItem("PLAYERANGLE"));
}