// let userLevel = prompt("Enter your user's level");

// switch (userLevel) {
//     case "Admin":
//     case "Golden":
//         console.log("User level has all the rights");
//         break;
//     case "Regular":
//         console.log("The user is regular");
//         break;
//     default:
//         console.log("The user is nothning");
// }

// ///Crazy option
// switch (true) {
//     case userLevel === "Admin":
//     case userLevel === "Golden":
//         console.log("User level has all the rights");
//         break;
//     case userLevel === "Regular":
//         console.log("The user is regular");
//         break;
//     default:
//         console.log("The user is nothning");
// }

// let value1 = prompt("Please, enter value 1");
// let value2 = prompt("Enter value 2");
// let operation = prompt("Enter operation: +,-,* or / ");

// const notNumbers = isNaN(value1) || isNaN(value2);
// let result;

// switch (operation) {
//     case "+":
//         result = notNumbers ? (value1 + value2) : (Number(value1) + Number(value2));
//         break;
//     case "-":
//         if (notNumbers)
//             alert("Subtraction can only be applied to the numbers");
//         else
//             result = Number(value1) - Number(value2);
//         break;
//     case "*":
//         if (notNumbers)
//             alert("Multiplication can only be applied to the numbers");
//         else
//             result = Number(value1) * Number(value2);
//         break;
//     case "/":
//         if (notNumbers)
//             alert("Division can only be applied to the numbers");
//         else
//             result = Number(value1) / Number(value2);
//         break;
//     default:
//         alert("Operation is not correct");
// }
// if (result != undefined)
//     alert("Result is " + result);

// let sum = 0;
// for (let i = 0; i < 300; i++) {
//     sum += i;
// }

// alert("The sum is " + sum);

// let sum = 0;
// // for (let i = 1; i <= 10; i++) {
// //     if (i == 7)
// //         continue;
// //     sum += i;
// // }
// let i = 0;
// while (++i != 10)
//     sum += i;

// alert("Result is " + sum);

// do {
//     alert(sum);
//     sum++;
// }
// while (sum < 50);

// const arr = [434, 5454, 432432, 532523, 5254];
// arr[2] = 85698;
// arr[5] = 874343;
// arr[7] = 11111;
// for (let i = 0; i < arr.length; i++)
//     alert(arr[i]);

// arr = [343, 34324]; ///not possible, because arr is defined as constant

const myArr = [];
myArr["element1"] = 12121;
myArr["element2"] = 3242;
myArr["element3"] = 84343;