// const squareEl = document.querySelector(".square");
// const circleEl = document.querySelector(".circle");
// const bodyEl = document.querySelector("body");
// // console.log(bodyEl)

// circleEl.addEventListener("mousemove", () => {
//   const x = Math.round(Math.random() * window.screen.width - 100);
//   const y = Math.round(Math.random() * window.screen.height - 100);
//   circleEl.style.left = `${x}px`;
//   circleEl.style.top = `${y}px`;
// });
// bodyEl.addEventListener("click", () => {
//   location.reload();
// });

// const makeTransaction = (quantity, pricePerDroid, customerCredits) => {
//   const total = quantity * pricePerDroid;
//   return customerCredits < total
//     ? console.log("Insufficient funds!")
//     : console.log(`You ordered ${quantity} droids worth ${total} credits!`);
// };
// console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

// const formatMessage = (message, maxLength) => {
//   maxLength = message.length;
//   return message <= maxLength ? message : message.slice(0, maxLength) + "...";
// };
// console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
// console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
// console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
// console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"

// const checkForSpam = (message) => {
//   const modifMessage = message.toUpperCase();

//   return modifMessage.includes("SPAM") || modifMessage.includes("SALE");
// };
// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// console.log(checkForSpam("Trust me, this is not a spam message")); // true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// switch (expression) {
//   case value1:
//     // Код для выполнения, если expression === value1
//     break;
//   case value2:
//     // Код для выполнения, если expression === value2
//     break;
//   default:
//   // Код для выполнения, если ни одно из значений не совпало
// }China — 100 кредитів

// const getShippingCost = (country) => {
//   let message;
//   let price;
//   switch (country) {
//     case "China":
//       price = 100;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//     case "Chile":
//       price = 200;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//     case "Australia":
//       price = 150;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//     case "Jamaica":
//       price = 300;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//     default:
//       message = `Sorry, there is no delivery to your country`;
//   }
//   return message;
// };
// console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
// console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
// console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
// const slugify = (title) => {
//   const slug = title.toLowerCase().split(" ").join("-");
//   return slug;
// };
// console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
// const makeArray = (firstArray, secondArray, maxLength) => {
//   const newArr = firstArray.concat(secondArray);
//   if (newArr.length > maxLength) {
//     const arr = newArr.slice(0, maxLength);
//     return arr;
//   } else {
//     return newArr;
//   }
// };
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
// const filterArray = (numbers, value) => {
//   const newArr = [];
//   numbers.forEach((number) => {
//     number > value && newArr.push(number);
//   });

//   return newArr;
// };
// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
// const isEnoughCapacity = (products, containerSize) => {
//   let message;
//   const dataProducts = Object.values(products);

//   const totalProducts = dataProducts.reduce((acc, product) => {
//     acc += product;
//     return acc;
//   }, 0);

//   totalProducts < containerSize ? (message = "true") : (message = "false");
//   return message;
// };
// console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

// console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

// console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true

// console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false
// const calcAverageCalories = (days) => {
//   let totalCalories = 0;
//   for (const day of days) {
//     totalCalories += day.calories;
//   }
//   const averageCalories = totalCalories / 7;
//   return averageCalories;
// };
// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 3010 },
//     { day: "tuesday", calories: 3200 },
//     { day: "wednesday", calories: 3120 },
//     { day: "thursday", calories: 2900 },
//     { day: "friday", calories: 3450 },
//     { day: "saturday", calories: 3280 },
//     { day: "sunday", calories: 3300 },
//   ])
// ); // 3180

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 2040 },
//     { day: "tuesday", calories: 2270 },
//     { day: "wednesday", calories: 2420 },
//     { day: "thursday", calories: 1900 },
//     { day: "friday", calories: 2370 },
//     { day: "saturday", calories: 2280 },
//     { day: "sunday", calories: 2610 },
//   ])
// ); // 2270

// console.log(calcAverageCalories([])); // 0
// const profile = {
//   username: "Jacob",
//   playTime: 400,
//   changeUsername(newName) {
//     this.username = newName;
//   },
//   updatePlayTime(hours) {
//     this.playTime = this.playTime + hours;
//   },
//   getInfo() {
//     return `${this.username} has ${this.playTime} active hours!`;
//   },
// };

// console.log(profile.getInfo()); // "Jacob has 300 active hours!"

// profile.changeUsername("Alex");
// console.log(profile.getInfo()); // "Marco has 300 active hours!"

// profile.updatePlayTime(20);
// console.log(profile.getInfo()); // "Marco has 320 active hours!"
// const getUserNames = (users) => {
//   return users.map((user) => user.name);
// };
// console.log(
//   getUserNames([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       balance: 2811,
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       balance: 3821,
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       balance: 3793,
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       balance: 2278,
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       balance: 3951,
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       balance: 1498,
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       balance: 2764,
//     },
//   ])
// ); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]
// const getUsersWithFriend = (users, friendName) => {
//   return users.filter((user) => user.friends.includes(friendName));
// };

// const allUsers = [
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"],
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"],
//   },
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"],
//   },
// ];

// console.log(getUsersWithFriend(allUsers, "Briana Decker"));
// // [
// //   {
// //     name: "Sharlene Bush",
// //     friends: ["Briana Decker", "Sharron Pace"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// // [
// //   {
// //     name: "Elma Head",
// //     friends: ["Goldie Gentry", "Aisha Tran"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, "Adrian Cross")); // []
// const sortByDescendingFriendCount = (users) => {
//   return users.toSorted(
//     (firstUser, secondUser) =>
//       secondUser.friends.length - firstUser.friends.length
//   );
// };

// console.log(
//   sortByDescendingFriendCount([
//     {
//       name: "Moore Hensley",
//       friends: ["Sharron Pace"],
//       gender: "male",
//     },
//     {
//       name: "Sharlene Bush",
//       friends: ["Briana Decker", "Sharron Pace"],
//       gender: "female",
//     },
//     {
//       name: "Ross Vazquez",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       gender: "male",
//     },
//     {
//       name: "Elma Head",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       gender: "female",
//     },
//     {
//       name: "Carey Barr",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       gender: "male",
//     },
//     {
//       name: "Blackburn Dotson",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       gender: "male",
//     },
//     {
//       name: "Sheree Anthony",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       gender: "female",
//     },
//   ])
// );
// [
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"],
//     gender: "female"
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     gender: "female"
//   },
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"],
//     gender: "male"
//   }
// ]
// const getTotalBalanceByGender = (users, gender) => {
//   return users
//     .filter((user) => user.gender === gender)
//     .reduce((acc, user) => {
//       acc += user.balance;
//       return acc;
//     }, 0);
// };

// const clients = [
//   {
//     name: "Moore Hensley",
//     gender: "male",
//     balance: 2811,
//   },
//   {
//     name: "Sharlene Bush",
//     gender: "female",
//     balance: 3821,
//   },
//   {
//     name: "Ross Vazquez",
//     gender: "male",
//     balance: 3793,
//   },
//   {
//     name: "Elma Head",
//     gender: "female",
//     balance: 2278,
//   },
//   {
//     name: "Carey Barr",
//     gender: "male",
//     balance: 3951,
//   },
//   {
//     name: "Blackburn Dotson",
//     gender: "male",
//     balance: 1498,
//   },
//   {
//     name: "Sheree Anthony",
//     gender: "female",
//     balance: 2764,
//   },
// ];

// console.log(getTotalBalanceByGender(clients, "male")); // 12053

// console.log(getTotalBalanceByGender(clients, "female")); // 8863
