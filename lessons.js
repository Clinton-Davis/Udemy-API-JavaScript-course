const btn = document.querySelector("button");
const output = document.querySelector("#output");
const intake = document.querySelector("input");
const url = "https://randomuser.me/api/";
btn.addEventListener("click", getinput);

function getinput() {
	fetch(url)
		.then(function(responce) {
			return responce.json();
		})
		.then(function(data) {
			console.log(data.results);
		});
}
