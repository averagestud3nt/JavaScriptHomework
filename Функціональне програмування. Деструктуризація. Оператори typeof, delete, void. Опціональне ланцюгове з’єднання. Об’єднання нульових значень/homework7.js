// let product =
// {
//     name: undefined,
//     category: undefined,
//     price: undefined,
//     amount: undefined,
//     rating: undefined
// }

// let internetShop = [];

// internetShop.push(Object.assign({},{...product},
//     {name: "Lamp", category: "furniture",price: 100, amount: 10, rating: 100}));
// internetShop.push(Object.assign({},{...product},
//     {name: "Milk", category: "Milk-based food",price: 10, amount: 44, rating: 59}));
// internetShop.push(Object.assign({},{...product},
//     {name: "Couch", category: "furniture",price: 1000, amount: 14, rating: 29}));
// internetShop.push(Object.assign({},{...product},
//     {name: "Cereal", category: "food",price: 15, amount: 71, rating: 51}));

// let filteredArray = internetShop.map((value) => value.name);
// console.log(filteredArray);
// let filteredArray2 = internetShop.filter((value) => value.category == "furniture");
// console.log(filteredArray2);
// let filteredArray3 = internetShop.sort((value1, value2) => (value1.price - value2.price) * -1);
// console.log(filteredArray3);
// let value = internetShop.reduce((sumValue,value)=> sumValue += (value.price * value.amount),0);
// console.log(value);
// let filteredArray4 = internetShop.map((value) => Object.assign({},{...value},{price: value.price * 0.9}));
// console.log(filteredArray4);
// let value2 = internetShop.filter(value => value.rating == (internetShop.reduce((biggestRating,value) => biggestRating < value.rating ? value.rating : biggestRating,0)))
// console.log(value2);
// console.log(internetShop);
