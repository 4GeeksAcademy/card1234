import "./style.css";
let elementos = ["A", "J", "Q", "K", 2, 3, 4, 5, 6, 7, 8, 9, 10];
let iconos = ["♦", "♥", "♠", "♣"];
let random3 = Math.floor(Math.random() * iconos.length);
let random13 = Math.floor(Math.random() * elementos.length);

let type1 = document.getElementById("type1");
type1.textContent = `${iconos[random3]}`;

let number = document.getElementById("number");
number.textContent = `${elementos[random13]}`;

let type2 = document.getElementById("type2");
type2.textContent = `${iconos[random3]}`;

if (iconos[random3] === "♥" || iconos[random3] === "♦") {
  document.querySelector("#type1").style.color = "red";
  document.querySelector("#type2").style.color = "red";
}
