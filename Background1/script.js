const container = document.querySelector(".container");

for (let i = 1; i <= 1000; i++) {
	let block = document.createElement("div");
	block.classList.add("element");
	container.appendChild(block);
}

let blockAll = document.querySelectorAll(".element");

anime({
	targets: ".element",
	translateX: function () {
		return anime.random(0, window.innerWidth);
	},
	translateY: function () {
		return anime.random(0, window.innerHeight);
	},
	scale: function () {
		return anime.random(1, 5);
	},
	backgroundColor: function () {
		return `rgb(${anime.random(0, 255)}, ${anime.random(
			0,
			255
		)}, ${anime.random(0, 255)})`;
	},
	opacity: 0,
	easing: "linear",
	duration: 3000,
	delay: anime.stagger(100),
	complete: function (anim) {
		anim.restart();
	},
});
