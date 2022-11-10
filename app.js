// 1. Write a JS code to print numbers from 1 to 10
const printNumber = function () {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
};
// printNumber();

// 2. Write a JS code to print a 2D array
const printArray = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      //   console.log(arr[0].length);
      console.log(arr[i][j]);
    }
  }
};
let arr = [
  [11, 22],
  [33, 44],
  [55, 66],
];
// printArray(arr);

// 3. Write a JS code to print Even numbers in given array
const printEven = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      console.log(arr[i]);
    }
  }
};
let arr2 = [13, 23, 12, 45, 22, 48, 66, 100];

printEven(arr2);
