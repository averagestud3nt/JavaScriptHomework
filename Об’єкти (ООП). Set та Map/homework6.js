// // # 1

// let player =
// {
//     username: "Player",
//     level: 1,
//     health: 100,
//     mana: 100,
//     characteristics: ["Strong","Quick-foot"],
//     inventory: [{name: "sword", damage: 10}],
//     activeEffects: [],
//     recieveDamage: function(value)
//     {
//         if (value > this.health || this.health == 0) {
//             this.health = 0
//         }
//         else
//         {
//             this.health -= value;
//         }
//     },
//     recieveHeal: function(value)
//     {
//         if ((this.health + value) > 100) {
//             this.health = 100
//         }
//         else
//         {
//             this.health += value;
//         }
//     },
//     levelUp: function()
//     {
//         this.level++;
//     },
//     addItem (object)
//     {
//         this.inventory.push(object);
//     }
// }

// let player1 = {...player}

// player1.name = "player1"
// player1.addItem({name: "bow", damage: 5})

// // # 2

// let settings = {};
// let settingsNames = [["theme","light"],["volume",0],["brightness",0]];

// settings = Object.fromEntries(settingsNames);

// function changeSetting(settingName, value)
// {
//     settings[settingName] = value;
// }

// function deleteSetting(settingName)
// {
//     delete settings[settingName];
// }

// function retriveSettingValue(settingName)
// {
//     for (const key of Object.keys(settings)) {
//         if (key == settingName) {
//             return settings[key];
//         }
//     }
// }

// console.log(settings);

// console.log(retriveSettingValue("theme"));

// // # 3

// let user =
// {
//     username: "user1234",
//     password: "password1234",
//     settings:
//     {
//         theme: "light"
//     },
//     adress: "somewtown",
//     friends: ["alex","micheal"],
//     actionHistory: ["sign up","enter chat room","exit chat room"],
// }

// let user1 = {...user};

// user1.username = "user2345";
// user1.password = "password4321"
// user1.settings = {theme: "dark"}

// console.log(user);
// console.log(user1);

// // # 4

// let store =
// {
//     products:
//     [
//         {name: "milk", price: 100, category: "food", amount: 10, changeAmount: function(value){value >= 0 ? this.amount = value : false}},
//         {name: "cereal", price: 125, category: "food", amount: 14, changeAmount: function(value){value >= 0 ? this.amount = value : false}},
//         {name: "lamp", price: 400, category: "furniture", amount: 4, changeAmount: function(value){value >= 0 ? this.amount = value : false}},
//         {name: "couch", price: 1000, category: "furniture", amount: 10, changeAmount: function(value){value >= 0 ? this.amount = value : false}}
//     ],
// };

// function findProduct(ProductName)
// {
//     for (const item of store.products) {
//         if (typeof(item) != "undefined" && item.name == ProductName) {
//             return item
//         }
//     }
// }

// function deleteProduct(ProductName)
// {
//     for (const item of store.products) {
//         if (item.name == ProductName) {
//             delete store.products[store.products.findIndex(e=>e.name == ProductName)];
//         }
//     }
// }

// function changeProductPrice(ProductName, value)
// {
//     store.products[store.products.findIndex(e=>e.name == ProductName)].price = value;
// }

// function calculateTheCostOfAllProducts()
// {
//     let totalSum = 0;
//     for (const item of store.products) {
//         totalSum += item.price * item.amount;
//     }
//     return totalSum;
// }

// console.log(store);
// console.log(deleteProduct("couch"));
// console.log(findProduct("couch"));
// console.log(calculateTheCostOfAllProducts());

// // # 5


// let Character = 
// {
//     name: undefined,
//     health: undefined,
//     attacks: {
//        "basic ability": undefined
//     }
// }

// // let Warrior = {...Character,attacks:{...Character.attacks}};
// let Warrior = {};
// Object.assign(Warrior,{...Character,attacks:{...Character.attacks}},{name: "Warrior", health: 200})
// Warrior.attacks["basic ability"] = function() {console.log("Warrior attacks")};
// Warrior.attacks["buff ability"] = function() {console.log("Warrior rages")};

// let Mage = {};
// Object.assign(Mage,{...Character,attacks:{...Character.attacks}},{name: "Mage", health: 90})
// Mage.attacks["basic ability"] = function() {console.log("Mage attacks")};
// Mage.attacks["heal ability"] = function() {console.log("Mage heals")};

// let Archer = {}
// Object.assign(Archer,{...Character,attacks:{...Character.attacks}},{name: "Archer", health: 130})
// Archer.attacks["basic ability"] = function() {console.log("Archer attacks")};
// Archer.attacks["buff ability"] = function() {console.log("Archer focuses")};

// console.log(Warrior.name);
// console.log(Warrior.health);
// for (const ability in Warrior.attacks) {
//     Warrior.attacks[ability]();
// }

// console.log(Mage.name);
// console.log(Mage.health);
// for (const ability in Mage.attacks) {
//     Mage.attacks[ability]();
// }

// console.log(Archer.name);
// console.log(Archer.health);
// for (const ability in Archer.attacks) {
//     Archer.attacks[ability]();
// }