const container = document.querySelector(".container");
for (let i = 0; i <= 1000; i++) {
	let block = document.createElement("div");
	block.classList.add("element");
	container.appendChild(block);
}

let blockAll = document.querySelectorAll(".element");
// let animation = anime({
// 	targets: blockAll,
// 	translateX: 100, //to left move 100px
// 	easing: "easeInOutQuad", //slowly move to lefts
// 	loop: true, //repeat
// 	translateY: 100,
// 	rotate: 90,
// });
// ===================

// let animation = anime({
// 	targets: blockAll,
// 	keyframes: [
// 		{
// 			translateX: 200,
// 			translateY: anime.stagger(20),
// 			rotate: anime.stagger([-360, 360]),
// 		},
// 		{
// 			translateX: 0,
// 			translateY: 0,
// 			rotate: 0,
// 		},
// 	],
// 	loop: true,
// 	easing: "easeInOutQuad",
// 	duration: 2000,
// });
// ==========================

let animation = anime({
	targets: blockAll,
	scale: [
		{ value: 0.1, easing: "easeOutSine", duration: 500 },
		{ value: 1, easing: "easeInOutQuad", duration: 1200 },
	],
	delay: anime.stagger(200, { grid: [34, 16], from: "center" }),
	loop: true,
});
