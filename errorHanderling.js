const btn = document.querySelector("button");
const output = document.querySelector("#output");
const intake = document.querySelector("input");
const url = "https://randomuser.me/api/";
btn.addEventListener("click", getinput);

function getinput() {
	const xhr = new XMLHttpRequest();
	let tempVal = intake.value;
	let tempURL = url + "?results=" + tempVal;
	console.log(tempURL);
	xhr.onload = function() {
		if (this.readyState == 4 && this.status == "200") {
			let data = JSON.parse(xhr.responseText).results;
			outputHTML(data);
		} else {
			console.log("error");
		}
	};
	xhr.open("GET", tempURL);
	xhr.send();
	console.log(intake.value);
}

function outputHTML(data) {
	console.log(data);
	for (let i = 0; i < data.length; i++) {
		output.innerHTML += data[i].email + "<br>";
	}
}
