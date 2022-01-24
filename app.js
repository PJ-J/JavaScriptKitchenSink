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

let pet = { name: "Henry", breed: "Bengal Mix" };
console.log(pet);
