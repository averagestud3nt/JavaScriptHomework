// // # 1

// let numberArray = [1,2,3,4,5];

// let reversedNumberArray = numberArray.reverse();

// for (item of reversedNumberArray)
// {
//     console.log(item);
// }

// // # 2

// let numberArray = [1,null,3,null,5];

// let newNumberArray = numberArray.filter(item => item != null);

// console.log(newNumberArray);

// // # 3

// let numberArray1 = [1,2,3,4,5];
// let numberArray2 = [6,7,8,9,10];

// let newNumberArray = numberArray1.concat(numberArray2);

// console.log(newNumberArray);

// // # 4

// let numberArray = [1,4,3,4,5];
// let setNumber = 4;

// let count = numberArray.reduce((count, currentValue) => currentValue == setNumber ? count + 1 : count, 0);

// console.log(count);

// // # 5

// // let numberArray = [1,2,3,4,5];
// let numberArray = [1,4,3,4,5];

// let isSorted = numberArray.toSorted().every((value,index) => value == numberArray[index])

// console.log(isSorted);

// // # 6

// let numberArray = [1,4,3,4,5,1];

// let value = numberArray.slice(0).reduce((array, value, i, arr) => array.some(element => element == value) ? (arr.splice(0),value) : (array.push(value), array),[]);

// console.log(numberArray);
// console.log(value);

// // # 7

// let numberArray = [1,2,3,4,5];

// let tempNumber = numberArray[numberArray.length - 1];
// numberArray[numberArray.length - 1] = numberArray[0];
// numberArray[0] = tempNumber;

// console.log(numberArray);

// // # 8

// let numberArray = [1,4,3,4,5,2,5,7,3,4,1,3,4,6,1];

// let newNumberArray = numberArray.reduce((array, value) => array.some(element => element == value) ? array : (array.push(value), array),[]);

// console.log(newNumberArray);

// // # 9

// let sentenceArray = ["hello","hi","brrr","mmmmmmmm"];

// let longest = sentenceArray.reduce((maxValue, currentValue,) => maxValue.length < currentValue.length ? currentValue : maxValue, sentenceArray[0]);
// console.log(longest);

// // # 10

// let numberArray = [5,3,4,2,1];


// for (let i = 0; i < numberArray.length; i++) {
//     let swapped = false;
//     for (let j = 0; j < numberArray.length - 1; j++) {
//         let temp;
//         if (numberArray[j] > numberArray[j + 1])
//         {
//             temp = numberArray[j]; 
//             numberArray[j] = numberArray[j + 1];
//             numberArray[j + 1] = temp;
//             swapped = true;
//         }
//     }
//     if (!swapped) break;
// }

// console.log(numberArray);
