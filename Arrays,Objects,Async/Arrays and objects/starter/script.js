//arrays and objects
const cars = ["corolla", "bmw", "taxi", "bugatti"];
//console.log(cars);
//console.log(cars[2]);

//length of an array
//console.log(cars.length);
//console.log(cars[0]);

//for (let i = 0; i < cars.length; i++) {
//  console.log(cars[i]);
//}

//array methods
//push method
//cars.push("lamborgini");
//cars.push("kia");
//cars.push("benz");

//unshift method

cars.unshift("hammer");
cars.unshift("toyota");

//pop method
//console.log(cars);
//cars.pop();
//console.log(cars);

//shift method
//console.log(cars.shift());
//console.log(cars);

const laterCars = ["lamborgini", "kia", "benz"];
//console.log(laterCars[0]);

for (let i = 0; i < laterCars.length; i++) {
  cars.push(laterCars[i]);
}
console.log(cars);

//splice method
//cars.splice(2, 3, "nissan", "honda");
//cars.splice(2, 4);
//console.log(cars);

//slice method
//const newCars = cars.slice(2, cars.length - 1);
const newCars = cars.slice();
console.log(newCars);

// forEach method
newCars.forEach((values) => console.log(values + " hello"));

// map method
const mapCars = newCars.map((value, index, arraySelf) => value + " new");
console.log(mapCars);

//objects
const person = {
  name: "Donkor Pius",
  address: "london",
  height: "tall",
};

console.log(person);
//console.log(person.name);
//console.log(person.address);
//console.log(person.height);

//console.log(person["name"]);
//console.log(person["address"]);
//console.log(person["height"]);

person.location = "sunyani";
person["gender"] = "male";
console.log(person);
