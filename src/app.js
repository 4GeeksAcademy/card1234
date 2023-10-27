// Import the CSS file
import "./style.css";

// Define arrays for elements and icons
let elements = ["A", "J", "Q", "K", 2, 3, 4, 5, 6, 7, 8, 9, 10];
let icons = ["♦", "♥", "♠", "♣"];

// Generate random indices for elements and icons
let random3 = Math.floor(Math.random() * icons.length);
let random13 = Math.floor(Math.random() * elements.length);

// Get elements by their IDs
let type1 = document.getElementById("type1");
let number = document.getElementById("number");
let type2 = document.getElementById("type2");

// Set the text content
type1.textContent = icons[random3];
number.textContent = elements[random13];
type2.textContent = icons[random3];

// Change the text color to red if the icon is a heart or diamond
if (icons[random3] === "♥" || icons[random3] === "♦") {
  document.querySelector("#type1").style.color = "red";
  document.querySelector("#type2").style.color = "red";
}
