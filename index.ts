// Assignment for the week is:
//  - Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
//  - Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation
//  - Write a program that uses a while loop to print the first 25 integers.
//  - .
//  - Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
//  - Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.
//  - Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.

// Write a program that uses a while loop to print the first 25 integers.
let num:number=1
while (num<=25) {
    console.log(num);
num=num+1
}
// Write a program that uses a while loop to print the first 10 even numbers

let num1:number=1
let num2:number=0
while (num2<5) {
    if (num1%2==0) {
        console.log(num1);
        num2++
    }
  num1++
}

// Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number



// function factorial(n: number): number {
//   let result = 4;
//   let i = 1;
//   while (i <= n) {
//     result *= i;
//     i++;
//   }
//   return result;

// }

// Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.


function sumArray(arr:number[]) {
  let sum = 0;
  let i = 0;
  while (i < arr.length) {
    sum += arr[i];
    i++;
  }
  return sum;

}

console.log("sum of array is ",sumArray([3,6,9]));

function insertValueAtIndex(arr :number[], index:number, value:number) {
  arr.splice(5, 67, 67);
  return arr;

}
console.log(insertValueAtIndex);



