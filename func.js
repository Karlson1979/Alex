// Array.prototype.forEach2=function (fn){
//     for (let i =0; i<this.length; i=i+1){
//         fn(this[i], i, this)
//     }
// }

// const arr=[1,2,3,4,5,6]
// arr.forEach2((e,i,arr)=>console.log(e,i,arr))
// arr.map((el)=>console.log(el+1))

// function fn5(fn1,fn4){

//    return fn1()+fn4()
// }
// const fn1=()=>10
//    const fn4=()=>20
// console.log(fn5(fn1,fn4))

// function fn(f1,f2){
//     return{
//         res:'name1',
//         res2:'surname'
//     }
// }
// const f1=()=>'name1'
// const f2=()=> 'surname'
// console.log(fn(f1(),f2()))

// function fn5(a,b){
//     return (a.toString().length+ b.toString().length)
// }
// console.log(fn5(100,34))

// class Person {
//   constructor(name, age, city) {
//     this.name = name;
//     this.age = age;
//     this.city=city
//     return this;
//   }
// }
// const person1 = new Person("Alex", 44, Kyiv);
// console.log(person1);

// class Car {
//   constructor(model, yea, color) {
//     this.model = model;
//     this.yea = yea;
//     this.color = color;
//   }
//   showInfo() {
//     return console.log(this);
//   }

//   newModel(model) {
//     return (this.model = model);
//   }
// }
// const car1 = new Car("jeep", 2018, "red");
// console.log(car1.showInfo());
// car1.newModel("BMV");
// car1.showInfo();

// class Person2 {
//   constructor(name, age, city) {
//     this.name = name;
//     this.age = age;
//     this.city=city;
//   }
//   changeName(name) {
//     return (this.name = name);
//   }
//   changeAge(age) {
//     return (this.age = newAge);
//   }
//   changeCity(city){
//     return (this.city=newCity)
//   }
// }
// const person2 = new Person2("Alex", 44);
// console.log(person2);

// console.log(person2.changeName("Boris"));

// class Room {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }

//   info() {
//     console.log(this);
//   }
// }

// class Square extends Room {
//   constructor(height, width) {
//     super(height, width); // Передаем высоту и ширину в родительский конструктор
//     this.square = height * width; // Вычисляем площадь квадрата
//   }
// }

// const room1 = new Room(12, 13);
// const square1 = new Square(12, 13); // Теперь передаем два аргумента

// room1.info(); // Вывод информации о room1
// square1.info(); // Вывод информации о square1

//   class MyObject extends Object{
//     constructor(myObject){
//         super(myObject)
//     }
//     copy(){
//         console.log(...this)
//     }
//   }
//   const myObject=new MyObject(
//    { name:'Alex',
//     age:20

// }

//   )
//   myObject.copy()

// const h = document.getElementById("h1");
// h.textContent = "fack you self";

// const spans = document.getElementsByTagName("span");
// [...spans].forEach((e, i) => {
//   e.textContent = i;
//   e.style.color = "red";
// });

// const button = document.createElement("button");
// const buttonAlert = document.querySelector(".alert");
// button.textContent = "КНОПКА";
// document.body.appendChild(button);

// button.onclick = function () {
//   button.style.color = "red";
// };
// buttonAlert.onclick = function () {
//   return alert("hello");
// };

// function addSpanElement(text) {
//   // Створюємо новий елемент span
//   var spanElement = document.createElement("span");

//   // Встановлюємо текст для елемента span
//   spanElement.textContent = text;

//   // Додаємо елемент span до body (або іншого батьківського елемента)
//   document.body.appendChild(spanElement);
// }

// // Приклад виклику функції з текстом "Привіт, світ!"
// addSpanElement("Привіт, світ!");

const nameInput = document.querySelector("#name");
const ageInput = document.querySelector("#age");
const cityInput = document.querySelector("#city");
const createButton = document.querySelector("#create");
const userSection = document.querySelector("#users-section");
const searchInput = document.querySelector("#search");
const searchButton = document.querySelector("#search-button");
const cancelSearchButton = document.querySelector("#cancel-search-button");

let users = [];

const deleteUser = (indexOfUser) => {
  users = users.filter((el, i) => i !== indexOfUser);
  renderUsers(users);
};

function renderUsers(usersToRender) {
  userSection.innerHTML = "";

  const usersContent = usersToRender.map(
    (user) => ` <div class='user-card'>
  
  <p> ${user.name}</p>
  <span>${user.age}</span>
  <p>${user.city}</p>
  <button class='delete-user-button'>Delete</button>
  </div>`
  );

  usersContent.forEach((userLayout) => {
    userSection.innerHTML += userLayout;
  });

  const deleteButton = [...document.querySelectorAll(".delete-user-button")];
  deleteButton.forEach((button, i) => {
    button.onclick = () => deleteUser(i);
  });
}

createButton.onclick = () => {
  const name = nameInput.value;
  const age = +ageInput.value;
  const city = cityInput.value;

  const user = { name, age, city };
  users.push(user);
  nameInput.value = "";
  ageInput.value = "";
  cityInput.value = "";
  renderUsers(users);
};

searchButton.onclick = () => {
  const usersToRender=users.filter((user)=>user.name.includes(searchInput.value))
  
  renderUsers(usersToRender)
};
cancelSearchButton.onclick=()=>{
  renderUsers(users)
  searchInput.value=''
}
