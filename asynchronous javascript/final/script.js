//callback function
// function generateRandomNumber(maxNumber) {
//   console.log(Math.floor(Math.random() * maxNumber + 1));
// }

// function addNumbers(num1, num2, callback) {
//   let sum = num1 + num2;
//   return callback(sum);
// }

// addNumbers(2, 3, generateRandomNumber);

const fruits = ["mango", "pawpaw", "apple ", "grapes"];
function getFruits() {
  setTimeout(() => {
    let output = "";
    fruits.forEach((item) => {
      output += `<li>${item}</li>`;
    }, 1000);
    document.body.innerHTML = output;
  });
}

function createFruits(fruit, callback) {
  setTimeout(() => {
    fruits.push(fruit);
    callback();
  }, 2000);
}

createFruits("avocado", getFruits);
