const fruits = ["apple", "pineapple", "orange", "grape", "tomato"];

// function getFruits() {
//   setTimeout(() => {
//     fruits.forEach((fruit) => {
//       console.log(fruit);
//       document.querySelector("body").innerHTML += `<li>${fruit}</li>`;
//     });
//   }, 1000);
// }

// function createFruit(callback) {
//   setTimeout(function (){
//     fruits.push("avocado");
//     callback();
// }, 2000);
// }

// createFruit(getFruits);

// promises
// function getFruits() {
//   setTimeout(() => {
//     fruits.forEach((fruit) => {
//       console.log(fruit);
//       document.querySelector("body").innerHTML += `<li>${fruit}</li>`;
//     });
//   }, 1000);
// }

// function createFruit(callback) {
//   return new Promise((resolve, reject) => {
//     fruits.push("avocado");
//     let error = true;
//     if (!error) {
//       resolve();
//     } else {
//       reject("something wrong happened");
//     }
//   });
// }

// createFruit()
//   .then(getFruits)
//   .catch((err) => console.log(err));

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((data) => {
//     if (!data.ok) throw new Error("something went wrong");
//     return data.json();
//   })
//   .then((actualData) => console.log(actualData))
//   .catch((error) => {
//     console.log(error);
//   });

// Async/ Await

async function fetchData() {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(data);
    if (!data.ok) throw new Error("something went wrong");
    const actualData = await data.json();
    console.log(actualData);
  } catch (error) {
    console.log(error);
  }
}

fetchData();
