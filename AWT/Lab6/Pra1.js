function addNum(num1, num2){
    return num1 + num2;
}

function main(){

    const name = "Dhruvi Ladani";
    const age = 19;
    const isStudent = true;

    console.log ("Name: " , name);
    console.log ("Age: ", age);
    console.log ("IsStudent: ", isStudent);

    const num1 = 10;
    const num2 = 20;
    const result = addNum(num1, num2);
    console.log(`Sum of ${num1} and ${num2} is: `, result);
}

main();
