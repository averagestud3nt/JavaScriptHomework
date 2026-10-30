// // # 1

// let person = {name: "Mike", age: 18, isStudent: true};

// console.log(`${person.name},${person.age},${person.isStudent}`);

// // # 2

// let randomNumber = Math.random() * (99) + 1;

// console.log(Math.floor(randomNumber));
// console.log(Math.ceil(randomNumber));

// // # 3

// let numberString = "42.7";

// console.log(parseInt(numberString));
// console.log(parseFloat(numberString));

// // # 4

// let value = "abc";

// value = Number(value);

// console.log(isNaN(value));

// // # 5

// let passwordLength = 8;

// let characterArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0"];

// let newPassword = "";

// for (let index = 0; index < passwordLength; index++) {
//     let chosenElemnt = characterArray[parseInt(Math.random() * characterArray.length)]; 
//     if (isNaN(Number(chosenElemnt)) && (Math.random() < 0.5))
//     {
//         newPassword += chosenElemnt.toUpperCase();
//     }
//     else
//     {
//         newPassword += chosenElemnt;
//     }
// }

// console.log(newPassword);

// // # 6

// let date = new Date();

// date.getDate

// console.log(`"Hello! Today is ${date.toDateString()} and now it is ${date.toTimeString()}"`)

// // # 7

// let CelciusValue = prompt();

// let FarenheightValue = CelciusValue * 9/5 + 32;

// console.log(FarenheightValue);
