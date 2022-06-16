'use strict'

// //1
//
// const arr = ['a','b','c','d'];
// const arr2 = arr.splice(0,2);
// const jn = arr.join('+');
// const jn2 = arr2.join('+');
//
//
// console.log(arr);
// console.log(arr2);
// console.log(jn,jn2);

// //2
//
// const arr = [2,5,3,9];
//
// let mul1 = arr[0]*arr[1];
// let mul2 = arr[2]*arr[3];
// let result = mul1 + mul2;
// console.log(result);

// //3
//
// const arr = [[1,2,3],[4,5,6],[7,8,9]];
// const flt = arr.flat();
//
// console.log(flt[3]);
//

// //4
//
// const obj = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'};
// console.log(obj.js.shift());


// // 5
//
// const arr = [];
//
// let x = 'x';
// for (let i = 0; i < 5; i++) {
//     arr.push(x);
//     x += 'x';
// }
// console.log(arr);

// //6
//
// const arr = [];
//
// let str = '';
// for (let i = 1; i < 5; i++) {
//     str = '';
//     for ( let j = 0; j < i; j++) {
//         str += i;
//     }
//     arr.push(str);
// }
// console.log(arr);

// // 7
//
//
// function arrayFill(val,len) {
//     const arr = new Array(len).fill(val);
//     console.log(arr);
// }
// arrayFill('x',5);

// // 8
//
// const arr = [4,5,7,10,2,8];
// let sum = 0;
// let newArr = [];
//
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     newArr.push(arr[i]);
//
//     if (sum > 10) {
//         break;
//     }
// }

// // 9
//
// const arr = [1,2,3,4,5];
//
// for (let i = 0; i < arr.length / 2; i++) {
//     let t = arr[i];
//     arr[i] = arr[arr.length - i - 1];
//     arr[arr.length - i - 1] = t;
// }
// console.log(arr);

// // 10
//
// const arr = [[1,2,3],[4,5],[6]];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         sum += arr[i][j];
//     }
// }
// console.log(sum);

// // 11
//
// const arr = [[[1,2],[3,4]],[[5,6],[7,8]]];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         for (let k = 0; k < arr[i][j].length; k++) {
//             sum += arr[i][j][k];
//         }
//     }
// }
// console.log(sum);