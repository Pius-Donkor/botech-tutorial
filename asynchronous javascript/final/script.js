//callback function
function generateRandomNumber(maxNumber) {
  console.log(Math.floor(Math.random() * maxNumber + 1));
}

function addNumbers(num1, num2, callback) {
  let sum = num1 + num2;
  return callback(sum);
}

addNumbers(2, 3, generateRandomNumber);
