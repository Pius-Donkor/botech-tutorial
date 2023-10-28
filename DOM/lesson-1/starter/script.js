//accessing page element
const box_1 = document.getElementById("box-1");
console.log(box_1);
const box_2 = document.getElementsByClassName("box-2");
console.log(box_2);
const box_3 = document.querySelector("#box-3");
console.log(box_3);
const allBoxes = document.querySelectorAll(".box");
console.log(allBoxes);

//manipulating dom elements
// box_1.style.backgroundColor='blue'
// box_1.style.width='100px'
// allBoxes.forEach((box)=>box.style.color='black')

//manipulate elements based on events

function generateRandomColor() {
  function randomNumber() {
    return Math.floor(Math.random() * 255 + 1);
  }

  return `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
}

// box_1.addEventListener('click',function(){
//     box_1.style.backgroundColor=generateRandomColor()
// })

allBoxes.forEach((box) => {
  box.addEventListener("click", function () {
    box.style.backgroundColor = generateRandomColor();
  });
});
