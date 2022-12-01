"use strict";
// Display Screens
let historyEl = document.getElementById("history");
let outputEl = document.getElementById("output");

// Input Fields
const buttons = document.querySelectorAll(".button");
console.log(buttons);
const clearEl = document.getElementById("clear");
const divideEl = document.getElementById("divide");
const multiplyEl = document.getElementById("multiply");
const subtractEl = document.getElementById("subtract");
const additionEl = document.getElementById("addition");
const equalEl = document.getElementById("equal");
const itemDecimalPointEl = document.getElementById("item-decimal-points");

let string = "";
let history = "";

// Array.from(buttons).forEach((button) => {
//   button.addEventListener("click", function (e) {
//     console.log(e.target.value);
//     if (e.target.value == "=") {
//       string = eval(string);
//       history = history + " = " + eval(history);
//       outputEl.textContent = string;
//       historyEl.textContent = history;
//     } else if (e.target.value == "AC") {
//       string = "";
//       history = "";
//       outputEl.textContent = string;
//       historyEl.textContent = history;
//     } else if (e.target.value == "+") {
//       string = string + e.target.value;
//       outputEl.textContent = string;
//       history = history + e.target.value;
//       historyEl.textContent = history;
//     } else {
//       string += e.target.value;
//       history += e.target.value;
//       outputEl.textContent = string;
//       historyEl.textContent = history;
//     }
//   });
// });
