// MOBILE MENU DROP DOWN

let burger = document.querySelector(".burger");
let drop_down = document.querySelector(".drop_down");
let bg = document.querySelector(".bg");
window.addEventListener("click", show_menu);
window.addEventListener("scroll", () => {
	console.log(window.scrollY);
	if (window.scrollY > 66) {
		console.log("Otisla Navigacija");
		burger.classList.add("burger_fix");
		burger.classList.add("shadow");
		drop_down.classList.add("drop_fix");
		bg.classList.add("anim");
	} else {
		burger.classList.remove("shadow");
		drop_down.classList.remove("drop_fix");
		burger.classList.remove("burger_fix");
		bg.classList.remove("anim");
	}
});

function show_menu(e) {
	let clikedItem = e.target;
	console.log(e.target);
	if (clikedItem.classList.contains("burger")) {
		drop_down.classList.toggle("show_menu");
		setTimeout(() => {
			burger.classList.toggle("shadow");
		}, 400);
	} else {
		burger.classList.add("shadow");
	}
}

// KONTROLA SIRINE I VISINE ELEMENATA PREKO VIEWPORTA

let squares = document.querySelectorAll(".square");
let width;
let height;
let cellWidth;
let cellHeight;

window.addEventListener("load", start);
window.addEventListener("resize", start);

function start() {
	width = window.innerWidth;
	height = window.innerHeight;

	console.log("HEIGH: ", height, " WIDTH: ", width);
	getSizes();
}

function getSizes() {
	if (width > 990) {
		cellWidth = width * 0.5 + "px";
		cellHeight = width * 0.4 + "px";
	} else if (width < 990) {
		cellWidth = 100 + "%";
		cellHeight = width * 0.4 + "px";
		console.log("MALI EKRAN");
	}

	squares.forEach((square) => {
		square.style.width = cellWidth;
		square.style.height = cellHeight;
	});
}
