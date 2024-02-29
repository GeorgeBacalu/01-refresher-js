import { apiKey, secretKey } from "./data.js";

function displayKeys(apiKey, secretKey = "Invalid") {
  console.log(`API Key: ${apiKey}, Secret Key: ${secretKey}`);
}
displayKeys(apiKey);
displayKeys(apiKey, secretKey);

function storeOrder({id, amount, currency}) {
  console.log(`Order ID: ${id}, Amount: ${amount}, Currency: ${currency}`);
}
storeOrder({id: 1, amount: "15.99", currency: "USD"});

const user = {
  name: "George",
  age: 23,
  greet() { 
    console.log(`My name is ${this.name} and I am ${this.age} years old!`);
  }
}
user.greet();

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() { 
    console.log(`My name is ${this.name} and I am ${this.age} years old!`);
  }
}
const newUser = new User("George", 23);
newUser.greet();

const extendedUser = { ...user, isAdmin: true };
console.log(extendedUser);

const hobbies1 = ["sports", "cooking", "reading"];
const hobbies2 = ["traveling", "painting", "photography"];
const hobbies = [...hobbies1, ...hobbies2];
console.log(`Hobbies: ${hobbies}`);
console.log(`Upper hobbies: ${hobbies.map(item => item.toUpperCase())}`);
console.log(`Reading index: ${hobbies.findIndex(item => item === "reading")}`);