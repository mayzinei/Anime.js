const equalizer = document.querySelector(".equalizer");
for (let i = 0; i <= 20; i++) {
	const bar = document.createElement("div");
	bar.classList.add("bar");
	equalizer.appendChild(bar);
}

const bars = document.querySelectorAll(".bar");

function randomizeHeights() {
	bars.forEach((bar) => {
		const randomHeight = Math.floor(Math.random() * 200);
		const duration = Math.floor(Math.random() * 100) + 500;

		anime({
			targets: bar,
			height: randomHeight,
			duration: duration,
			easing: "easeInOutQuad",
		});
	});
}
setInterval(randomizeHeights, 500);
