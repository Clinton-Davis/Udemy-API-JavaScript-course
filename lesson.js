const btn = document.querySelector("button");
const output = document.querySelector("#output");
const intake = document.querySelector("input");
btn.addEventListener("click", getinput);

function getinput() {
	Console.log(intake.value);
}
