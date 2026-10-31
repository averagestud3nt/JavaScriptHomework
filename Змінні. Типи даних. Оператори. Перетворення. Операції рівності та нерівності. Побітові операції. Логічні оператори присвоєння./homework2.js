// // # 1

// let product = {name: null,price: null,amount: null,discount: null};

// product.name = prompt("Product name:");

// while (product.price <= 0)
//     product.price = Number(prompt("Product price:"));

// while (product.amount < 0 || product.amount == null)
//     product.amount = Number(prompt("Product amount:"))

// while ((0 > product.discount && product.discount > 100) || product.discount == null)
//     product.discount = parseInt(prompt("Product discount:")) 

// let calculatedNumber = (product.price - (product.price * (product.discount / 100))) * product.amount;

// if (calculatedNumber > 2000)
//     calculatedNumber = calculatedNumber - (calculatedNumber * 0.05)

// console.log(`receipt:
//     ${product.name}
//     Amount: ${product.amount}
//     Price per item: ${product.price.toLocaleString("en-US",{style:"currency", currency:"USD"})}
//     Active discounts: ${product.discount}
//     Total: ${calculatedNumber.toLocaleString("en-US",{style:"currency", currency:"USD"})}`);

// // # 2

// let user = {name : undefined,birthday: new Date,currentMood: undefined};

// user.name = prompt("Enter your name");
// user.birthday = new Date(prompt("Enter your birthday (yyyy-mm-dd)") + "T00:00:00Z");
// user.currentMood = prompt("Enter your current Mood (sad, happy, neutral)");

// let chosenZodiacSign;

// if((user.birthday.getMonth() == 0 && user.birthday.getDate() >= 20) || (user.birthday.getMonth() == 1 && user.birthday.getDate() <= 18))
//     chosenZodiacSign = "Aquarius";
// else if ((user.birthday.getMonth() == 1 && user.birthday.getDate() >= 19) || (user.birthday.getMonth() == 2 && user.birthday.getDate() <= 20))
//     chosenZodiacSign = "Pisces";
// else if ((user.birthday.getMonth() == 2 && user.birthday.getDate() >= 21) || (user.birthday.getMonth() == 3 && user.birthday.getDate() <= 19))
//     chosenZodiacSign = "Aries";
// else if ((user.birthday.getMonth() == 3 && user.birthday.getDate() >= 20) || (user.birthday.getMonth() == 4 && user.birthday.getDate() <= 20))
//     chosenZodiacSign = "Taurus";
// else if ((user.birthday.getMonth() == 4 && user.birthday.getDate() >= 21) || (user.birthday.getMonth() == 5 && user.birthday.getDate() <= 20))
//     chosenZodiacSign = "Gemini";
// else if ((user.birthday.getMonth() == 5 && user.birthday.getDate() >= 21) || (user.birthday.getMonth() == 6 && user.birthday.getDate() <= 22))
//     chosenZodiacSign = "Cancer";
// else if ((user.birthday.getMonth() == 6 && user.birthday.getDate() >= 23) || (user.birthday.getMonth() == 7 && user.birthday.getDate() <= 22))
//     chosenZodiacSign = "Leo";
// else if ((user.birthday.getMonth() == 7 && user.birthday.getDate() >= 23) || (user.birthday.getMonth() == 8 && user.birthday.getDate() <= 22))
//     chosenZodiacSign = "Virgo";
// else if ((user.birthday.getMonth() == 8 && user.birthday.getDate() >= 23) || (user.birthday.getMonth() == 9 && user.birthday.getDate() <= 22))
//     chosenZodiacSign = "Libra";
// else if ((user.birthday.getMonth() == 9 && user.birthday.getDate() >= 23) || (user.birthday.getMonth() == 10 && user.birthday.getDate() <= 21))
//     chosenZodiacSign = "Scorpio";
// else if ((user.birthday.getMonth() == 10 && user.birthday.getDate() >= 22) || (user.birthday.getMonth() == 11 && user.birthday.getDate() <= 21))
//     chosenZodiacSign = "Sagittarius";
// else if ((user.birthday.getMonth() == 11 && user.birthday.getDate() >= 22) || (user.birthday.getMonth() == 0 && user.birthday.getDate() <= 19))
//     chosenZodiacSign = "Capricorn";

// let luckyness =  parseInt(Math.random() * 100 + 1);

// if (String(user.currentMood).toLowerCase() == "sad")
//     luckyness -= 25;

// else if (String(user.currentMood).toLowerCase() == "happy")
//     luckyness += 25;

// if (luckyness < 25)
// {
//     console.log(`${user.name}, as a ${chosenZodiacSign}, you should avoid anything risky and take good care of youself for today!`);
// }
// else if (25 <= luckyness && luckyness <= 75)
// {
//     console.log(`${user.name}, as a ${chosenZodiacSign}, its gonna be just as any other day- Take a full advantage of that!`);
// }
// else if (luckyness > 75)
// {
//     console.log(`${user.name}, as a ${chosenZodiacSign}, you're on gonna feel like you're on top of the world! Quick- Before it runs out!`);
// }

// // # 3

// let text = prompt("Enter any sentence");
// let symbols = text.length;
// let symbolsWihoutSpace = text.replaceAll(" ","").length;
// let firstSymbol = text[0];
// let lastSymbol = text[text.length - 1];
// let lengthOfLongestWord = text.replaceAll(["!","?",".",","],"").split(" ").sort((a,b) => b.length - a.length)[0].length;
// let spaceToTextDistribution = (symbolsWihoutSpace / symbols) * 100

// let overallScore = 100;

// if(firstSymbol.toUpperCase() != firstSymbol)
//     overallScore -= 25;
// if(lastSymbol != ".")
//     overallScore -= 35;
// if(spaceToTextDistribution < 65)
//     overallScore -= 25
// if(lengthOfLongestWord > 2 && lengthOfLongestWord < 30)
//     console.log("logged 4");
//     overallScore += 10;

// if(overallScore < 50)
//     console.log("Needs to be worked on");
// else if(overallScore >= 50 && overallScore <= 75)
//     console.log("Good");
// else if(overallScore > 75)
//     console.log("Excellent");

// // # 4

// let account = {owner: new String,balance: new Number,currency: new String};

// account.owner = prompt("Enter name");
// account.balance = Number(prompt("Enter balance"));
// account.currency = prompt("Enter currency");

// let amount;

// let gate = true;

// do
// {
//     switch (prompt("top up,take out,view,exit").toLowerCase())
//     {
//         case "top up":
//             amount = parseInt(prompt("Amount"));
//             if (confirm("Confirm?"))
//             {
//                 console.log(`starting balance: ${account.balance.toLocaleString("en-US",{style:"currency", currency:account.currency})}
//                     transaction amount: ${amount.toLocaleString("en-US",{style:"currency", currency:account.currency})}
//                     new balance ${(account.balance += Math.abs(amount)).toLocaleString("en-US",{style:"currency", currency:account.currency})}`);
//             }
//             break;
//         case "take out":
//             amount = parseInt(prompt("Amount"));
            
//             if (account.balance - amount >= 0) 
//             {
//                 if (confirm("Confirm?"))
//                 {
//                     console.log(`starting balance: ${account.balance.toLocaleString("en-US",{style:"currency", currency:account.currency})}
//                         transaction amount: ${amount.toLocaleString("en-US",{style:"currency", currency:account.currency})}
//                         new balance ${(account.balance -= Math.abs(amount)).toLocaleString("en-US",{style:"currency", currency:account.currency})}`);
//                 }
//             }
//             else
//             {
//                 console.log(`Unable to do so`);
//             }
//             break;
//         case "view":
//             console.log(`balance: ${account.balance}`);
//             break;
//         case "exit":
//             gate = false;
//             break;
//     }
// } while (gate);

// // # 5

// let chosenDestination = prompt("The chosen destination");
// let estimatedTripLengthDays = Math.abs(Number(prompt("Trip length (in days)")));
// let ticketPrice = Math.abs(Number(prompt("Ticket price")));
// let nightStayFare = Math.abs(Number(prompt("Price for each night")));
// let dayBudgetForFood = Math.abs(Number(prompt("Enter the daily budget")));
// let excursionPrice = 0;
// if(confirm("with excursion?"))
//     excursionPrice = 750;

// let overallExpenses = (ticketPrice * 2) + ((nightStayFare + dayBudgetForFood) * estimatedTripLengthDays) + excursionPrice;

// console.log(`Destination: ${chosenDestination}
//     ticket price (2 ways): ${ticketPrice * 2}
//     daily living expenses (for ${estimatedTripLengthDays}): ${(nightStayFare + dayBudgetForFood) * estimatedTripLengthDays}
//     excursion: ${excursionPrice}
//     overall expenses (with 10% reserves): ${overallExpenses + (overallExpenses * 0.1)}`);

