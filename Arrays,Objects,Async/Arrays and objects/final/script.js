//array
// const fruits = ["orange", "apple", "pineapple", "mango"];
// console.log(fruits.length);
// const orange = fruits[1];
// console.log(fruits[2]);

//adding elements to an array
//fruits[4] = "avocado";
//console.log(fruits);

//fruits.push("avocado");
//console.log(fruits);

//unshift method
//fruits.unshift("tangerine");
//console.log(fruits);

// deleting elements from an array

//pop
//console.log(fruits.pop());
//console.log(fruits);

//shift
//console.log(fruits.shift());

//iteration methods
//fruits.forEach(function(value,index,array){
//   console.log(value,index,array);
//})

//map method
// const newFruits = fruits.map((value) => {
//   return value + " sweet";
// });

// console.log(newFruits);

// filter method
// const filteredFruits = fruits.filter((value) => value !== "apple");
// console.log(filteredFruits);

//reduce method
// const numbers = [1, 2, 3, 4, 5];
// const addNum = numbers.reduce((acc, value) => {
//   return acc + value;
// }, 0);
// console.log(addNum);

//objects
const person = {
  name: "pius",
  address: "P.O.BOX 322",
  country: "Ghana",
};

console.log(person);

//accessing properties of an object

const name = person.name;
console.log(name);
console.log(person.address);
const country = person["country"];
console.log(country);

//adding to an object
person.height = "tall";
person["complexion"] = "fair";
person.name = "Donkor";
console.log(person);
