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
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
    }
  }
};
let arr1 = [
  [11, 22],
  [33, 44],
  [55, 66],
];
// printArray(arr1);

// 3. Write a JS code to print Even numbers in given array
const printEven = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      console.log(arr[i]);
    }
  }
};
let arr2 = [13, 23, 12, 45, 22, 48, 66, 100];

// printEven(arr2);

// 4. Write a JS code to delete all occurrence of element in given array
let arr3 = [23, 56, 4, 78, 5, 63, 45, 210, 56];

const deleteElement = function (arr, ele) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ele) arr.splice(i, 1);
  }
  return arr;
};
arr3 = deleteElement(arr3, 56);
// console.log(arr3);

// const newArray = arr3.filter((item) => item !== 56);
// console.log(newArray);
// console.log(arr3);

// 5. Write a JS code to demonstrate Async loop

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 5000);
}
console.log('Hello');
