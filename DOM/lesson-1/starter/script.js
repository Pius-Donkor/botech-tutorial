// accessing dom elements
const box_1 = document.getElementById("box-1");
const box_2 = document.querySelector(".box-2");
const box_3 = document.querySelector(".box-3");
const allBoxes = document.getElementsByClassName("box");
const allBoxes2 = document.querySelectorAll(".box");
const container = document.querySelector(".box-container");
console.log(allBoxes);
//manipulating dom elements
//box_1.style.backgroundColor = "blue";
//box_1.style.height = "100px";
//box_1.style.opacity = 0.5;

for (let i = 0; i < allBoxes2.length; i++) {
  allBoxes2[i].style.backgroundColor = "blue";
}

//allBoxes2.forEach(function (box) {
// return (box.style.backgroundColor = "green");
//});

//box_2.innerHTML = "how are you";
//box_3.textContent = "happy";

//events

function generateRandomNumber() {
  let number = Math.floor(Math.random() * 255 + 1);
  return number;
}

//allBoxes2.forEach(function (box) {
// box.addEventListener("click", function (event) {
//  event.target.style.backgroundColor = `rgb(${generateRandomNumber()}, ${generateRandomNumber()}, ${generateRandomNumber()})`;
// });
//});

container.addEventListener("click", function (event) {
  if (!event.target.classList.contains("box")) return;
  event.target.style.backgroundColor = `rgb(${generateRandomNumber()}, ${generateRandomNumber()}, ${generateRandomNumber()})`;
});

//box_1.addEventListener("click", function (event) {
//event.target.style.backgroundColor = `rgb(${generateRandomNumber()}, ${generateRandomNumber()}, ${generateRandomNumber()})`;
//});
//const num1 = 2;
//const num2 = 3;
//const sum = num1 + num2;
//console.log(num1 + "+" + num2 + "=" + sum);
//console.log(`${num1} +  ${num2} = ${sum}`);
