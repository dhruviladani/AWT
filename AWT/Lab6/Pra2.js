let numbersArray = [1, "Dhruvi", 3, id=4, 5];

console.log("Length:", numbersArray.length);

console.log("Element at index 1:", numbersArray[1]);
console.log("Element at index 4:", numbersArray[4]);

numbersArray.push(6); 
console.log("after push:", numbersArray);

numbersArray.pop(); 
console.log("after pop:", numbersArray);

numbersArray.shift(); 
console.log("after shift:", numbersArray);

numbersArray.unshift(0); 
console.log("after unshift:", numbersArray);

let joinedArray = numbersArray.join(", "); 
console.log("Joined array:", joinedArray);

delete numbersArray[2]; 
console.log("after delete:", numbersArray);

let concatenatedArray = numbersArray.concat([6, 7, 8]); 
console.log("Concatenated array:", concatenatedArray);

let flattenedArray = [[1, "Dhruvi"], [3, 4], [5, 6]].flat(); 
console.log("Flattened array:", flattenedArray);

let splicedArray = numbersArray.splice(1, "Dhruvi", 10, 11); 
console.log("after splice:", numbersArray);

let slicedArray = numbersArray.slice(1, 4); 
console.log("Sliced array:", slicedArray);


let person = {
  name: "Dhruvi Ladani",
  age: 19,
  gender: "Female",
};


function displayPersonDetails(personObj) {
  console.log("Name:", personObj.name);
  console.log("Age:", personObj.age);
  console.log("Gender:", personObj.gender);
}

displayPersonDetails(person);
