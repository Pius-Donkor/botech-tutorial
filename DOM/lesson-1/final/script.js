// how to select an element
const [firstBox] = document.getElementsByClassName("box-1");
const secondBox = document.querySelector(".box-2");
const thirdBox = document.getElementById("box-3");
const allBoxes = document.querySelectorAll(".box");
const container = document.querySelector(".box-container");
console.log(allBoxes);
// console.log(firstBox)
console.log(secondBox);
// console.log(thirdBox)

// console.log(firstBox[0])

//2 How to change the content of HTML elements
firstBox.textContent = "happy";
firstBox.style.backgroundColor = "grey";
firstBox.style.color = "brown";

console.log(secondBox);
// firstBox.style.width ='30%'

// responding to events
const diffColor = function () {
  return Math.floor(Math.random() * 255 + 1);
};

// allBoxes.forEach((box) =>
//   box.addEventListener("click", function (e) {
//     e.target.style.backgroundColor = `rgb(${diffColor()}, ${diffColor()},${diffColor()} )`;
//   })
// );
container.addEventListener("click", (e) => {
  console.log(e.target);
  if (!e.target.classList.contains("box")) return;
  e.target.style.backgroundColor = `rgb(${diffColor()}, ${diffColor()},${diffColor()} )`;
});
