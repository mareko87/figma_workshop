// MOBILE MENU DROP DOWN

let burger = document.querySelector(".burger");
let drop_down = document.querySelector(".drop_down");

window.addEventListener("click", show_menu);
window.addEventListener("scroll", () => {
	console.log(window.scrollY);
	if (window.scrollY > 66) {
		console.log("Otisla Navigacija");
		burger.classList.add("burger_fix");
	} else {
		burger.classList.remove("burger_fix");
	}
});

function show_menu(e) {
	let clikedItem = e.target;
	console.log(e.target);
	if (clikedItem.classList.contains("burger")) {
		drop_down.classList.toggle("show_menu");
	} else {
		drop_down.classList.remove("show_menu");
	}
}
