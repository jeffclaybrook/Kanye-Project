const counter = document.getElementById("counter");
const button = document.getElementById("button");

let count = JSON.parse(localStorage.getItem("count") || "0");
counter.innerText = count;

button.addEventListener("click", () => {
 count++;
 localStorage.setItem("count", JSON.stringify(count));
 counter.innerText = count;
})

const animateButton = (e) => {
 e.preventDefault;
 e.target.classList.remove("animated");
 e.target.classList.add("animated");
 setTimeout(() => {
  e.target.classList.remove("animated")
 }, 700);
}

const buttons = document.getElementsByClassName("button");

for (let i = 0; i < buttons.length; i++) {
 buttons[i].addEventListener("click", animateButton);
}