let x = 5;
const y = 35;

const add = (a, b) => a + b;
const square = num => num * num;
const dhruvi = () => "Hello!";


const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6]; 

const obj1 = { x: 1, y: 2 };
const obj2 = { ...obj1, z: 3 }; 

const colors = ["yellow", "white", "blue"];
for (const color of colors) {
  console.log(color);
}

const myMap = new Map();
myMap.set("name", "Dhruvi Ladani");
myMap.set("age", 19);
console.log(myMap.get("name")); 

const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2); 
console.log(mySet); 


class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  dhruvi() {
    console.log(`Hello, my name is ${this.name}, and I'm ${this.age} years old.`);
  }
}

const person1 = new Person("Dhruvi", 19);
person1.dhruvi();

const fetchData = () => {
  return new Promise((resolve, reject) => {
   
    setTimeout(() => {
      const data = "Fetched data!";
      resolve(data); 
      
    }, 2000);
  });
};

fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));


const mySymbol = Symbol("my unique symbol");
console.log(mySymbol);


const dhruviPerson = (name = "Dhruviii") => {
  console.log(`Heyy, ${name}!`);
};

dhruviPerson(); 
dhruviPerson("Ansh"); 


const sumNumbers = (...numbers) => {
  return numbers.reduce((total, num) => total + num, 0);
};

console.log(sumNumbers(5, 10, 15, 20, 25)); 
