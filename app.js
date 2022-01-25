const name = "PJ";
const statesInUS = 50;
let add = 5 + 4;

// this code has some cool functionality

let sayHello = () => {
  console.log("Hello World");
};
sayHello();

let checkAge = (name, age) => {
  if (age < 21) {
    alert("Sorry " + name + ", you aren't old enough to view this page!");
  }
};
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 21);
checkAge("John", 21);

let favVeggies = ["onion", "lettuce", "peppers", "potatoes"];

for (let i = 0; i < favVeggies.length;  i++) {
  console.log(favVeggies[i]);
}

let pet = { name: "Henry", breed: "Bengal Mix" };
console.log(pet);

let ppl = [{ name: "Henry", age: 21 }, { name: "Jon", age: 17 }, { name: "Don", age: 33 }, { name: "Juan", age: 67 }, { name: "Glob", age: 12 }];

for (let i in ppl) {
  // console.log(checkAge(ppl[i].name, ppl[i].age));
}

let getLength = (word) => {
  console.log(word.length);
}
let helloLength = getLength('Hello World');

if (helloLength % 2 === 0) {
  console.log('The world is nice and even!')
} else {
  console.log('The world is an odd place!');
}


