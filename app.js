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

// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 5000);
// }
// console.log('Hello');

// 6. Write a JS code to find the power of a number using for loop

const numPower = function (num, pow) {
  let res = 1;
  for (let i = 0; i < pow; i++) {
    res *= num;
  }
  return res;
};
// console.log(numPower(4, 3));
// console.log(numPower(16, 2));

// 7. Write a JS code to print a pattern using for loop

const printPattern = function (range) {
  for (let i = 1; i <= range; i++) {
    let str = '';
    for (let j = 1; j <= i; j++) {
      str += j + ' ';
    }
    console.log(str);
  }
};
// printPattern(8);

// 8. Write a JS code to find the no of digits in a number
const digitCount = function (num) {
  let count = 0;
  while (num != 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
};
// console.log(digitCount(1000589));
// console.log(digitCount(155558982));

// 9. Write a JS code to calculate the sum of digits in a number
const digitSum = function (num) {
  let sum = 0;
  while (num != 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
};
/* 
console.log(digitSum(1234)); //10
console.log(digitSum(4367)); //20
console.log(digitSum(56349)); //27
 */

// 10. Write a JS code to find the largest number in an array
const arr4 = [2, 45, 3, 67, 34, 567, 34, 345, 123];

let largest = arr4[0];
for (let i = 0; i < arr4.length; i++) {
  largest = arr4[i] > largest ? arr4[i] : largest;
}
// console.log(largest);

// 11. Write a JS code to find the number of zeros in 2D Matrix
const arr5 = [
  [0, 1, 1],
  [0, 1, 0],
  [1, 0, 0],
  [1, 0, 1],
];

let zeroCount = 0;
for (let i = 0; i < arr5.length; i++) {
  for (let j = 0; j < arr5[i].length; j++) {
    zeroCount = arr5[i][j] === 0 ? zeroCount + 1 : zeroCount;
  }
}
// console.log(zeroCount);

// 12. Write a JS code to find product of two arrays
const findProd = function (arr1, arr2) {
  let arrProd = arr1.length > arr2.length ? arr1 : arr2;
  for (let i = 0; i < Math.min(arr1.length, arr2.length); i++) {
    arrProd[i] = arr1[i] * arr2[i];
  }
  return arrProd;
};
var arr6 = [3, 45, 23, 78, 34];
var arr7 = [4, 2, 34, 4, 12, 1];

// console.log(findProd(arr6, arr7));

// 3d array... Example practice

const array3D = [
  [
    [3, 45, 23, 78, 34],
    [4, 2, 34, 100, 12, 1],
    [78, 34, 12, 1],
  ],
  [
    [3, 45, 23, 78, 34],
    [4, 2, 34, 4, 12, 1],
    [78, 34, 12, 1],
  ],
  [
    [3, 45, 23, 78, 34],
    [4, 2, 34, 4, 12, 1],
    [78, 34, 12, 1],
  ],
];
// console.log(array3D[0][1][5]);

let sum = 0;

let value = 0;

for (let i = 0; i < array3D.length; i++) {
  for (let j = 0; j < array3D[i].length; j++) {
    for (let k = 0; k < array3D[i][j].length; k++) {
      sum += array3D[i][j][k];

      if (array3D[i][j][k] == 100) {
        value = array3D[i][j][k];
        break;
      }
      // sum += value;
    }
  }
}
console.log('I am the Sum:', sum);
console.log('I am the Value:', value);
