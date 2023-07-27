const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let stars = [];

// Set canvas size to match the window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function createStar() {
	return {
		x: Math.random() * canvas.width,
		y: Math.random() * canvas.height,
		length: 1 + Math.random() * 3,
		opacity: 0.5 + Math.random() * 0.5,
		speed: 1 + Math.random() * 2,
	};
}

function drawStar(star) {
	ctx.beginPath();
	ctx.moveTo(star.x, star.y);
	ctx.lineTo(star.x + star.length, star.y + star.length);
	ctx.strokeStyle = `rgba(209, 23, 2, ${star.opacity})`;
	ctx.lineWidth = 2;
	ctx.stroke();
}

function updateStars() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	stars.forEach((star) => {
		star.x -= star.speed;
		star.y += star.speed;
		if (star.x < 0 || star.y > canvas.height) {
			Object.assign(star, createStar());
		}
		drawStar(star);
	});
	requestAnimationFrame(updateStars);
}

function init() {
	for (let i = 0; i < 100; i++) {
		stars.push(createStar());
	}
	updateStars();
}

init();