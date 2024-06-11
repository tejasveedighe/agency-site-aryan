function openNav() {
	var x = document.getElementById("myLinks");
	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}

function onEbookFormSubmit(event) {
	event.preventDefault();
	const data = new FormData(event.target);
	const name = data.get("user-email");
}

const form = document.getElementById("ebook-form");
form.addEventListener("submit", onEbookFormSubmit);
