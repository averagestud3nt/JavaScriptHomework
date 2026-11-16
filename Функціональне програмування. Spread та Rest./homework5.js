// // # 1

// function UserObjectInterface()
// {
//     let userSettings = 
//     {
//         theme: undefined,
//         language: undefined
//     }
    
//     function changeObjProperty(objProperty, newValue)
//     {
//         if (userSettings.hasOwnProperty(objProperty)) 
//         {
//             if ((objProperty == "theme" || objProperty == "language") && typeof(newValue) == "number") {
//                 throw new TypeError("field 'username' is strictly a string");
//             }
//             userSettings[objProperty] = newValue;
//         }
//     }

//     function showObjProperty(objProperty)
//     {
//         if (userSettings.hasOwnProperty(objProperty)) 
//         {
//             console.log(userSettings[objProperty]);
//         }
//     }

//     function showEveryObjPropery()
//     {
//         for (userSettings in player) {
//             console.log(userSettings[item]);
//         }
//     }

//     function getObjProperty(objProperty)
//     {
//         if (userSettings.hasOwnProperty(objProperty)) 
//         {
//             return userSettings[objProperty];
//         }
//     }

//     return {changeObjProperty,showObjProperty,showEveryObjPropery,getObjProperty}
// }

// let user1 = UserObjectInterface();

// user1.changeObjProperty("theme","Dark");
// user1.changeObjProperty("language","English");

// user1.showEveryObjPropery()

// // # 2

// (function() {
//     let message = "Starting Game...";
//     console.log(message);
// })();

// // # 3

// let player = (function() 
// {
//     let gold = 4000;

//     function getGold()
//     {
//         return gold;
//     }

//     return {getGold};
// })();

// console.log(player.getGold());

// // # 4

// let player = 
// {
//     username : undefined,
//     level : undefined,
//     exp : undefined,
//     gold : undefined,
// }

// function PlayerObjectInterface()
// {
//     let player = 
//     {
//         username : undefined,
//         level : undefined,
//         exp : undefined,
//         gold : undefined,
//     }
    
//     function changeObjProperty(objProperty, newValue)
//     {
//         if (player.hasOwnProperty(objProperty)) 
//         {
//             if (objProperty == "username" && typeof(newValue) == "number") {
//                 throw new TypeError("field 'username' is strictly a string");
//             }
//             player[objProperty] = newValue;
//         }
//     }

//     function showObjProperty(objProperty)
//     {
//         if (player.hasOwnProperty(objProperty)) 
//         {
//             console.log(player[objProperty]);
//         }
//     }

//     function showEveryObjPropery()
//     {
//         for (item in player) {
//             console.log(player[item]);
//         }
//     }

//     function getObjProperty(objProperty)
//     {
//         if (player.hasOwnProperty(objProperty)) 
//         {
//             return player[objProperty];
//         }
//     }

//     return {changeObjProperty,showObjProperty,showEveryObjPropery,getObjProperty}
// }

// let user1 = PlayerObjectInterface();

// user1.changeObjProperty("username","Hello");
// user1.changeObjProperty("gold",10);
// user1.changeObjProperty("exp",10);
// user1.changeObjProperty("level",10);

// user1.showEveryObjPropery()

// // # 5

// function inventoryModule()
// {
//     let itemCount = 0;

//     function add()
//     {
//         itemCount++;
//     }

//     function subtract()
//     {
//         if (itemCount > 0) {
//             itemCount--;
//         }
//     }

//     function getItemCount()
//     {
//         return itemCount;
//     }

//     return {add, subtract, getItemCount}
// }

// let object = inventoryModule();

// object.add();
// object.add();
// object.add();
// object.add();
// console.log(object.getItemCount());

// // # 6

// function playerLevelModule()
// {
//     let currentValue = 0;

//     function add(value)
//     {
//         if (value > 0) {
//             currentValue += value;
//         }
//     }

//     function reset()
//     {
//         currentValue = 0;
//     }

//     function getCurrentValue()
//     {
//         return currentValue;
//     }

//     return {add, reset, getCurrentValue}
// }

// let object = playerLevelModule();

// object.add(1);
// object.add(2);
// object.add(3);
// object.add(4);
// console.log((object.getCurrentValue()));

// // # 7

// function countdown(value) 
// {
//     console.log(value);
//      value;
//     if (value != 0) {
//         countdown(value - 1);
//     }
// }

// countdown(4);
// countdown(10);